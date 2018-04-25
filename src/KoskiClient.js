import axios from 'axios';
import deepOmit from 'omit-deep-lodash';

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

    // TODO: Log request time
    getUserOid(hetu) {
        if (!KoskiClient.validateHetu(hetu)) throw new Error('Invalid hetu format');

        return new Promise(async(resolve, reject) => {
            try {
                const response = await this.instance.get(`henkilo/search?query=${hetu}`);
                const students = response.data['henkilöt'];

                if (!Array.isArray(students)) reject(new Error('Unexpected search response from Koski backend'));
                if (students.length < 1) reject(new Error('no users found'));

                resolve(students[0].oid);
            } catch (err) {
                // error contains credentials, url contains hetu, lets not log them
                reject(new Error(`Henkilo search failed with status: ${err.response.status}`));
            }
        });
    }

    // TODO: Log request time
    getOpintoOikeudet(oid) {
        return new Promise(async(resolve, reject) => {
            try {
                const response = await this.instance.get(`oppija/${oid}`);
                const { opiskeluoikeudet } = response.data;
                resolve(deepOmit(opiskeluoikeudet, 'suoritukset')); // remove 'suoritukset' from response
            } catch (err) {
                // error contains credentials, url contains hetu, lets not log them
                reject(new Error(`Suoritukset search failed with status: ${err.response.status}`));
            }
        });
    }
}

export default KoskiClient;
