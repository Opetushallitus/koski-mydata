import axios from 'axios';
import deepOmit from 'omit-deep-lodash';

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

    getUserOid(hetu) {
        return new Promise( async(resolve, reject) => {
            try {
                const response = await this.instance.get(`henkilo/search?query=${hetu}`);
                const students = response.data['henkilöt'];
                if (students.length < 1) reject(new Error('no users found'));

                resolve(students[0].oid);
            } catch (err) {
                // error contains credentials, url contains hetu, lets not log them
                reject(new Error(`Henkilo search failed with status: ${err.response.status}`));
            }
        });
    }

    getOpintoOikeudet(oid) {
        return new Promise( async(resolve, reject) => {
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
