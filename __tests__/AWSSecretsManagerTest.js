import AWSSecretsManager from '../src/AWSSecretsManager';

const secretsManager = new AWSSecretsManager();

describe('AWSSecretsManager', () => {
    const awsSecretCredentials = { // This is how AWS will return them
        koski_backend_username: 'username',
        koski_backend_password: 'password',
    };

    const expectedCredentials = { // This is what we expect to return after AWS response has been parsed
        username: awsSecretCredentials.koski_backend_username,
        password: awsSecretCredentials.koski_backend_password,
    };

    const client = {
        getSecretValue: (object, callback) => {
            callback(null, { SecretString: JSON.stringify(awsSecretCredentials) }); // call callback immediately
        },
    };

    secretsManager.client = client;

    beforeEach(() => {
        spyOn(client, 'getSecretValue').and.callThrough();
    });

    it('Should call getSecretValue', async(done) => {
        const receivedCredentials = await secretsManager.getKoskiCredentials();
        expect(client.getSecretValue).toHaveBeenCalledWith({ SecretId: 'koski/api-credentials/test' }, expect.any(Function));
        expect(expectedCredentials).toEqual(receivedCredentials);
        done();
    });
});
