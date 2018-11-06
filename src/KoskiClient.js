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
];

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
            return error.message; // default message
        }
    }

    getUserOid(hetu) {
        if (!KoskiClient.validateHetu(hetu)) throw new ClientError('Invalid hetu format');

        return new Promise(async(resolve, reject) => {
            try {
                log.info('Getting student ID from Koski');
                const response = await this.instance.post(config.get('backend.api.henkilö'), { hetu });
                const students = response.data;

                if (!Array.isArray(students)) reject(new Error('Unexpected student search response from Koski backend'));
                if (students.length < 1) reject(new ClientError('No users found with given hetu'));
                if (students.length > 1) reject(new ClientError('Multiple users found with given hetu'));

                const studentId = students[0].oid;
                if (typeof studentId === 'undefined' || studentId === null) reject(new Error('No oid found for student with given hetu'));

                resolve(studentId);
            } catch (err) {
                // error contains credentials, url contains hetu, lets not log them
                reject(new Error(`Henkilo search failed with message: ${KoskiClient.generateErrorMessage(err)}`));
            }
        });
    }

    getOpintoOikeudet(hetu, clientMemberCode) {
        if (!clientMemberCode) throw new ClientError('clientMemberCode must be defined when requesting opinto-oikeudet');

        return new Promise(async(resolve, reject) => {
            try {
                log.info(`Getting opinto-oikeudet from ${config.get('backend.api.oppija')} for ${clientMemberCode}`);

                const response = await this.instance.post(
                    config.get('backend.api.oppija'), { hetu }, { headers: { 'X-ROAD-MEMBER': clientMemberCode } });

                const { henkilö, opiskeluoikeudet } = response.data;

                if (typeof opiskeluoikeudet === 'undefined' || opiskeluoikeudet === null) reject(new Error('No opiskeluoikeudet found'));

                // Remove 'suoritukset', except 'osaamisenHankkimistavat which is required for oppisopimus
                const filteredOpiskeluoikeudet = deepOmit(opiskeluoikeudet, ...blacklistedOpiskeluOikeudetFields).map((x) => {
                    const { suoritukset, lisätiedot, ...opiskeluoikeus } = x;

                    // Return only the properties required for determining 'oppisopimus', omit the rest
                    const filteredSuoritukset = suoritukset.map((suoritus) => {
                        const { osaamisenHankkimistavat, koulutussopimukset, järjestämismuodot } = suoritus;
                        return { osaamisenHankkimistavat, koulutussopimukset, järjestämismuodot };
                    });
                    const { osaAikaisuusjaksot } = lisätiedot || false;
                    return {
                        ...opiskeluoikeus,
                        suoritukset: filteredSuoritukset,
                        ...(osaAikaisuusjaksot && { lisätiedot: { osaAikaisuusjaksot } }), // include osaAikaisuusjaksot, but only if exists
                    };
                });

                resolve({
                    henkilö: deepOmit(henkilö, ...blacklistedStudentFields),
                    opiskeluoikeudet: filteredOpiskeluoikeudet,
                });
            } catch (err) {
                // error contains credentials, url contains hetu, lets not log them
                if (err.response && err.response.status && err.response.status === 403) {
                    reject(new Forbidden(`Opinto-oikeus search failed due to insufficient permissions: 
                    ${KoskiClient.generateErrorMessage(err)}`));
                } else {
                    reject(new Error(`Opinto-oikeus search failed with message: ${KoskiClient.generateErrorMessage(err)}`));
                }
            }
        });
    }
}

export default KoskiClient;
