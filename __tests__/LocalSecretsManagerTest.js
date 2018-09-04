import PromiseMatcher from 'jasmine-node-promise-matchers';
import LocalSecretsManager from '../src/LocalSecretsManager';

const clientMemberName = 'hsl';

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
            koski_user_hsl: expectedCredentials.username,
            koski_password_hsl: expectedCredentials.password,
        };
        const receivedCredentials = await new LocalSecretsManager().getKoskiCredentials(clientMemberName);
        expect(expectedCredentials).toEqual(receivedCredentials);
        done();
    });

    process.env.KOSKI_USER = undefined;

    it('Should fail if no username was given', async(done) => {
        process.env = {
            koski_user_hsl: undefined,
            koski_password_hsl: expectedCredentials.password,
        };
        expect(new LocalSecretsManager().getKoskiCredentials(clientMemberName))
            .toRejectWith(new Error(`Koski backend username not defined for member ${clientMemberName}`), done);
    });

    it('Should fail if no password was given', async(done) => {
        process.env = {
            koski_user_hsl: expectedCredentials.username,
            koski_password_hsl: null,
        };
        expect(new LocalSecretsManager().getKoskiCredentials(clientMemberName))
            .toRejectWith(new Error(`Koski backend password not defined for member ${clientMemberName}`), done);
    });
});
