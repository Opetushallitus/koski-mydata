import AWS from 'aws-sdk'; // provided by the AMI

class SecretsManager {
    constructor() {
        this.endpoint = 'https://secretsmanager.eu-west-1.amazonaws.com';
        this.region = 'eu-west-1';
        this.secretName = 'dev/koski/backend/api';

        // Create a Secrets Manager client
        this.client = new AWS.SecretsManager({
            endpoint: this.endpoint,
            region: this.region,
        });
    }

    /**
     * Get Koski credentials from Amazon Secrets Manager.
     * At the moment this function does not cache the result.
     * @returns {Promise<any>}
     */
    getKoskiCredentials() {
        return new Promise((resolve, reject) => {
            this.client.getSecretValue({ SecretId: this.secretName }, (err, data) => {
                if (err) {
                    reject(new Error(err.message));
                } else {
                    const response = JSON.parse(data.SecretString);
                    const { koski_backend_username, koski_backend_password } = response;

                    resolve({
                        username: koski_backend_username,
                        password: koski_backend_password,
                    });
                }
            });
        });
    }
}

export default SecretsManager;
