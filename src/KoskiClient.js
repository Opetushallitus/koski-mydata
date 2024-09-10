import log from 'lambda-log';
import axios from 'axios';
import deepOmit from 'omit-deep-lodash';
import cleanDeep from 'clean-deep';
import config from 'config';
import ClientError from './error/ClientError';
import NotFound from './error/NotFound';
import Forbidden from './error/Forbidden';
import SoapResponseParser from './soap/SoapResponseParser';

const hetuRegexp = /^\d{6}[+-ABCDEFYXWVU]\d{3}[a-zA-Z0-9]$/;

const denylistedOpiskeluOikeudetFields = [
    'lähdejärjestelmänId',
    'koulutustoimija',
    'opintojenRahoitus',
];

const denylistedStudentFields = [
    'hetu',
    'turvakielto',
    'äidinkieli',
    'kansalaisuus',
    'etunimet',
    'kutsumanimi',
    'sukunimi',
];

const denylistedOpiskeluoikeudenTyypit = [
    'esiopetus',
    'vapaansivistystyonkoulutus',
    'tuva',
    'muukuinsaanneltykoulutus',
    'europeanschoolofhelsinki',
    'ebtutkinto',
    'taiteenperusopetus',
];

const denylistedLisätiedotForMember = (memberCode) => {
    switch (memberCode) {
    case '2274586-3': // HSL
        return ['ythsMaksettu'];
    default:
        return [];
    }
};

const callerId = '1.2.246.562.10.00000000001.koski-mydata';

class KoskiClient {
    constructor(username, password) {
        this.instance = axios.create({
            baseURL: config.get('backend.url'),
            timeout: config.has('backend.timeout') ? config.get('backend.timeout') : 30000, // default to 30 seconds
            auth: {
                username,
                password,
            },
            headers: { 'Caller-Id': callerId },
        });

        this.instance.interceptors.request.use((request) => {
            request.startTime = new Date();
            return request;
        });

        this.instance.interceptors.response.use((response) => {
            log.debug({ koskiResponseStatus: response.status });
            log.debug(`Response received in ${new Date() - response.config.startTime}ms`);
            return response;
        }, (error) => {
            log.info({ koskiResponseStatus: error.response.status });
            log.debug(`Response received in ${new Date() - error.config.startTime}ms`);
            return Promise.reject(error);
        });

        log.info(`Created axios instance with backend URL ${config.get('backend.url')}`);
    }

    static validateHetu(hetu) {
        if (typeof hetu === 'undefined' || hetu === null || hetu === undefined) throw new Error('Hetu must not be null or undefined');
        return hetuRegexp.test(hetu);
    }

    static generateErrorMessage(error) {
        try {
            return error.response.data[0].message; // error message from Axios / Koski API
        } catch (err) {
            return error.message || error; // default message
        }
    }

    /* istanbul ignore next */
    async _executeOppijaDataRequest(hetu, clientMemberCode) {
        return this.instance.post(config.get('backend.api.oppija'), { hetu }, { headers: { 'X-ROAD-MEMBER': clientMemberCode } });
    }

    async _getDataFromNewApi(xml) {
        return this.instance.post(
            'palveluvayla/hsl',
            xml,
            {
                headers: {
                    'Content-Type': 'application/xml',
                },
            },
        );
    }

    lisätiedotFilter(lisätiedot, memberCode) {
        const { osaAikaisuusjaksot } = lisätiedot || false;
        const { virtaOpiskeluoikeudenTyyppi } = lisätiedot || false;
        const { lukukausiIlmoittautuminen } = lisätiedot || false;

        const filtered = {
            ...(osaAikaisuusjaksot && { osaAikaisuusjaksot }),
            ...(virtaOpiskeluoikeudenTyyppi && { virtaOpiskeluoikeudenTyyppi }),
            ...(lukukausiIlmoittautuminen && { lukukausiIlmoittautuminen }),
        };

        return deepOmit(filtered, ...denylistedLisätiedotForMember(memberCode));
    }

    järjestämismuotoFilter(muodot) {
        if (!muodot) return muodot;

        return muodot.map((m) => ({
            alku: m.alku,
            loppu: m.loppu,
            järjestämismuoto: {
                tunniste: m.järjestämismuoto.tunniste,
            } }
        ));
    }

    koulutussopimusFilter(sopimukset) {
        if (!sopimukset) return sopimukset;

        const { alku, loppu, paikkakunta, maa } = sopimukset;
        return { alku, loppu, paikkakunta, maa };
    }

    hankkimistapaFilter(hankkimistavat) {
        if (!hankkimistavat) return hankkimistavat;

        return hankkimistavat.map((t) => ({
            alku: t.alku,
            loppu: t.loppu,
            osaamisenHankkimistapa: { tunniste: t.osaamisenHankkimistapa.tunniste },
        }));
    }

