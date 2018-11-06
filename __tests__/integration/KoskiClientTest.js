import PromiseMatcher from 'jasmine-node-promise-matchers';
import KoskiClient from '../../src/KoskiClient';
import SecretsManagerProvider from '../../src/SecretsManagerProvider';

const clientMemberCode = '2769790-1';
const clientMemberName = 'hsl';

describe('KoskiClient', () => {
    beforeEach(() => {
        jasmine.addMatchers(PromiseMatcher);
    });

    it('Should be able to fetch required information', async(done) => {
        const { username, password } = await SecretsManagerProvider.getSecretsManager().getKoskiCredentials(clientMemberName);

        const client = new KoskiClient(username, password);
        const opintoOikeudet = await client.getOpintoOikeudet('120496-949B', clientMemberCode);

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

        done();
    });

    it('Should be able fetch estimated end date', async(done) => {
        const { username, password } = await SecretsManagerProvider.getSecretsManager().getKoskiCredentials(clientMemberName);

        const client = new KoskiClient(username, password);
        const opintoOikeudet = await client.getOpintoOikeudet('080598-532M', clientMemberCode);

        expect(opintoOikeudet.opiskeluoikeudet[0].arvioituPäättymispäivä).toEqual('2020-05-01');
        done();
    });

    it('Should be able fetch part-time status for student', async(done) => {
        const { username, password } = await SecretsManagerProvider.getSecretsManager().getKoskiCredentials(clientMemberName);

        const client = new KoskiClient(username, password);
        const opintoOikeudet = await client.getOpintoOikeudet('080598-2684', clientMemberCode);

        const jakso1 = opintoOikeudet.opiskeluoikeudet[0].lisätiedot.osaAikaisuusjaksot.find(jakso => jakso.alku === '2018-05-08');
        const jakso2 = opintoOikeudet.opiskeluoikeudet[0].lisätiedot.osaAikaisuusjaksot.find(jakso => jakso.alku === '2019-05-08');

        expect(jakso1.osaAikaisuus).toEqual(50);
        expect(jakso2.osaAikaisuus).toEqual(80);

        done();
    });

    it('Should not omit oppisopimus from suoritukset', async(done) => {
        const { username, password } = await SecretsManagerProvider.getSecretsManager().getKoskiCredentials(clientMemberName);

        const client = new KoskiClient(username, password);
        const opintoOikeudet = await client.getOpintoOikeudet('081098-9505', clientMemberCode);

        // This is the new way for storing oppisopimus
        expect(opintoOikeudet.opiskeluoikeudet[0].suoritukset[0].osaamisenHankkimistavat[0]
            .osaamisenHankkimistapa.tunniste.koodiarvo).toEqual('oppisopimus');

        // This is the old way for storing oppisopimus
        expect(opintoOikeudet.opiskeluoikeudet[0].suoritukset[0].järjestämismuodot[0]
            .järjestämismuoto.tunniste.koodiarvo).toEqual('20');

        const includedInOpintoOikeus = opintoOikeudet.opiskeluoikeudet.find(x => x.sisältyyOpiskeluoikeuteen);
        expect(includedInOpintoOikeus.sisältyyOpiskeluoikeuteen.oppilaitos.oid).toEqual('1.2.246.562.10.52251087186');

        const työssäOppimisPaikkaOikeus = opintoOikeudet.opiskeluoikeudet.find(x =>
            x.suoritukset.find(y => y.koulutussopimukset)
        );

        expect(työssäOppimisPaikkaOikeus.suoritukset[0].koulutussopimukset[0].työssäoppimispaikka.fi).toEqual('McDonalds');
        done();
    });
});
