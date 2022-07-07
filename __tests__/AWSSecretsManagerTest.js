import AWSSecretsManager from '../src/AWSSecretsManager';

const secretsManager = new AWSSecretsManager();
const clientMemberName = 'hsl';

describe('AWSSecretsManager', () => {
    const awsSecretCredentials = { // This is how AWS will return them
        hsl: {
            username: 'username',
            password: 'password',
        },
    };

    const expectedCredentials = { // This is what we expect to return after AWS response has been parsed
        username: awsSecretCredentials.hsl.username,
        password: awsSecretCredentials.hsl.password,
    };

    const client = {
        getSecretValue: (object, callback) => {
            callback(null, { SecretString: JSON.stringify(awsSecretCredentials) }); // call callback immediately
        },
    };

    secretsManager.client = client;

    beforeEach(() => {
        spyOn(client, 'getSecretValue').and.callThrough(); // eslint-disable-line jest/no-jasmine-globals
    });

    it('Should call getSecretValue', async(done) => { // eslint-disable-line jest/no-done-callback
        const receivedCredentials = await secretsManager.getKoskiCredentials(clientMemberName);
        expect(client.getSecretValue).toHaveBeenCalledWith({ SecretId: 'koski/api-credentials/dev' }, expect.any(Function));
        expect(expectedCredentials).toEqual(receivedCredentials);
        done();
    });
});
