import { DOMParser } from 'xmldom';
import xpath from 'xpath';

import { opintoOikeusHandler, lambda } from '../src/Lambda';
import WSDLGenerator from '../src/WSDLGenerator';
import { codes } from '../src/soap/SoapFaultMessageBuilder';

describe('Lambda', () => {
    it('Can serve WSDL requests', async(done) => {
        const WSDL = 'WSDL';
        const expectedResponse = {
            statusCode: 200,
            body: WSDL,
            headers: {
                'content-type': 'application/wsdl+xml',
            },
        };
        const event = {
            httpMethod: 'GET',
            queryStringParameters: { wsdl: true },
        };

        WSDLGenerator.createOpintoOikeusWSDL = () => WSDL;
        spyOn(WSDLGenerator, 'createOpintoOikeusWSDL').and.callThrough();

        opintoOikeusHandler(event, null, (error, response) => {
            expect(error).toBeNull();
            expect(response).toEqual(expectedResponse);
            expect(WSDLGenerator.createOpintoOikeusWSDL).toHaveBeenCalled();
            done();
        });
    });

    it('Will only serve GET WSDL requests', async(done) => {
        const event = {
            httpMethod: 'GET',
            queryStringParameters: { },
        };

        spyOn(WSDLGenerator, 'createOpintoOikeusWSDL').and.callThrough();

        opintoOikeusHandler(event, null, (error, response) => {
            expect(error).toBeNull();
            expect(response.statusCode).toEqual(500);
            expect(WSDLGenerator.createOpintoOikeusWSDL).not.toHaveBeenCalled();
            done();
        });
    });

    it('Can parse SOAP POST payload', async(done) => {
        const oid = 123;
        const hetu = '010190-012A';
        const mockSoapEnvelope = '<xml><response>opinto-oikeudet</response></xml>';
        const event = {
            httpMethod: 'POST',
        };
        const expectedResponse = {
            statusCode: 200,
            body: mockSoapEnvelope,
            headers: { 'content-type': 'text/xml' }, // This content type is required by Security Server (i.e. "liityntäpalvelin")
        };

        spyOn(lambda, 'handleSOAPRequest').and.callThrough();
        spyOn(lambda.secretsManager, 'getKoskiCredentials').and.returnValue(() => {
            Promise.resolve({ username: 'u', password: 'p' }); // our mock client doesn't actually make http requests
        });
        spyOn(lambda.parser, 'parsePayload').and.returnValue({ hetu });
        lambda.client = { getUserOid: () => {}, getOpintoOikeudet: () => {} }; // cannot spy on null client
        spyOn(lambda.client, 'getUserOid').and.returnValue(oid);
        spyOn(lambda.client, 'getOpintoOikeudet').and.returnValue({ opintooikeudet: ['mallikoulu'] });
        spyOn(lambda.responseBuilder, 'buildResponseMessage').and.returnValue(mockSoapEnvelope);

        opintoOikeusHandler(event, null, (error, response) => {
            expect(lambda.handleSOAPRequest).toHaveBeenCalled();
            // expect(lambda.secretsManager.getKoskiCredentials).toHaveBeenCalled(); // not called as we just set the client on the test!
            expect(lambda.client.getUserOid).toHaveBeenCalledWith(hetu);
            expect(lambda.client.getOpintoOikeudet).toHaveBeenCalledWith(oid);
            expect(lambda.responseBuilder.buildResponseMessage).toHaveBeenCalled();
            expect(error).toBe(null);
            expect(response).toEqual(expectedResponse);
            done();
        });
    });

    it('Will return SOAP Fault message', async(done) => {
        opintoOikeusHandler({ httpMethod: 'POST' }, null, (error, response) => {
            const doc = new DOMParser().parseFromString(response.body);

            const select = xpath.useNamespaces({ soap: 'http://schemas.xmlsoap.org/soap/envelope/' });
            const code = select('//soap:Envelope/soap:Body/soap:Fault/faultcode/text()', doc)[0].nodeValue;
            const message = select('//soap:Envelope/soap:Body/soap:Fault/faultstring/text()', doc)[0].nodeValue;

            expect(response.statusCode).toEqual(500); // SOAP Specs require 500
            expect(response.headers['content-type']).toEqual('text/xml'); // required by security server
            expect(code).toEqual(codes.client); // we gave empty xml body, surely this is a client error
            expect(message).toEqual('Cannot parse empty XML content');
            done();
        });
    });
});
