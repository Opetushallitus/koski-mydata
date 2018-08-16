import { DOMParser } from 'xmldom';
import xpath from 'xpath';

import { opintoOikeusHandler, lambda } from '../src/Lambda';
import WSDLBuilder from '../src/soap/WSDLBuilder';
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

        WSDLBuilder.buildOpintoOikeusWSDL = () => WSDL;
        spyOn(WSDLBuilder, 'buildOpintoOikeusWSDL').and.callThrough();

        opintoOikeusHandler(event, {}, (error, response) => {
            expect(error).toBeNull();
            expect(response).toEqual(expectedResponse);
            expect(WSDLBuilder.buildOpintoOikeusWSDL).toHaveBeenCalled();
            done();
        });
    });

    it('Will only serve GET WSDL requests', async(done) => {
        const event = {
            httpMethod: 'GET',
            queryStringParameters: { },
        };

        spyOn(WSDLBuilder, 'buildOpintoOikeusWSDL').and.callThrough();

        opintoOikeusHandler(event, {}, (error, response) => {
            expect(error).toBeNull();
            expect(response.statusCode).toEqual(500);
            expect(WSDLBuilder.buildOpintoOikeusWSDL).not.toHaveBeenCalled();
            done();
        });
    });

    it('Can parse SOAP POST payload', async(done) => {
        const oid = 123;
        const hetu = '010190-012A';
        const clientMemberCode = '123456789-0';
        const mockSoapEnvelope = '<xml><response>opinto-oikeudet</response></xml>';
        const mockClient = { getUserOid: () => {}, getOpintoOikeudet: () => {} };
        const event = {
            httpMethod: 'POST',
        };
        const expectedResponse = {
            statusCode: 200,
            body: mockSoapEnvelope,
            headers: { 'content-type': 'text/xml' }, // This content type is required by Security Server (i.e. "liityntäpalvelin")
        };

        spyOn(lambda, 'handleSOAPRequest').and.callThrough();
        spyOn(lambda.secretsManager, 'getKoskiCredentials').and.returnValue(Promise.resolve({ username: 'u', password: 'p' }));
        spyOn(lambda.parser, 'parsePayload').and.returnValue({ hetu, clientMemberCode });
        lambda.getClient = () => mockClient;
        spyOn(mockClient, 'getUserOid').and.returnValue(Promise.resolve(oid));
        spyOn(mockClient, 'getOpintoOikeudet').and.returnValue(Promise.resolve({ opintooikeudet: ['mallikoulu'] }));
        spyOn(lambda.responseBuilder, 'buildResponseMessage').and.returnValue(mockSoapEnvelope);

        opintoOikeusHandler(event, {}, async(error, response) => {
            expect(lambda.handleSOAPRequest).toHaveBeenCalled();
            expect(await lambda.secretsManager.getKoskiCredentials).toHaveBeenCalled(); // not called as we just set the client on the test!
            expect(await mockClient.getUserOid).toHaveBeenCalledWith(hetu);
            expect(await mockClient.getOpintoOikeudet).toHaveBeenCalledWith(oid, clientMemberCode);
            expect(lambda.responseBuilder.buildResponseMessage).toHaveBeenCalled();
            expect(error).toBe(null);
            expect(await response).toEqual(expectedResponse);
            done();
        });
    });

    it('Will return SOAP Fault message', async(done) => {
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
