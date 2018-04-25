import OpintoOikeusAdapterServer from './OpintoOikeusAdapterServer';
import AWSSecretsManager from './AWSSecretsManager';
import LocalSecretsManager from './LocalSecretsManager';
import SoapPayloadParser from './SoapPayloadParser';
import KoskiClient from './KoskiClient';
import WSDLGenerator from './WSDLGenerator';

class Lambda {

    constructor() {
        this.secretsManager = (process.env.AWS_SAM_LOCAL === 'true') ? new LocalSecretsManager() : new AWSSecretsManager();
        this.parser = new SoapPayloadParser();
        this.client = null;
    }

    handleWSDLRequest(queryParameters) {
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

            const adapterServer = new OpintoOikeusAdapterServer();
            const soapEnvelope = adapterServer.createOpintoOikeusSoapResponse(clientXRoadInstance, clientMemberClass,
                clientMemberCode, clientSubsystemCode, clientUserId, clientRequestId, clientType, opintoOikeudet,
            );

            resolve(soapEnvelope);
        });
    }

    async opintoOikeusHandler(event, context, callback) {
        try {
            if (event.httpMethod === 'GET') {
                callback(null, {
                    statusCode: 200,
                    body: await this.handleWSDLRequest(event.queryStringParameters),
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
                body: err.message,
            });
        }
    }
}

exports.opintoOikeusHandler = (event, context, callback) => {
    new Lambda().opintoOikeusHandler(event, context, callback);
};
