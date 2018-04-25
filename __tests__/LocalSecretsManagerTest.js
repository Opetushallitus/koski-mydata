import PromiseMatcher from 'jasmine-node-promise-matchers';
import LocalSecretsManager from '../src/LocalSecretsManager';

describe('LocalSecretsManager', () => {
    beforeEach(() => {
        jasmine.addMatchers(PromiseMatcher);
    });

    const expectedCredentials = { // This is what we expect to return after AWS response has been parsed
        username: 'username',
        password: 'password',
    };

    it('Should return credentials from process.env', async(done) => {
        process.env = {
            KOSKI_USER: expectedCredentials.username,
            KOSKI_PASSWORD: expectedCredentials.password,
        };
        const receivedCredentials = await new LocalSecretsManager().getKoskiCredentials();
        expect(expectedCredentials).toEqual(receivedCredentials);
        done();
    });

    process.env.KOSKI_USER = undefined;

    it('Should fail if no username was given', async(done) => {
        process.env = {
            KOSKI_USER: undefined,
            KOSKI_PASSWORD: expectedCredentials.password,
        };
        expect(new LocalSecretsManager().getKoskiCredentials()).toRejectWith(new Error('username not defined'), done);
    });

    it('Should fail if no password was given', async(done) => {
        process.env = {
            KOSKI_USER: expectedCredentials.username,
            KOSKI_PASSWORD: null,
        };
        expect(new LocalSecretsManager().getKoskiCredentials()).toRejectWith(new Error('password not defined'), done);
    });
});
