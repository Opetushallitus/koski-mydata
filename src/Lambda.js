import OpintoOikeusAdapterServer from './OpintoOikeusAdapterServer';
import AWSSecretsManager from './AWSSecretsManager';
import LocalSecretsManager from './LocalSecretsManager';
import SoapPayloadParser from './SoapPayloadParser';
import KoskiClient from './KoskiClient';
import WSDLGenerator from './WSDLGenerator';
import SoapErrorBuilder from './soap/SoapFaultMessageBuilder';

class Lambda {
    constructor() {
        this.secretsManager = (process.env.AWS_SAM_LOCAL === 'true') ? new LocalSecretsManager() : new AWSSecretsManager();
        this.parser = new SoapPayloadParser();
        this.adapterServer = new OpintoOikeusAdapterServer();
        this.client = null;
    }

    static handleWSDLRequest(queryParameters) {
        return new Promise((resolve, reject) => {
            if (Object.prototype.hasOwnProperty.call(queryParameters, 'wsdl')) {
                resolve(WSDLGenerator.createOpintoOikeusWSDL());
            } else {
                reject(new Error('Invalid GET request, only WSDL-file requests supported'));
            }
        });
    }

    handleSOAPRequest(xml) {
        return new Promise(async(resolve, reject) => {
            try {
                if (typeof this.client === 'undefined' || this.client === null) {
                    const { username, password } = await this.secretsManager.getKoskiCredentials();

                    if (typeof username === 'undefined' || username === null) {
                        reject(new Error('Koski username must be provided'));
                    }
                    if (typeof password === 'undefined' || password === null) {
                        reject(new Error('Koski password must be provided'));
                    }

                    this.client = new KoskiClient(username, password);
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
                } = this.parser.parsePayload(xml);

                const oid = await this.client.getUserOid(hetu);
                const opintoOikeudet = await this.client.getOpintoOikeudet(oid);

                const soapEnvelope = this.adapterServer.createOpintoOikeusSoapResponse(
                    clientXRoadInstance, clientMemberClass, clientMemberCode, clientSubsystemCode,
                    clientUserId, clientRequestId, clientType, opintoOikeudet,
                );

                resolve(soapEnvelope);
            } catch (err) {
                reject(err);
            }
        });
    }

    async opintoOikeusHandler(event, context, callback) {
        try {
            if (event.httpMethod === 'GET') {
                callback(null, {
                    statusCode: 200,
                    body: await Lambda.handleWSDLRequest(event.queryStringParameters),
                    headers: { 'content-type': 'application/wsdl+xml' },
                });
            } else {
                callback(null, {
                    statusCode: 200,
                    body: await this.handleSOAPRequest(event.body),
                    headers: { 'content-type': 'text/xml' },
                });
            }
        } catch (err) {
            if (process.env.NODE_ENV !== 'test') {
                console.log('Request processing failed', err);
            }
            callback(null, {
                statusCode: 500,
                body: SoapErrorBuilder.buildErrorMessage(err),
                headers: { 'content-type': 'text/xml' },
            });
        }
    }
}

const lambda = new Lambda();

exports.opintoOikeusHandler = (event, context, callback) => { // AWS Lambda expects to receive a function
    lambda.opintoOikeusHandler(event, context, callback);
};

if (process.env.NODE_ENV === 'test') { // Allow mocking
    exports.lambda = lambda;
}
