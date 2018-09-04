require('dotenv').config();

class LocalSecretsManager {
    /**
     * Read Koski credentials from environment variables
     * @returns {Promise<any>}
     */
    getKoskiCredentials(memberId) {
        return new Promise((resolve, reject) => {
            const username = process.env[`koski_user_${memberId}`];
            const password = process.env[`koski_password_${memberId}`];

            if (typeof username === 'undefined' || username === null) {
                reject(new Error(`Koski backend username not defined for member ${memberId}`));
            }
            if (typeof password === 'undefined' || password === null) {
                reject(new Error(`Koski backend password not defined for member ${memberId}`));
            }
            resolve({
                username,
                password,
            });
        });
    }
}

export default LocalSecretsManager;
