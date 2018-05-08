import PromiseMatcher from 'jasmine-node-promise-matchers';
import KoskiClient from '../../src/KoskiClient';
import SecretsManagerProvider from '../../src/SecretsManagerProvider';

describe('KoskiClient', () => {
    beforeEach(() => {
        jasmine.addMatchers(PromiseMatcher);
    });

    it('Should be able to return correct student ID', async(done) => {
        const { username, password } = await SecretsManagerProvider.getSecretsManager().getKoskiCredentials();

        const client = new KoskiClient(username, password);
        const oid = await client.getUserOid('210947-613P');
        expect(oid).toEqual('1.2.246.562.24.69337840275');
        done();
    });

    it('Should be able fetch required information', async(done) => {
        const { username, password } = await SecretsManagerProvider.getSecretsManager().getKoskiCredentials();

        const client = new KoskiClient(username, password);
        const oid = await client.getUserOid('120496-949B');
        const opintoOikeudet = await client.getOpintoOikeudet(oid);

        // Required by HSL
        expect(opintoOikeudet.henkilö.oid).toEqual('1.2.246.562.24.92333381381');
        expect(opintoOikeudet.henkilö.syntymäaika).toEqual('1996-04-12');
        expect(opintoOikeudet.henkilö.kansalaisuus[0].koodiarvo).toEqual('246');

        // Find the first school user is present at
        const present = opintoOikeudet.opiskeluoikeudet.find(x =>
            typeof x.tila.opiskeluoikeusjaksot.find(jakso => (jakso.tila.koodiarvo === 'lasna')) !== 'undefined');

        expect(present).toBeTruthy();
        expect(present.tila.opiskeluoikeusjaksot[0].tila.koodiarvo).toEqual('lasna');
        expect(present.tila.opiskeluoikeusjaksot[0].alku).toMatch(/[0-9]{4}-[0-9]{2}-[0-9]{2}/);
        expect(present.oppilaitos.nimi.fi).toMatch(/[a-zA-Z0-9\s]{5,}/); // "Stadin ammattiopisto" for now
        expect(present.oppilaitos.oppilaitosnumero.koodiarvo).toMatch(/[0-9\s]{3,}/); // "10105" for now

        /*
        * Tests missing for:
        • Arvioitu loppumisaika
        • Loppumisaika
        */
        done();
    });
});
