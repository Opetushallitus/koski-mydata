import { DOMParser } from '@xmldom/xmldom';
import xpath from 'xpath';

import { opintoOikeusHandler, lambda } from '../src/Lambda'; // eslint-disable-line import/named
import WSDLBuilder from '../src/soap/WSDLBuilder';
import { codes } from '../src/soap/SoapFaultMessageBuilder'; // eslint-disable-line import/named

describe('Lambda', () => {
    it('Can serve WSDL requests', async(done) => { // eslint-disable-line jest/no-done-callback
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

        WSDLBuilder.buildOpintoOikeusWSDL = () => WSDL;
        spyOn(WSDLBuilder, 'buildOpintoOikeusWSDL').and.callThrough(); // eslint-disable-line jest/no-jasmine-globals

        opintoOikeusHandler(event, {}, (error, response) => {
            expect(error).toBeNull();
            expect(response).toEqual(expectedResponse);
            expect(WSDLBuilder.buildOpintoOikeusWSDL).toHaveBeenCalled();
            done();
        });
    });

    it('Will only serve GET WSDL requests', async(done) => { // eslint-disable-line jest/no-done-callback
        const event = {
            httpMethod: 'GET',
            queryStringParameters: { },
        };

        spyOn(WSDLBuilder, 'buildOpintoOikeusWSDL').and.callThrough(); // eslint-disable-line jest/no-jasmine-globals

        opintoOikeusHandler(event, {}, (error, response) => {
            expect(error).toBeNull();
            expect(response.statusCode).toEqual(500);
            expect(WSDLBuilder.buildOpintoOikeusWSDL).not.toHaveBeenCalled();
            done();
        });
    });

    it('Can parse SOAP POST payload', async(done) => { // eslint-disable-line jest/no-done-callback
        const hetu = '010190-012A';
        const clientMemberCode = '123456789-0';
        const mockSoapEnvelope = '<xml><response>opinto-oikeudet</response></xml>';
        const mockClient = { getOpintoOikeudet: () => {} };
        const event = {
            httpMethod: 'POST',
        };
        const expectedResponse = {
            statusCode: 200,
            body: mockSoapEnvelope,
            headers: { 'content-type': 'text/xml' }, // This content type is required by Security Server (i.e. "liityntäpalvelin")
        };

        // eslint-disable-next-line jest/no-jasmine-globals
        spyOn(lambda, 'handleSOAPRequest').and.callThrough();
        // eslint-disable-next-line jest/no-jasmine-globals
        spyOn(lambda.secretsManager, 'getKoskiCredentials').and.returnValue(Promise.resolve({ username: 'u', password: 'p' }));
        // eslint-disable-next-line jest/no-jasmine-globals
        spyOn(lambda.parser, 'parsePayload').and.returnValue({ hetu, clientMemberCode });
        lambda.getClient = () => mockClient;
        // eslint-disable-next-line jest/no-jasmine-globals
        spyOn(mockClient, 'getOpintoOikeudet').and.returnValue(Promise.resolve({ opintooikeudet: ['mallikoulu'] }));
        // eslint-disable-next-line jest/no-jasmine-globals
        spyOn(lambda.responseBuilder, 'buildResponseMessage').and.returnValue(mockSoapEnvelope);

        opintoOikeusHandler(event, {}, async(error, response) => {
            expect(lambda.handleSOAPRequest).toHaveBeenCalled();
            expect(await mockClient.getOpintoOikeudet).toHaveBeenCalledWith(hetu, clientMemberCode);
            expect(lambda.responseBuilder.buildResponseMessage).toHaveBeenCalled();
            expect(error).toBe(null);
            expect(await response).toEqual(expectedResponse);
            done();
        });
    });

    it('Will return SOAP Fault message', async(done) => { // eslint-disable-line jest/no-done-callback
        opintoOikeusHandler({ httpMethod: 'POST' }, {}, (error, response) => {
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
