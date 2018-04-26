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
        const event = {
            httpMethod: 'POST',
        };
        const mockSecretsManager = {
            getKoskiCredentials: () => {
                console.log('called mock');
                return new Promise((resolve) => { resolve('jooh')});
            },
        };
        lambda.secretsManager = mockSecretsManager;

        spyOn(lambda, 'handleSOAPRequest').and.callThrough();
        spyOn(lambda.secretsManager, 'getKoskiCredentials').and.returnValue(() => {
            Promise.resolve({ username: 'u', password: 'p' });
        });

        console.log(`local secrets manager: ${typeof mockSecretsManager.getKoskiCredentials}`);
        console.log(`secrets manager: ${typeof lambda.secretsManager.getKoskiCredentials}`);

        opintoOikeusHandler(event, null, (error, response) => {
            expect(lambda.handleSOAPRequest).toHaveBeenCalled();
            expect(lambda.secretsManager.getKoskiCredentials).not.toHaveBeenCalled();
            done();
        });
    });
});
