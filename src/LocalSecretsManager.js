require('dotenv').config();

class LocalSecretsManager {
    constructor() {
        this.username = process.env.KOSKI_USER;
        this.password = process.env.KOSKI_PASSWORD;
    }

    /**
     * Read Koski credentials from environment variables
     * @returns {Promise<any>}
     */
    getKoskiCredentials() {
        return new Promise((resolve, reject) => {
            if (typeof this.username === 'undefined' || this.username === null) {
                reject(new Error('username not defined'));
            }
            if (typeof this.password === 'undefined' || this.password === null) {
                reject(new Error('password not defined'));
            }
            resolve({
                username: this.username,
                password: this.password,
            });
        });
    }
}

export default LocalSecretsManager;
