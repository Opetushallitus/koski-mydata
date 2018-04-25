import { opintoOikeusHandler } from '../src/lambda';
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
        opintoOikeusHandler(event, null, (error, response) => {
            expect(error).toBeNull();
            expect(response).toEqual(expectedResponse);
            done();
        });
    });
});
