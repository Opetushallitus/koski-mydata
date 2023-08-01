import PromiseMatcher from 'jasmine-node-promise-matchers';
import cleanDeep from 'clean-deep';
import flatMap from 'array.prototype.flatmap';
import KoskiClient from '../src/KoskiClient';
import { oppija, valleVirta, entinenEsiopiskelija, minnaMonirahoitteinen, koulutussopimusopiskelija, vstOpiskelija } from './Fixtures';

jest.unmock('../src/KoskiClient');

const koskiClientMemberCode = '2769790-1';
const hslClientMemberCode = '2274586-3';
const frankClientMemberCode = '1516651-3';

describe('KoskiClient', () => {
    afterAll(() => {
        jest.restoreAllMocks();
    });

    beforeEach(() => {
        jasmine.addMatchers(PromiseMatcher); // eslint-disable-line jest/no-jasmine-globals
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('Should be able to get opinto-oikeudet', async() => {
        const hetu = '120339-9876';
        const clientMemberCode = '123456789-0';

        const opiskeluoikeudet = [{
            oppilaitokset: ['mallikoulu'],
            suoritukset: [{
                koulutussopimukset: {
                    alku: '2017-01-01',
                    loppu: '2019-01-01',
                    maa: 'Suomi',
                    paikkakunta: 'Juupajoki',
                },
            }],
            tyyppi: { koodiarvo: 'korkeakoulutus' },
        }];
        const axios = {
            post: () => new Promise((resolve) => {
                resolve({ data: { opiskeluoikeudet } });
            }),
        };
        const koskiClient = new KoskiClient();

        koskiClient.instance = axios;
        spyOn(axios, 'post').and.callThrough(); // eslint-disable-line jest/no-jasmine-globals

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
        expect(KoskiClient.validateHetu).toThrow();

        expect(() => {
            KoskiClient.validateHetu(null);
        }).toThrow();

        expect(() => {
            KoskiClient.validateHetu(undefined);
        }).toThrow();
    });

    it('Responses should not contain sensitive information', async(done) => { // eslint-disable-line jest/no-done-callback
        KoskiClient.prototype._executeOppijaDataRequest =
            jest.fn(() => Promise.resolve({ status: 200, data: oppija }));

        const client = new KoskiClient('username', 'password');
        const opintoOikeudet = await client.getOpintoOikeudet('120496-949B', koskiClientMemberCode);

        expect(opintoOikeudet.henkilö.etunimet).toBeUndefined();
        expect(opintoOikeudet.henkilö.kutsumanimi).toBeUndefined();
        expect(opintoOikeudet.henkilö.sukunimi).toBeUndefined();
        expect(opintoOikeudet.henkilö.kansalaisuus).toBeUndefined();
        expect(opintoOikeudet.henkilö.äidinkieli).toBeUndefined();

        done();
    });

    it('Should be able to fetch required information', async(done) => { // eslint-disable-line jest/no-done-callback
        KoskiClient.prototype._executeOppijaDataRequest =
            jest.fn(() => Promise.resolve({ status: 200, data: oppija }));

        const client = new KoskiClient('username', 'password');
        const opintoOikeudet = await client.getOpintoOikeudet('120496-949B', koskiClientMemberCode);

        // Required by HSL
        expect(opintoOikeudet.henkilö.oid).toEqual('1.2.246.562.24.92333381381');
        expect(opintoOikeudet.henkilö.syntymäaika).toEqual('1996-04-12');

        // Find the first school user is present at
        const present = opintoOikeudet.opiskeluoikeudet.find((x) =>
            typeof x.tila.opiskeluoikeusjaksot.find((jakso) => (jakso.tila.koodiarvo === 'lasna')) !== 'undefined');

        expect(present).toBeTruthy();
        expect(present.tila.opiskeluoikeusjaksot[0].tila.koodiarvo).toEqual('lasna');
        expect(present.tila.opiskeluoikeusjaksot[0].alku).toEqual('2008-08-15');
        expect(present.oppilaitos.nimi.fi).toMatch('Lappeen koulu');
        expect(present.oppilaitos.oppilaitosnumero.koodiarvo).toMatch('03829');

        done();
    });

    it('Should be able fetch estimated end date', async(done) => { // eslint-disable-line jest/no-done-callback
        KoskiClient.prototype._executeOppijaDataRequest =
            jest.fn(() => Promise.resolve({ status: 200, data: oppija }));

        const client = new KoskiClient('username', 'password');
        const opintoOikeudet = await client.getOpintoOikeudet('080598-532M', koskiClientMemberCode);

        expect(opintoOikeudet.opiskeluoikeudet[0].arvioituPäättymispäivä).toEqual('2020-05-01');
        done();
    });

    it('Should be able fetch part-time status for student', async(done) => { // eslint-disable-line jest/no-done-callback
        KoskiClient.prototype._executeOppijaDataRequest =
            jest.fn(() => Promise.resolve({ status: 200, data: oppija }));

        const client = new KoskiClient('username', 'password');
        const opintoOikeudet = await client.getOpintoOikeudet('080598-2684', koskiClientMemberCode);

        const jakso1 = opintoOikeudet.opiskeluoikeudet[0].lisätiedot.osaAikaisuusjaksot.find((jakso) => jakso.alku === '2018-05-08');
        const jakso2 = opintoOikeudet.opiskeluoikeudet[0].lisätiedot.osaAikaisuusjaksot.find((jakso) => jakso.alku === '2019-05-08');

        expect(jakso1.osaAikaisuus).toEqual(50);
        expect(jakso2.osaAikaisuus).toEqual(80);

        done();
    });

    it('Should not omit oppisopimus from suoritukset', async(done) => { // eslint-disable-line jest/no-done-callback
        KoskiClient.prototype._executeOppijaDataRequest =
            jest.fn(() => Promise.resolve({ status: 200, data: oppija }));

        const client = new KoskiClient('username', 'password');
        const opintoOikeudet = await client.getOpintoOikeudet('081098-9505', koskiClientMemberCode);

        // This is the new way for storing oppisopimus
        expect(opintoOikeudet.opiskeluoikeudet[0].suoritukset[0].osaamisenHankkimistavat[0]
            .osaamisenHankkimistapa.tunniste.koodiarvo).toEqual('oppisopimus');

        // This is the old way for storing oppisopimus
        expect(opintoOikeudet.opiskeluoikeudet[0].suoritukset[0].järjestämismuodot[0]
            .järjestämismuoto.tunniste.koodiarvo).toEqual('20');

        const includedInOpintoOikeus = opintoOikeudet.opiskeluoikeudet.find((x) => x.sisältyyOpiskeluoikeuteen);
        expect(includedInOpintoOikeus.sisältyyOpiskeluoikeuteen.oppilaitos.oid).toEqual('1.2.246.562.10.52251087186');

        done();
    });

    it('Should not omit lukukausiIlmoittautuminen from lisätiedot', async(done) => { // eslint-disable-line jest/no-done-callback
        KoskiClient.prototype._executeOppijaDataRequest =
            jest.fn(() => Promise.resolve({ status: 200, data: valleVirta }));

        const client = new KoskiClient('username', 'password');
        const opintoOikeudet = await client.getOpintoOikeudet('060696-5219', koskiClientMemberCode);

        const viimeisinJakso = opintoOikeudet.opiskeluoikeudet[0].lisätiedot.lukukausiIlmoittautuminen
            .ilmoittautumisjaksot.find((x) => x.alku === '2020-08-01');

        expect(viimeisinJakso.tila.koodiarvo).toEqual('1');
        expect(viimeisinJakso.ylioppilaskunnanJäsen).toEqual(true);
        expect(viimeisinJakso.ythsMaksettu).toEqual(false);

        done();
    });

    it('Should not omit virtaOpiskeluoikeudenTyyppi from response', async(done) => { // eslint-disable-line jest/no-done-callback
        KoskiClient.prototype._executeOppijaDataRequest =
            jest.fn(() => Promise.resolve({ status: 200, data: valleVirta }));

        const client = new KoskiClient('username', 'password');
        const opintoOikeudet = await client.getOpintoOikeudet('060696-5219', koskiClientMemberCode);

        const virtaType = opintoOikeudet.opiskeluoikeudet[0].lisätiedot.virtaOpiskeluoikeudenTyyppi;

        const expectedType = {
            koodiarvo: '2',
            nimi: {
                fi: 'Alempi korkeakoulututkinto',
                sv: 'Lägre högskoleexamen',
            },
            koodistoUri: 'virtaopiskeluoikeudentyyppi',
            koodistoVersio: 1,
        };

        expect(virtaType).toEqual(expectedType);

        done();
    });

    it('Should omit ythsMaksettu for HSL', async(done) => { // eslint-disable-line jest/no-done-callback
        KoskiClient.prototype._executeOppijaDataRequest =
            jest.fn(() => Promise.resolve({ status: 200, data: valleVirta }));

        const client = new KoskiClient('username', 'password');
        const opintoOikeudet = await client.getOpintoOikeudet('060696-5219', hslClientMemberCode);

        const lisätiedot = opintoOikeudet.opiskeluoikeudet[0].lisätiedot.lukukausiIlmoittautuminen.ilmoittautumisjaksot[0];

        const expectedLisätiedot = {
            alku: '2013-08-01',
            loppu: '2013-12-31',
            tila: {
                koodiarvo: '1',
                nimi: {
                    fi: 'Läsnä',
                    sv: 'Närvarande',
                },
                koodistoUri: 'virtalukukausiilmtila',
                koodistoVersio: 1,
            },
            ylioppilaskunnanJäsen: true,
        };

        expect(lisätiedot).toEqual(expectedLisätiedot);

        done();
    });

    it('Should not omit ythsMaksettu Frank', async(done) => { // eslint-disable-line jest/no-done-callback
        KoskiClient.prototype._executeOppijaDataRequest =
            jest.fn(() => Promise.resolve({ status: 200, data: valleVirta }));

        const client = new KoskiClient('username', 'password');
        const opintoOikeudet = await client.getOpintoOikeudet('060696-5219', frankClientMemberCode);
        const lisätiedot = opintoOikeudet.opiskeluoikeudet[0].lisätiedot.lukukausiIlmoittautuminen.ilmoittautumisjaksot[0];

        const expectedLisätiedot = {
            alku: '2013-08-01',
            loppu: '2013-12-31',
            tila: {
                koodiarvo: '1',
                nimi: {
                    fi: 'Läsnä',
                    sv: 'Närvarande',
                },
                koodistoUri: 'virtalukukausiilmtila',
                koodistoVersio: 1,
            },
            ylioppilaskunnanJäsen: true,
            ythsMaksettu: false,
        };

        expect(lisätiedot).toEqual(expectedLisätiedot);

        done();
    });

    it('Should omit esiopetus from opiskeluoikeudet', async(done) => { // eslint-disable-line jest/no-done-callback
        KoskiClient.prototype._executeOppijaDataRequest =
            jest.fn(() => Promise.resolve({ status: 200, data: entinenEsiopiskelija }));

        const client = new KoskiClient('username', 'password');
        const opintoOikeudet = await client.getOpintoOikeudet('130620-4884', hslClientMemberCode);

        const esiopetuksenOpiskeluoikeus = opintoOikeudet.opiskeluoikeudet.find((x) => x.tyyppi.koodiarvo === 'esiopetus');
        const lukionOpiskeluoikeus = opintoOikeudet.opiskeluoikeudet.find((x) => x.tyyppi.koodiarvo === 'lukiokoulutus');

        expect(lukionOpiskeluoikeus.oid).toEqual('1.2.246.562.15.80877052243');
        expect(esiopetuksenOpiskeluoikeus).toBeUndefined();

        done();
    });

    it('Should omit vapaansivistystyonkoulutus from opiskeluoikeudet', async(done) => { // eslint-disable-line jest/no-done-callback
        KoskiClient.prototype._executeOppijaDataRequest =
            jest.fn(() => Promise.resolve({ status: 200, data: vstOpiskelija }));

        const client = new KoskiClient('username', 'password');

        try {
            await client.getOpintoOikeudet('260769-598H', hslClientMemberCode);
        } catch (e) {
            // eslint-disable-next-line jest/no-conditional-expect
            expect(e).toEqual(new Error('No opiskeluoikeudet found'));
        }

        done();
    });

    it('Should include suoritukset tyyppi in response', async(done) => { // eslint-disable-line jest/no-done-callback
        KoskiClient.prototype._executeOppijaDataRequest =
            jest.fn(() => Promise.resolve({ status: 200, data: entinenEsiopiskelija }));

        const client = new KoskiClient('username', 'password');
        const opintoOikeudet = await client.getOpintoOikeudet('130620-4884', koskiClientMemberCode);

        const suoritusTyypit = opintoOikeudet.opiskeluoikeudet.map((oikeus) => oikeus.suoritukset.map((suoritus) => suoritus.tyyppi));

        const flattenedSuoritusTyypit = [].concat(...suoritusTyypit);

        const lukionTyyppi = flattenedSuoritusTyypit.find((x) => x.koodiarvo === 'lukionoppimaara');

        expect(lukionTyyppi).toEqual({
            koodiarvo: 'lukionoppimaara',
            nimi: {
                fi: 'Lukion oppimäärä',
                sv: 'Gymnasiets lärokurs',
            },
            koodistoUri: 'suorituksentyyppi',
            koodistoVersio: 1,
        });

        done();
    });

    it('Should omit opintojenrahoitus from response', async(done) => { // eslint-disable-line jest/no-done-callback
        KoskiClient.prototype._executeOppijaDataRequest =
            jest.fn(() => Promise.resolve({ status: 200, data: minnaMonirahoitteinen }));

        const client = new KoskiClient('username', 'password');
        const opintoOikeudet = await client.getOpintoOikeudet('130620-4884', koskiClientMemberCode);

        const rahoitukset = cleanDeep(opintoOikeudet.opiskeluoikeudet.map((oikeus) =>
            oikeus.tila.opiskeluoikeusjaksot.map((jakso) => jakso.opintojenRahoitus)));

        expect(rahoitukset).toHaveLength(0);

        done();
    });

    it('Koulutussopimukset should only contain required fields', async(done) => { // eslint-disable-line jest/no-done-callback
        KoskiClient.prototype._executeOppijaDataRequest =
            jest.fn(() => Promise.resolve({ status: 200, data: koulutussopimusopiskelija }));

        const client = new KoskiClient('username', 'password');
        const opintoOikeudet = await client.getOpintoOikeudet('130620-4884', koskiClientMemberCode);

        const koulutussopimukset = flatMap(opintoOikeudet.opiskeluoikeudet, (o) => flatMap(o.suoritukset, (s) => s.koulutussopimukset))
            .filter((x) => x);

        const työssäoppimispaikat = koulutussopimukset.map((k) => k.työssäoppimispaikka);
        const työssäoppimispaikkaYTunnukset = koulutussopimukset.map((k) => k.työssäoppimispaikanYTunnus);
        const työssäoppimispaikkaTyötehtävät = koulutussopimukset.map((k) => k.työtehtävät);

        expect(työssäoppimispaikat).toHaveLength(0);
        expect(työssäoppimispaikkaYTunnukset).toHaveLength(0);
        expect(työssäoppimispaikkaTyötehtävät).toHaveLength(0);

        done();
    });

    it('Järjestämismuodot should only contain required fields', async(done) => { // eslint-disable-line jest/no-done-callback
        KoskiClient.prototype._executeOppijaDataRequest =
            jest.fn(() => Promise.resolve({ status: 200, data: koulutussopimusopiskelija }));

        const client = new KoskiClient('username', 'password');
        const opintoOikeudet = await client.getOpintoOikeudet('130620-4884', koskiClientMemberCode);

        const järjestämismuodot = flatMap(opintoOikeudet.opiskeluoikeudet, (o) => flatMap(o.suoritukset, (s) => s.järjestämismuodot))
            .filter((x) => x);

        expect(järjestämismuodot).toHaveLength(1);
        expect(järjestämismuodot[0].järjestämismuoto.tunniste.koodiarvo).toBe('20');
        expect(järjestämismuodot[0].alku).toBe('2017-10-01');
        expect(järjestämismuodot[0].loppu).toBe('2017-11-30');
        expect(järjestämismuodot[0].järjestämismuoto.oppisopimus).toBeUndefined();

        done();
    });

    it('Osaamisenhankkimistapa should only contain required fields', async(done) => { // eslint-disable-line jest/no-done-callback
        KoskiClient.prototype._executeOppijaDataRequest =
            jest.fn(() => Promise.resolve({ status: 200, data: koulutussopimusopiskelija }));

        const client = new KoskiClient('username', 'password');
        const opintoOikeudet = await client.getOpintoOikeudet('130620-4884', koskiClientMemberCode);

        const osaamisenHankkimistavat = flatMap(opintoOikeudet.opiskeluoikeudet, (o) =>
            flatMap(o.suoritukset, (s) => s.osaamisenHankkimistavat)).filter((x) => x);

        const oppisopimusHankkimistavat = osaamisenHankkimistavat.filter((t) =>
            t.osaamisenHankkimistapa.tunniste.koodiarvo === 'oppisopimus');

        expect(oppisopimusHankkimistavat).toHaveLength(2);
        oppisopimusHankkimistavat.forEach((t) => {
            expect(t.osaamisenHankkimistapa.tunniste.nimi.fi).toBe('Oppisopimus');
            expect(t.osaamisenHankkimistapa.oppisopimus).toBeUndefined();
        });

        done();
    });
});
