import log from 'lambda-log';
import axios from 'axios';
import deepOmit from 'omit-deep-lodash';
import config from 'config';
import ClientError from './error/ClientError';

const hetuRegexp = /^\d{6}[+-A]\d{3}[a-zA-Z0-9]$/;

class KoskiClient {
    constructor(username, password) {
        this.instance = axios.create({
            baseURL: config.get('backend.url'),
            timeout: 5000,
            auth: {
                username,
                password,
            },
        });

        this.instance.interceptors.request.use((request) => {
            request.startTime = new Date();
            return request;
        });

        this.instance.interceptors.response.use((response) => {
            log.debug(`Response received in ${new Date() - response.config.startTime}ms`);
            return response;
        });

        log.debug(`Created axios instance with backend URL ${config.get('backend.url')}`);
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
                const response = await this.instance.get(`${config.get('backend.api.henkilö')}/${hetu}`);
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

    getOpintoOikeudet(oid, clientMemberCode) {
        if (!clientMemberCode) throw new ClientError('clientMemberCode must be defined when requesting opinto-oikeudet');

        return new Promise(async(resolve, reject) => {
            try {
                const requestPath = `${config.get('backend.api.oppija')}/${oid}`;
                log.info(`Getting opinto-oikeudet from ${requestPath}`);

                const response = await this.instance.get(requestPath, { headers: { 'X-ROAD-MEMBER': clientMemberCode } });
                const { henkilö, opiskeluoikeudet } = response.data;

                if (typeof opiskeluoikeudet === 'undefined' || opiskeluoikeudet === null) reject(new Error('No opiskeluoikeudet found'));
                resolve({
                    henkilö: deepOmit(henkilö, 'hetu'),
                    opiskeluoikeudet: deepOmit(opiskeluoikeudet, 'suoritukset', 'lähdejärjestelmänId', 'koulutustoimija'),
                });
            } catch (err) {
                // error contains credentials, url contains hetu, lets not log them
                reject(new Error(`Opinto-oikeus search failed with message: ${KoskiClient.generateErrorMessage(err)}`));
            }
        });
    }
}

export default KoskiClient;
