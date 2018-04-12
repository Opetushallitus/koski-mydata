import axios from 'axios';

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
                    if (students.length < 1 ) reject('no users found');

                    resolve(students[0].oid);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

    async getOpintoOikeudet(oid) {
        return new Promise((resolve, reject) => {
            this.instance.get(`oppija/${oid}`)
                .then((response) => {
                    resolve(response.data.opiskeluoikeudet);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }
}

export default KoskiClient;
