import AWSSecretsManager from '../src/AWSSecretsManager';

const secretsManager = new AWSSecretsManager();

describe('AWSSecretsManager', () => {
    let trigger;

    const client = {
        getSecretValue: (object, callback) => (trigger = callback),
    };

    secretsManager.client = client;

    beforeEach(() => {
        spyOn(client, 'getSecretValue').and.callThrough();
    });

    it('Should call getSecretValue', () => {
        const secrets = secretsManager.getKoskiCredentials();
        trigger(null, { SecretString: JSON.stringify({ koski_backend_username: 'jooh', koski_backend_password: 'plaah' }) });
        expect(client.getSecretValue).toHaveBeenCalledWith({ SecretId: 'dev/koski/backend/api' }, expect.any(Function));
        return secrets;
    });
});
