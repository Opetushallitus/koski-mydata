import KoskiClient from '../src/KoskiClient';

describe('KoskiClient', () => {
    beforeEach(() => {
        jasmine.addMatchers(require('jasmine-node-promise-matchers'));
    });

    it('Should detect valid hetu IDs', () => {
        // currently check that the date is valid
        expect(KoskiClient.validateHetu("140779-0123")).toBe(true);
        expect(KoskiClient.validateHetu("140779A0123")).toBe(true); // separator for people born after year 2000
        expect(KoskiClient.validateHetu("999999+012A")).toBe(true); // separator for people born before year 1900
    });

    it('Should detect invalid hetu IDs', () => {
        expect(KoskiClient.validateHetu("140779-01234")).toBe(false); // identifier too long
        expect(KoskiClient.validateHetu("1407791-0123")).toBe(false); // date too long
        expect(KoskiClient.validateHetu("14077-0123")).toBe(false); // date too short
        expect(KoskiClient.validateHetu("140779_0123")).toBe(false); // invalid separator
        expect(KoskiClient.validateHetu("140779-012")).toBe(false); // separator too short
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
});
