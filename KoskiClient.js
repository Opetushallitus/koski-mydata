import axios from 'axios';

class KoskiClient {

    constructor(username, password) {
        this.instance = axios.create({
            baseURL: 'https://dev.koski.opintopolku.fi/koski/api/',
            timeout: 5000,
            auth: {
                username,
                password
            },
        });
    }

    async getUserOid(hetu) {

        return new Promise((resolve, reject) => {
            this.instance.get(`henkilo/search?query=${hetu}`)
                .then(function (response) {
                    resolve(response.data['henkilöt'][0].oid);
                })
                .catch(function (error) {
                    reject(error);
                });
        });
    }

    async getOpintoOikeudet(oid) {
        return new Promise((resolve, reject) => {
            this.instance.get(`oppija/${oid}`)
                .then(function (response) {
                    resolve(response.data.opiskeluoikeudet);
                })
                .catch(function (error) {
                    reject(error);
                });
        });
    }
}

export default KoskiClient;
