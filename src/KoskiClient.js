import axios from 'axios';
import deepOmit from 'omit-deep-lodash';
import ClientError from './error/ClientError';

const hetuRegexp = /^\d{6}[+-A]\d{3}[a-zA-Z0-9]$/;

class KoskiClient {
    constructor(username, password) {
        this.instance = axios.create({
            baseURL: 'https://dev.koski.opintopolku.fi/koski/api/', // TODO: Read URL from environment variables
            timeout: 5000,
            auth: {
                username,
                password,
            },
        });
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

    // TODO: Log request time
    getUserOid(hetu) {
        if (!KoskiClient.validateHetu(hetu)) throw new ClientError('Invalid hetu format');

        return new Promise(async(resolve, reject) => {
            try {
                const response = await this.instance.get(`henkilo/hetu/${hetu}`);
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

    // TODO: Log request time
    getOpintoOikeudet(oid) {
        return new Promise(async(resolve, reject) => {
            try {
                const response = await this.instance.get(`oppija/${oid}`);
                const { henkilö, opiskeluoikeudet } = response.data;

                if (typeof opiskeluoikeudet === 'undefined' || opiskeluoikeudet === null) reject(new Error('No opiskeluoikeudet found'));
                resolve( {
                    henkilö: deepOmit(henkilö, 'hetu'),
                    opiskeluoikeudet: deepOmit(opiskeluoikeudet, 'suoritukset'), // remove 'suoritukset' from response
                });
            } catch (err) {
                // error contains credentials, url contains hetu, lets not log them
                reject(new Error(`Opinto-oikeus search failed with message: ${KoskiClient.generateErrorMessage(err)}`));
            }
        });
    }
}

export default KoskiClient;