    suoritusFilter(suoritukset) {
        return suoritukset.map((suoritus) => {
            const { osaamisenHankkimistavat, koulutussopimukset, järjestämismuodot, tyyppi } = suoritus;

            return {
                osaamisenHankkimistavat: this.hankkimistapaFilter(osaamisenHankkimistavat),
                koulutussopimukset: this.koulutussopimusFilter(koulutussopimukset),
                järjestämismuodot: this.järjestämismuotoFilter(järjestämismuodot),
                tyyppi };
        });
    }

    opiskeluoikeusFilter(opiskeluoikeudet, clientMemberCode) {
        const sallitutOpiskeluoikeudet = opiskeluoikeudet.filter((opiskeluoikeus) => {
            return !denylistedOpiskeluoikeudenTyypit.includes(opiskeluoikeus.tyyppi.koodiarvo);
        });

        return deepOmit(sallitutOpiskeluoikeudet, ...denylistedOpiskeluOikeudetFields).map((x) => {
            const { suoritukset, lisätiedot, ...opiskeluoikeus } = x;

            const filteredSuoritukset = this.suoritusFilter(suoritukset);
            const filteredLisätiedot = this.lisätiedotFilter(lisätiedot, clientMemberCode);

            return cleanDeep({
                ...opiskeluoikeus,
                suoritukset: filteredSuoritukset,
                lisätiedot: filteredLisätiedot,
            });
        });
    }

    async getOpintoOikeudetFromNewApi(xml) {
        try {
            log.info('Getting opinto-oikeudet from the new API');
            const response = await this._getDataFromNewApi(xml);
            log.debug(response.data);
            const parsedResult = new SoapResponseParser().parseXmlResponse(response.data);
            log.debug(parsedResult);
            const jsonString = parsedResult.data.trim();
            log.debug(jsonString);

            let opintoOikeudet;
            try {
                opintoOikeudet = JSON.parse(jsonString);
            } catch (error) {
                throw new Error('Error parsing JSON from CDATA section: ' + error.message);
            }

            return opintoOikeudet;
        } catch (err) {
            if (err instanceof NotFound) {
                throw err;
            }
            // error contains credentials, url contains hetu, lets not log them
            if (err.response && err.response.status) {
                if (err.response.status === 403) {
                    throw new NotFound(`Opinto-oikeus search failed due to insufficient permissions:
                    ${KoskiClient.generateErrorMessage(err)}`);
                } else if (err.response.status === 404) {
                    throw new NotFound('No opiskeluoikeudet found');
                } else {
                    log.error(`Koski response: [${err.response.status}]`);
                    throw new Error(`Opinto-oikeus search failed with message: ${KoskiClient.generateErrorMessage(err)}`);
                }
            } else {
                throw new Error(`Opinto-oikeus search failed with message: ${KoskiClient.generateErrorMessage(err)}`);
            }
        }
    }

    async getOpintoOikeudet(hetu, clientMemberCode) {
        if (!clientMemberCode) throw new ClientError('clientMemberCode must be defined when requesting opinto-oikeudet');
        if (!KoskiClient.validateHetu(hetu)) throw new ClientError('Invalid hetu format');

        try {
            log.info(`Getting opinto-oikeudet from ${config.get('backend.api.oppija')} for ${clientMemberCode}`);
            const response = await this._executeOppijaDataRequest(hetu, clientMemberCode);

            const { henkilö, opiskeluoikeudet, suostumuksenPaattymispaiva } = response.data;
            if (typeof opiskeluoikeudet === 'undefined' || opiskeluoikeudet === null) {
                throw new NotFound('No opiskeluoikeudet found');
            }

            const filteredOpiskeluoikeudet = this.opiskeluoikeusFilter(opiskeluoikeudet, clientMemberCode);
            if (filteredOpiskeluoikeudet.length === 0) {
                throw new NotFound('No opiskeluoikeudet found');
            }

            return {
                henkilö: deepOmit(henkilö, ...denylistedStudentFields),
                opiskeluoikeudet: filteredOpiskeluoikeudet,
                suostumuksenPaattymispaiva,
            };
        } catch (err) {
            if (err instanceof NotFound) {
                throw err;
            }
            // error contains credentials, url contains hetu, lets not log them
            if (err.response && err.response.status) {
                if (err.response.status === 403) {
                    throw new Forbidden(`Opinto-oikeus search failed due to insufficient permissions:
                    ${KoskiClient.generateErrorMessage(err)}`);
                } else if (err.response.status === 404) {
                    throw new NotFound('No opiskeluoikeudet found');
                } else {
                    log.error(`Koski response: [${err.response.status}]`);
                    throw new Error(`Opinto-oikeus search failed with message: ${KoskiClient.generateErrorMessage(err)}`);
                }
            } else {
                throw new Error(`Opinto-oikeus search failed with message: ${KoskiClient.generateErrorMessage(err)}`);
            }
        }
    }
}

export default KoskiClient;
