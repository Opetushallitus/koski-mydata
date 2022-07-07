import PromiseMatcher from 'jasmine-node-promise-matchers';
import fs from 'fs';
import SoapPayloadParser from '../../src/soap/SoapRequestPayloadParser';

describe('SoapRequestPayloadParser', () => {
    beforeEach(() => {
        jasmine.addMatchers(PromiseMatcher); // eslint-disable-line jest/no-jasmine-globals
    });

    const parser = new SoapPayloadParser();

    it('Should be able to parse reference payload', (done) => { // eslint-disable-line jest/no-done-callback
        fs.readFile('./examples/opintooikeudet-payload.xml', { encoding: 'UTF-8' }, (err, xml) => {
            if (err) throw err;

            const parseResult = parser.parsePayload(xml);

            const expectedResult = {
                clientXRoadInstance: 'FI-DEV',
                clientMemberClass: 'GOV',
                clientMemberCode: '2769790-1',
                clientSubsystemCode: 'koski',
                clientUserId: '123456789',
                clientRequestId: 'ID123456',
                clientType: 'SUBSYSTEM',
                clientIssue: 'issue #123',
                hetu: '210947-613P',
            };

            expect(parseResult).toEqual(expectedResult);
            done();
        });
    });
});
