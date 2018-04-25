import PromiseMatcher from 'jasmine-node-promise-matchers';
import fs from 'fs';
import SoapPayloadParser from '../src/SoapPayloadParser';

describe('SoapPayloadParser', () => {
    beforeEach(() => {
        jasmine.addMatchers(PromiseMatcher);
    });

    const parser = new SoapPayloadParser();

    it('Should be able to parse reference payload', (done) => {
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
                hetu: '210947-613P',
            };

            expect(parseResult).toEqual(expectedResult);
            done();
        });
    });
});
