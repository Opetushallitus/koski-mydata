import fs from 'fs';
import { DOMParser } from '@xmldom/xmldom';
import xpath from 'xpath';
import PromiseMatcher from 'jasmine-node-promise-matchers';
import { opintoOikeusHandler } from '../../src/Lambda'; // eslint-disable-line import/named

describe('Lambda', () => {
    beforeEach(() => {
        jasmine.addMatchers(PromiseMatcher); // eslint-disable-line jest/no-jasmine-globals
    });

    it('Should be able to fetch required information', async(done) => { // eslint-disable-line jest/no-done-callback
        const soapPayload = fs.readFileSync('./examples/opintooikeudet-payload.xml', 'UTF-8');
        const soapRequest = {
            httpMethod: 'POST',
            body: soapPayload,
        };

        try {
            const response = await new Promise((resolve, reject) => {
                opintoOikeusHandler(soapRequest, {}, (error, response) => {
                    if (error !== null) {
                        reject(error);
                    }
                    resolve(response);
                });
            });

            expect(response.statusCode).toEqual(200);
            expect(response.headers['content-type']).toEqual('text/xml');

            const doc = new DOMParser().parseFromString(response.body);
            const select = xpath.useNamespaces({
                soap: 'http://schemas.xmlsoap.org/soap/envelope/',
                xroad: 'http://x-road.eu/xsd/xroad.xsd',
                id: 'http://x-road.eu/xsd/identifiers',
                koski: 'http://docs.koski-xroad.fi/producer',
            });

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

            const cdata = xpath.parse('//soap:Body/koski:opintoOikeudetServiceResponse/koski:opintoOikeudet')
                .evaluateString({
                    node: doc,
                    namespaces: {
                        getNamespace: (prefix) => { // eslint-disable-line consistent-return
                            if (prefix === 'soap') {
                                return 'http://schemas.xmlsoap.org/soap/envelope/';
                            }
                            if (prefix === 'koski') {
                                return 'http://docs.koski-xroad.fi/producer';
                            }
                        },
                    },
                });

            const opintoOikeudet = JSON.parse(cdata);

            // Required by HSL
            expect(opintoOikeudet.henkilö.oid).toEqual('1.2.246.562.24.69337840275');
            expect(Array.isArray(opintoOikeudet.opiskeluoikeudet)).toBe(true);

            expect(opintoOikeudet.henkilö.syntymäaika).toEqual('1947-09-21');

            // Find the first school user is present at
            const present = opintoOikeudet.opiskeluoikeudet.find((x) =>
                typeof x.tila.opiskeluoikeusjaksot.find((jakso) => (jakso.tila.koodiarvo === 'lasna')) !== 'undefined');

            expect(present).toBeTruthy();
            expect(present.tila.opiskeluoikeusjaksot[0].tila.koodiarvo).toEqual('lasna');
            expect(present.tila.opiskeluoikeusjaksot[0].alku).toMatch(/[0-9]{4}-[0-9]{2}-[0-9]{2}/);
            expect(present.oppilaitos.nimi.fi).toMatch(/[a-zA-Z0-9\s]{5,}/);
            expect(present.oppilaitos.oppilaitosnumero.koodiarvo).toMatch(/[0-9\s]{3,}/);
            expect(opintoOikeudet.suostumuksenPaattymispaiva).toEqual('2070-01-01');

            done();
        } catch (err) {
            console.log('Failed to run integration test for Lambda', err);
            throw err;
        }
    });
});
