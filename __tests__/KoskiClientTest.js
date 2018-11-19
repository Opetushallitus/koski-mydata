import PromiseMatcher from 'jasmine-node-promise-matchers';
import KoskiClient from '../src/KoskiClient';
import { oppija } from './Fixtures';

jest.unmock('../src/KoskiClient');

const clientMemberCode = '2769790-1';

describe('KoskiClient', () => {
    afterAll(() => {
        jest.restoreAllMocks();
    });

    beforeEach(() => {
        jasmine.addMatchers(PromiseMatcher);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('Should be able to get opinto-oikeudet', async() => {
        const hetu = '120339-9876';
        const clientMemberCode = '123456789-0';

        const opiskeluoikeudet = [{
            oppilaitokset: ['mallikoulu'],
            suoritukset: [{ koulutussopimukset: '' }],
        }];
        const axios = {
            post: () => new Promise((resolve) => {
                resolve({ data: { opiskeluoikeudet } });
            }),
        };
        const koskiClient = new KoskiClient();

        koskiClient.instance = axios;
        spyOn(axios, 'post').and.callThrough();

        const response = await koskiClient.getOpintoOikeudet(hetu, clientMemberCode);
        expect(response.opiskeluoikeudet).toEqual(opiskeluoikeudet);
        expect(koskiClient.instance.post)
            .toHaveBeenCalledWith('omadata/oppija', { hetu }, { headers: { 'X-ROAD-MEMBER': clientMemberCode } });
    });

    it('Should detect valid hetu IDs', () => {
        // currently check that the date is valid
        expect(KoskiClient.validateHetu('140779-0123')).toBe(true);
        expect(KoskiClient.validateHetu('140779A0123')).toBe(true); // separator for people born after year 2000
        expect(KoskiClient.validateHetu('999999+012A')).toBe(true); // separator for people born before year 1900
    });

    it('Should detect invalid hetu IDs', () => {
        expect(KoskiClient.validateHetu('140779-01234')).toBe(false); // identifier too long
        expect(KoskiClient.validateHetu('1407791-0123')).toBe(false); // date too long
        expect(KoskiClient.validateHetu('14077-0123')).toBe(false); // date too short
        expect(KoskiClient.validateHetu('140779_0123')).toBe(false); // invalid separator
        expect(KoskiClient.validateHetu('140779-012')).toBe(false); // separator too short
    });

    it('Should throw for missing hetu IDs', () => {
        expect(KoskiClient.validateHetu).toThrowError();

        expect(() => {
            KoskiClient.validateHetu(null);
        }).toThrowError();

        expect(() => {
            KoskiClient.validateHetu(undefined);
        }).toThrowError();
    });

    it('Error messages should not contain sensitive information', () => {
        // TODO: Implement sensitive information test
    });

    it('Should be able to fetch required information', async(done) => {
        KoskiClient.prototype._executeOppijaDataRequest =
            jest.fn(() => Promise.resolve({ status: 200, data: oppija }));

        const client = new KoskiClient('username', 'password');
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
        expect(present.tila.opiskeluoikeusjaksot[0].alku).toEqual('2008-08-15');
        expect(present.oppilaitos.nimi.fi).toMatch('Lappeen koulu');
        expect(present.oppilaitos.oppilaitosnumero.koodiarvo).toMatch('03829');

        done();
    });

    it('Should be able fetch estimated end date', async(done) => {
        KoskiClient.prototype._executeOppijaDataRequest =
            jest.fn(() => Promise.resolve({ status: 200, data: oppija }));

        const client = new KoskiClient('username', 'password');
        const opintoOikeudet = await client.getOpintoOikeudet('080598-532M', clientMemberCode);

        expect(opintoOikeudet.opiskeluoikeudet[0].arvioituPäättymispäivä).toEqual('2020-05-01');
        done();
    });

    it('Should be able fetch part-time status for student', async(done) => {
        KoskiClient.prototype._executeOppijaDataRequest =
            jest.fn(() => Promise.resolve({ status: 200, data: oppija }));

        const client = new KoskiClient('username', 'password');
        const opintoOikeudet = await client.getOpintoOikeudet('080598-2684', clientMemberCode);

        const jakso1 = opintoOikeudet.opiskeluoikeudet[0].lisätiedot.osaAikaisuusjaksot.find(jakso => jakso.alku === '2018-05-08');
        const jakso2 = opintoOikeudet.opiskeluoikeudet[0].lisätiedot.osaAikaisuusjaksot.find(jakso => jakso.alku === '2019-05-08');

        expect(jakso1.osaAikaisuus).toEqual(50);
        expect(jakso2.osaAikaisuus).toEqual(80);

        done();
    });

    it('Should not omit oppisopimus from suoritukset', async(done) => {
        KoskiClient.prototype._executeOppijaDataRequest =
            jest.fn(() => Promise.resolve({ status: 200, data: oppija }));

        const client = new KoskiClient('username', 'password');
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
            x.suoritukset.find(y => y.koulutussopimukset));

        expect(työssäOppimisPaikkaOikeus.suoritukset[0].koulutussopimukset[0].työssäoppimispaikka.fi).toEqual('McDonalds');
        done();
    });
});
