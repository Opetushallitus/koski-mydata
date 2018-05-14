// eslint-disable-next-line import/no-extraneous-dependencies
import AWS from 'aws-sdk'; // provided by AWS AMI
import log from 'lambda-log';

class AWSSecretsManager {
    constructor() {
        this.endpoint = 'https://secretsmanager.eu-west-1.amazonaws.com';
        this.region = 'eu-west-1';
        this.secretName = 'lambda/dev/koski/backend/api/2';

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
                log.debug(`Reading secret ${this.secretName} from Secrets Manager`);
                const startTime = new Date();

                if (err) {
                    log.error(err);
                    reject(new Error(err.message));
                } else {
                    log.debug(`Secret ${this.secretName} received in ${new Date() - startTime}ms`);
                    // eslint-disable-next-line camelcase
                    const { koski_backend_username, koski_backend_password } = JSON.parse(data.SecretString);

                    if (typeof koski_backend_username === 'undefined' || koski_backend_username === null) { // eslint-disable-line camelcase
                        reject(new Error('Failed to get secret username'));
                    }
                    if (typeof koski_backend_password === 'undefined' || koski_backend_password === null) { // eslint-disable-line camelcase
                        reject(new Error('Failed to get secret password'));
                    }

                    resolve({
                        username: koski_backend_username,
                        password: koski_backend_password,
                    });
                }
            });
        });
    }
}

export default AWSSecretsManager;
