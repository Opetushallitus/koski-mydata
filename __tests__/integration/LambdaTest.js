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

            //console.log('Got response', JSON.stringify(response));

            expect(response.statusCode).toEqual(200);
            expect(response.headers['content-type']).toEqual('text/xml');

            const doc = new DOMParser().parseFromString(response.body);
            const select = xpath.useNamespaces({
                soap: 'http://schemas.xmlsoap.org/soap/envelope/',
                xroad: 'http://x-road.eu/xsd/xroad.xsd',
                id: 'http://x-road.eu/xsd/identifiers',
                koski: 'http://docs.dev.koski-xroad.fi/producer',
            });

            const parse = xpath.useNamespaces({
                soap: 'http://schemas.xmlsoap.org/soap/envelope/',
                xroad: 'http://x-road.eu/xsd/xroad.xsd',
                id: 'http://x-road.eu/xsd/identifiers',
                koski: 'http://docs.dev.koski-xroad.fi/producer',
            }).parse;


            expect(select('//soap:Header/xroad:id/text()', doc)[0].nodeValue).toEqual('ID123456');
            expect(select('//soap:Header/xroad:userId/text()', doc)[0].nodeValue).toEqual('123456789');

            expect(select('//soap:Header/xroad:service/id:xRoadInstance/text()', doc)[0].nodeValue).toEqual('FI-DEV');
            expect(select('//soap:Header/xroad:service/id:memberClass/text()', doc)[0].nodeValue).toEqual('GOV');
            expect(select('//soap:Header/xroad:service/id:memberCode/text()', doc)[0].nodeValue).toEqual('2769790-1');
            expect(select('//soap:Header/xroad:service/id:subsystemCode/text()', doc)[0].nodeValue).toEqual('koski');
            expect(select('//soap:Header/xroad:service/id:serviceCode/text()', doc)[0].nodeValue).toEqual('opintoOikeudetService');
            expect(select('//soap:Header/xroad:service/id:serviceVersion/text()', doc)[0].nodeValue).toEqual('v1');

            expect(select('//soap:Header/xroad:client/id:xRoadInstance/text()', doc)[0].nodeValue).toEqual('FI-DEV');
            expect(select('//soap:Header/xroad:client/id:memberClass/text()', doc)[0].nodeValue).toEqual('GOV');
            expect(select('//soap:Header/xroad:client/id:memberCode/text()', doc)[0].nodeValue).toEqual('2769790-1');
            expect(select('//soap:Header/xroad:client/id:subsystemCode/text()', doc)[0].nodeValue).toEqual('koski');


            const evaluator = xpath.parse('//soap:Body/koski:opintoOikeudetServiceResponse/koski:opintoOikeudet');
            var characters = evaluator.evaluateString({
                node: doc,
                namespaces: {
                    getNamespace: function (prefix) {
                        if (prefix === 'soap') {
                            return 'http://schemas.xmlsoap.org/soap/envelope/';
                        }
                        if (prefix === 'koski') {
                            return 'http://docs.dev.koski-xroad.fi/producer';
                        }
                    }
                }
            });

            console.log(characters);
            
            done();
        } catch (err) {
            console.log('Failed to run integration test for Lambda', err);
            throw err;
        }
    });
});
