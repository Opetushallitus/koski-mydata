import { opintoOikeusHandler, lambda } from '../src/Lambda';
import WSDLGenerator from '../src/WSDLGenerator';

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
        spyOn(lambda.adapterServer, 'createOpintoOikeusSoapResponse').and.returnValue(mockSoapEnvelope);

        opintoOikeusHandler(event, null, (error, response) => {
            expect(lambda.handleSOAPRequest).toHaveBeenCalled();
            // expect(lambda.secretsManager.getKoskiCredentials).toHaveBeenCalled(); // not called as we just set the client on the test!
            expect(lambda.client.getUserOid).toHaveBeenCalledWith(hetu);
            expect(lambda.client.getOpintoOikeudet).toHaveBeenCalledWith(oid);
            expect(lambda.adapterServer.createOpintoOikeusSoapResponse).toHaveBeenCalled();
            expect(error).toBe(null);
            expect(response).toEqual(expectedResponse);
            done();
        });
    });
});
