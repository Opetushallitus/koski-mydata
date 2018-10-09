import PromiseMatcher from 'jasmine-node-promise-matchers';
import KoskiClient from '../src/KoskiClient';

describe('KoskiClient', () => {
    beforeEach(() => {
        jasmine.addMatchers(PromiseMatcher);
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

    it('Should be able to get student number from koski backend', async() => {
        const userId = 123;
        const axios = {
            post: () => new Promise((resolve) => {
                resolve({ data: [{ oid: userId }] });
            }),
        };
        const koskiClient = new KoskiClient();

        koskiClient.instance = axios;
        spyOn(axios, 'post').and.callThrough();

        const oid = await koskiClient.getUserOid('210947-613P');
        expect(oid).toBe(userId);
        expect(koskiClient.instance.post).toHaveBeenCalledWith('henkilo/hetu', { hetu: '210947-613P' });
    });

    it('Error messages should not contain sensitive information', () => {
        // TODO: Implement sensitive information test
    });

    it('Should be able to get opinto-oikeudet', async() => {
        const oid = 123;
        const clientMemberCode = '123456789-0';

        const opiskeluoikeudet = [{
            oppilaitokset: ['mallikoulu'],
        }];
        const axios = {
            get: () => new Promise((resolve) => {
                resolve({ data: { opiskeluoikeudet } });
            }),
        };
        const koskiClient = new KoskiClient();

        koskiClient.instance = axios;
        spyOn(axios, 'get').and.callThrough();

        const response = await koskiClient.getOpintoOikeudet(oid, clientMemberCode);
        expect(response.opiskeluoikeudet).toEqual(opiskeluoikeudet);
        expect(koskiClient.instance.get).toHaveBeenCalledWith(`oppija/${oid}`, { headers: { 'X-ROAD-MEMBER': clientMemberCode } });
    });
});
