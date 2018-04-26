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
        const event = {
            httpMethod: 'POST',
        };

        spyOn(lambda, 'handleSOAPRequest').and.callThrough();
        spyOn(lambda.secretsManager, 'getKoskiCredentials').and.returnValue(() => {
            Promise.resolve({ username: 'u', password: 'p' });
        });
        spyOn(lambda.parser, 'parsePayload').and.returnValue((xml) => {
            console.log(`Received XML ${xml}`);
            return {
                hetu: '010190-012A',
            };
        });
        //spyOn(lambda.client, 'getUserOid').and.returnValue(oid);

        opintoOikeusHandler(event, null, (error, response) => {
            expect(lambda.handleSOAPRequest).toHaveBeenCalled();
            expect(lambda.secretsManager.getKoskiCredentials).not.toHaveBeenCalled();
            expect(lambda.client.getUserOid).not.toHaveBeenCalled();
            done();
        });
    });
});
