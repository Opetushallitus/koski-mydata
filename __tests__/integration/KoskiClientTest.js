import PromiseMatcher from 'jasmine-node-promise-matchers';
import KoskiClient from '../../src/KoskiClient';
import LocalSecretsManager from '../../src/LocalSecretsManager';

describe('KoskiClient', () => {
    beforeEach(() => {
        jasmine.addMatchers(PromiseMatcher);
    });

    it('Should be able to return correct student ID', async(done) => {
        const secretsManager = new LocalSecretsManager();
        const { username, password } = await secretsManager.getKoskiCredentials();

        const client = new KoskiClient(username, password);
        const oid = await client.getUserOid('210947-613P');
        expect(oid).toEqual('1.2.246.562.24.69337840275');
        done();
    });
});
