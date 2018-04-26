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
        const event = {
            httpMethod: 'POST',
        };

        spyOn(lambda, 'handleSOAPRequest').and.callThrough();
        spyOn(lambda.secretsManager, 'getKoskiCredentials').and.returnValue(() => {
            Promise.resolve({ username: 'u', password: 'p' });
        });
        spyOn(lambda.parser, 'parsePayload').and.returnValue({ hetu });
        lambda.client = { getUserOid: () => {}, getOpintoOikeudet: () => {} }; // cannot spy on null
        spyOn(lambda.client, 'getUserOid').and.returnValue(oid);
        spyOn(lambda.client, 'getOpintoOikeudet').and.returnValue({ opintooikeudet: [ 'mallikoulu'] });
        spyOn(lambda.adapterServer, 'createOpintoOikeusSoapResponse').and.returnValue({ response: 'soap-response' });

        opintoOikeusHandler(event, null, (error, response) => {
            expect(lambda.handleSOAPRequest).toHaveBeenCalled();
            // expect(lambda.secretsManager.getKoskiCredentials).toHaveBeenCalled(); // Not called as we set the client on the test!
            expect(lambda.client.getUserOid).toHaveBeenCalledWith(hetu);
            expect(lambda.client.getOpintoOikeudet).toHaveBeenCalledWith(oid);
            done();
        });
    });
});
