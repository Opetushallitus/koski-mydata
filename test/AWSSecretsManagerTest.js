import expect from 'expect';
import rewire from 'rewire';

import AWSSecretsManager from '../src/AWSSecretsManager';

const secretsManager = new AWSSecretsManager();

describe('AWSSecretsManager', () => {

    let trigger;

    const client = {
        getSecretValue: (object, callback) => { console.log(`Called ${typeof object}, ${typeof callback}`); trigger = callback; },
    };

    secretsManager.client = client;

    expect.spyOn(client, 'getSecretValue').andCallThrough();

    it('Should call getSecretValue', async() => {
        const secrets = secretsManager.getKoskiCredentials();
        trigger(null, { SecretString: JSON.stringify({ koski_backend_username: 'jooh', koski_backend_password: 'plaah' }) });
        //expect(client.getSecretValue).toHaveBeenCalledWith({ SecretId: 'dev/koski/backend/api' }, (a, b)=> {});
        expect(client.getSecretValue).toHaveBeenCalled();
        return secrets;
    });

});
