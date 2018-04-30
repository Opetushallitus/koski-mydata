import fs from 'fs';
import { DOMParser } from 'xmldom';
import xpath from 'xpath';
import PromiseMatcher from 'jasmine-node-promise-matchers';
import { opintoOikeusHandler } from '../../src/Lambda';

describe('Lambda', () => {
    beforeEach(() => {
        jasmine.addMatchers(PromiseMatcher);
        process.env.AWS_SAM_LOCAL = 'true'; // imitate running on sam-local
    });

    it('Should be able fetch required information', async(done) => {

        const soapPayload = fs.readFileSync('./examples/opintooikeudet-payload.xml', 'UTF-8');
        const soapRequest = {
            httpMethod: 'POST',
            body: soapPayload,
        };

        try {
            const response = await new Promise((resolve, reject)=> {
                opintoOikeusHandler(soapRequest, null, (error, response) => {
                    if (error !== null) {
                        reject(error);
                    }
                    resolve(response);
                });
            });

            console.log('Got response', JSON.stringify(response));

            expect(response.statusCode).toEqual(200);
            expect(response.headers['content-type']).toEqual('text/xml');

            const doc = new DOMParser().parseFromString(response.body);
            const select = xpath.useNamespaces({
                soap: 'http://schemas.xmlsoap.org/soap/envelope/',
                xroad: 'http://x-road.eu/xsd/xroad.xsd',
                id: 'http://x-road.eu/xsd/identifiers',
                koski: 'http://docs.dev.koski-xroad.fi/producer',
            });

            expect(select('//soap:Header/xroad:client/id:xRoadInstance/text()', doc)[0].nodeValue).toEqual('FI-DEV');

            done();
        } catch (err) {
            console.log('Failed to run integration test for Lambda', err);
            throw err;
        }
    });
});
