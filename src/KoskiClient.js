import log from 'lambda-log';
import axios from 'axios';
import deepOmit from 'omit-deep-lodash';
import config from 'config';
import ClientError from './error/ClientError';
import Forbidden from './error/Forbidden';

const hetuRegexp = /^\d{6}[+-A]\d{3}[a-zA-Z0-9]$/;

const blacklistedOpiskeluOikeudetFields = [
    'lähdejärjestelmänId',
    'koulutustoimija',
];

const blacklistedStudentFields = [
    'hetu',
    'turvakielto',
    'äidinkieli',
    'kansalaisuus',
    'etunimet',
    'kutsumanimi',
    'sukunimi',
];

const blacklistedLisätiedotForMember = (memberCode) => {
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
            log.debug(`Response received in ${new Date() - response.config.startTime}ms`);
            return response;
        });

        log.info(`Created axios instance with backend URL ${config.get('backend.url')}`);
    }

    static validateHetu(hetu) {
        if (typeof hetu === 'undefined' || hetu === null) throw new Error('Hetu must not be null');
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

    filterLisätiedot(lisätiedot, memberCode) {
        const { osaAikaisuusjaksot } = lisätiedot || false;
        const { virtaOpiskeluoikeudenTyyppi } = lisätiedot || false;
        const { lukukausiIlmoittautuminen } = lisätiedot || false;

        const filtered = {
            ...(osaAikaisuusjaksot && { osaAikaisuusjaksot }),
            ...(virtaOpiskeluoikeudenTyyppi && { virtaOpiskeluoikeudenTyyppi }),
            ...(lukukausiIlmoittautuminen && { lukukausiIlmoittautuminen }),
        };

        return deepOmit(filtered, ...blacklistedLisätiedotForMember(memberCode));
    }

    getOpintoOikeudet(hetu, clientMemberCode) {
        if (!clientMemberCode) throw new ClientError('clientMemberCode must be defined when requesting opinto-oikeudet');
        if (!KoskiClient.validateHetu(hetu)) throw new ClientError('Invalid hetu format');

        return new Promise(async(resolve, reject) => {
            try {
                log.info(`Getting opinto-oikeudet from ${config.get('backend.api.oppija')} for ${clientMemberCode}`);

                const response = await this._executeOppijaDataRequest(hetu, clientMemberCode);

                const { henkilö, opiskeluoikeudet, suostumuksenPaattymispaiva } = response.data;

                if (typeof opiskeluoikeudet === 'undefined' || opiskeluoikeudet === null) reject(new Error('No opiskeluoikeudet found'));

                // Remove 'esiopetus' from response
                const opiskeluoikeudetNoEsiopetus = opiskeluoikeudet.filter(x => (x.tyyppi && x.tyyppi.koodiarvo !== 'esiopetus'));

                // Remove 'suoritukset', except 'osaamisenHankkimistavat which is required for oppisopimus
                const filteredOpiskeluoikeudet = deepOmit(opiskeluoikeudetNoEsiopetus, ...blacklistedOpiskeluOikeudetFields).map((x) => {
                    const { suoritukset, lisätiedot, ...opiskeluoikeus } = x;

                    // Return only the properties required for determining 'oppisopimus', omit the rest
                    const filteredSuoritukset = suoritukset.map((suoritus) => {
                        const { osaamisenHankkimistavat, koulutussopimukset, järjestämismuodot } = suoritus;
                        return { osaamisenHankkimistavat, koulutussopimukset, järjestämismuodot };
                    });

                    const filteredLisätiedot = this.filterLisätiedot(lisätiedot, clientMemberCode);
                    const hasLisätiedot = filteredLisätiedot && Object.keys(filteredLisätiedot).length > 0;

                    return {
                        ...opiskeluoikeus,
                        suoritukset: filteredSuoritukset,
                        ...(hasLisätiedot && { lisätiedot: filteredLisätiedot }),
                    };
                });

                resolve({
                    henkilö: deepOmit(henkilö, ...blacklistedStudentFields),
                    opiskeluoikeudet: filteredOpiskeluoikeudet,
                    suostumuksenPaattymispaiva,
                });
            } catch (err) {
                // error contains credentials, url contains hetu, lets not log them
                if (err.response && err.response.status) {
                    if (err.response.status === 403) {
                        reject(new Forbidden(`Opinto-oikeus search failed due to insufficient permissions:
                        ${KoskiClient.generateErrorMessage(err)}`));
                    } else {
                        log.error(`Koski response: [${err.response.status}]`);
                        reject(new Error(`Opinto-oikeus search failed with message: ${KoskiClient.generateErrorMessage(err)}`));
                    }
                } else {
                    reject(new Error(`Opinto-oikeus search failed with message: ${KoskiClient.generateErrorMessage(err)}`));
                }
            }
        });
    }
}

export default KoskiClient;
