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

    it('Should be able fetch required information', async(done) => {
        const secretsManager = new LocalSecretsManager();
        const { username, password } = await secretsManager.getKoskiCredentials();

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
        */
        done();
    });

    it('Should be able fetch estimated end date', async(done) => {
        const secretsManager = new LocalSecretsManager();
        const { username, password } = await secretsManager.getKoskiCredentials();

        const client = new KoskiClient(username, password);
        const oid = await client.getUserOid('080598-532M');
        const opintoOikeudet = await client.getOpintoOikeudet(oid);

        expect(opintoOikeudet.opiskeluoikeudet[0].arvioituPäättymispäivä).toEqual('2020-05-01');
        done();
    });

    it('Should be able fetch part-time status for student', async(done) => {
        const secretsManager = new LocalSecretsManager();
        const { username, password } = await secretsManager.getKoskiCredentials();

        const client = new KoskiClient(username, password);
        const oid = await client.getUserOid('080598-2684');
        const opintoOikeudet = await client.getOpintoOikeudet(oid);

        const jakso1 = opintoOikeudet.opiskeluoikeudet[0].lisätiedot.osaAikaisuusjaksot.find(jakso => jakso.alku === '2018-05-08');
        const jakso2 = opintoOikeudet.opiskeluoikeudet[0].lisätiedot.osaAikaisuusjaksot.find(jakso => jakso.alku === '2019-05-08');

        expect(jakso1.osaAikaisuus).toEqual(50);
        expect(jakso2.osaAikaisuus).toEqual(80);

        done();
    });
});
