import axios from 'axios';
import deepOmit from 'omit-deep-lodash';

class KoskiClient {
    constructor(username, password) {
        this.instance = axios.create({
            baseURL: 'https://dev.koski.opintopolku.fi/koski/api/',
            timeout: 5000,
            auth: {
                username,
                password,
            },
        });
    }

    async getUserOid(hetu) {
        return new Promise((resolve, reject) => {
            this.instance.get(`henkilo/search?query=${hetu}`)
                .then((response) => {
                    const students = response.data['henkilöt'];
                    if (students.length < 1) reject(new Error('no users found'));

                    resolve(students[0].oid);
                })
                .catch((error) => {
                    // error contains hetu and credentials, lets not log them
                    reject(new Error(`Henkilo search failed with status: ${error.response.status}`));
                });
        });
    }

    async getOpintoOikeudet(oid) {
        return new Promise((resolve, reject) => {
            this.instance.get(`oppija/${oid}`)
                .then((response) => {
                    const { opiskeluoikeudet } = response.data;
                    resolve(deepOmit(opiskeluoikeudet, 'suoritukset')); // remove 'suoritukset' from response
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }
}

export default KoskiClient;
