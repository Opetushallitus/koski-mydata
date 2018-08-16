// eslint-disable-next-line import/no-extraneous-dependencies
import AWS from 'aws-sdk'; // provided by AWS AMI
import log from 'lambda-log';

class AWSSecretsManager {
    constructor() {
        this.endpoint = 'https://secretsmanager.eu-west-1.amazonaws.com';
        this.region = 'eu-west-1';
        this.environment = process.env.NODE_CONFIG_ENV || 'dev';
        this.secretName = `koski/api-credentials/${this.environment}`;

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
    getKoskiCredentials(memberName) {

        if (typeof memberName === 'undefined' || memberName === null) {
            return Promise.reject(new Error('Cannot get credentials for undefined member'));
        }

        return new Promise((resolve, reject) => {
            this.client.getSecretValue({ SecretId: this.secretName }, (err, data) => {
                log.debug(`Reading secret ${this.secretName} from Secrets Manager for ${memberName}`);
                const startTime = new Date();

                if (err) {
                    log.error(err);
                    reject(new Error(err.message));
                } else {
                    log.debug(`Secret ${this.secretName} received in ${new Date() - startTime}ms`);
                    const { [memberName]: { username, password } } = JSON.parse(data.SecretString);

                    if (typeof username === 'undefined' || username === null) {
                        reject(new Error('Failed to get secret username'));
                    }
                    if (typeof password === 'undefined' || password === null) {
                        reject(new Error('Failed to get secret password'));
                    }

                    resolve({
                        username,
                        password,
                    });
                }
            });
        });
    }
}

export default AWSSecretsManager;
