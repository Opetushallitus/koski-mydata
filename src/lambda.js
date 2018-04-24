import OpintoOikeusAdapterServer from './OpintoOikeusAdapterServer';
import AWSSecretsManager from './AWSSecretsManager';
import LocalSecretsManager from './LocalSecretsManager';
import SoapPayloadParser from './SoapPayloadParser';
import KoskiClient from './KoskiClient';
import WSDLGenerator from './WSDLGenerator';

const generator = new WSDLGenerator();
const secretsManager = (process.env.AWS_SAM_LOCAL === 'true') ? new LocalSecretsManager() : new AWSSecretsManager();
const parser = new SoapPayloadParser();

let client;

function handleWSDLRequest(queryParameters) {
    return new Promise((resolve, reject) => {
        if (Object.prototype.hasOwnProperty.call(queryParameters, 'wsdl')) {
            resolve(generator.createOpintoOikeusWSDL());
        } else {
            reject(new Error('Invalid GET request, only WSDL-file requests supported'));
        }
    });
}

function handleSOAPRequest(xml) {

    return new Promise(async(resolve, reject) => {
        if (typeof client === 'undefined' || client === null) {
            const { username, password } = await secretsManager.getKoskiCredentials();

            if (typeof username === 'undefined' || username === null) {
                reject(new Error('Koski username must be provided'));
            } if (typeof password === 'undefined' || password === null) {
                reject(new Error('Koski password must be provided'));
            }

            client = new KoskiClient(username, password);
        }

        const {
            clientXRoadInstance,
            clientMemberClass,
            clientMemberCode,
            clientSubsystemCode,
            clientUserId,
            clientRequestId,
            clientType,
            hetu,
        } = parser.parsePayload(xml);

        const oid = await client.getUserOid(hetu);
        const opintoOikeudet = await client.getOpintoOikeudet(oid);

        const adapterServer = new OpintoOikeusAdapterServer();
        const soapEnvelope = adapterServer.createOpintoOikeusSoapResponse(clientXRoadInstance, clientMemberClass,
            clientMemberCode, clientSubsystemCode, clientUserId, clientRequestId, clientType, opintoOikeudet,
        );

        resolve(soapEnvelope);
    });
}

exports.opintoOikeusHandler = async(event, context, callback) => {
    try {
        if (event.httpMethod === 'GET') {
            callback(null, {
                statusCode: 200,
                body: await handleWSDLRequest(event.queryStringParameters),
                headers: { 'content-type': 'application/wsdl+xml' },
            });
        } else {
            callback(null, {
                statusCode: 200,
                body: await handleSOAPRequest(event.body),
                headers: {'content-type': 'text/xml'},
            });
        }
    } catch (err) {
        console.log('Request processing failed', err);
        callback(null, {
            statusCode: 500,
            body: err.message,
        });
    }
};
