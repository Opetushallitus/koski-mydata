import log from 'lambda-log';
import config from 'config';
import SoapResponseMessageBuilder from './soap/SoapResponseMessageBuilder';
import SoapPayloadParser from './soap/SoapRequestPayloadParser';
import KoskiClient from './KoskiClient';
import WSDLBuilder from './soap/WSDLBuilder';
import SoapErrorBuilder from './soap/SoapFaultMessageBuilder';
import SecretsManagerProvider from './SecretsManagerProvider';
import Forbidden from './error/Forbidden';

class Lambda {
    constructor() {
        this.secretsManager = SecretsManagerProvider.getSecretsManager();
        this.parser = new SoapPayloadParser();
        this.responseBuilder = new SoapResponseMessageBuilder();
        this.coldstart = true;
    }

    static handleWSDLRequest(queryParameters) {
        return new Promise((resolve, reject) => {
            if (queryParameters !== null && Object.prototype.hasOwnProperty.call(queryParameters, 'wsdl')) {
                resolve(WSDLBuilder.buildOpintoOikeusWSDL());
            } else {
                reject(new Error('Invalid GET request, only WSDL-file requests supported'));
            }
        });
    }

    async getClient(memberId) {
        const memberName = config.get(`member.${memberId}.name`);
        const { username, password } = await this.secretsManager.getKoskiCredentials(memberName);

        return new KoskiClient(username, password);
    }

    handleSOAPRequest(xml) { // This is the "Adapter Server" for X-Road
        return new Promise(async(resolve, reject) => {
            try {
                const {
                    clientXRoadInstance,
                    clientMemberClass,
                    clientMemberCode,
                    clientSubsystemCode,
                    clientUserId,
                    clientRequestId,
                    clientType,
                    clientIssue,
                    hetu,
                } = this.parser.parsePayload(xml);

                const client = await this.getClient(clientMemberCode);

                const configKey = `member.${clientMemberCode}.name`;
                const clientMemberName = config.has(configKey) ? config.get(configKey) : undefined;

                log.config.meta.event.clientMemberCode = clientMemberCode;
                log.config.meta.event.clientMemberName = clientMemberName;

                const opintoOikeudet = await client.getOpintoOikeudet(hetu, clientMemberCode);

                const soapEnvelope = this.responseBuilder.buildResponseMessage(
                    clientXRoadInstance, clientMemberClass, clientMemberCode, clientSubsystemCode,
                    clientUserId, clientRequestId, clientType, clientIssue, opintoOikeudet,
                );

                log.config.meta.event.success = true;
                log.info('Handled opinto-oikeus request successfully');

                resolve(soapEnvelope);
            } catch (err) {
                log.config.meta.event.failure = true;
                log.error(`Handled opinto-oikeus request with failure ${JSON.stringify(err)}`);
                reject(err);
            }
        });
    }

    async opintoOikeusHandler(event, context, callback) {
        try {
            const { body, ...eventMeta } = event; // eslint-disable-line no-unused-vars
            const { logGroupName, logStreamName, ...contextMeta } = context; // eslint-disable-line no-unused-vars
            log.config = {
                meta: { event: { coldstart: this.coldstart, eventMeta, contextMeta } }, // omit post body from logs, it contains hetu
                debug: true, // enable debug-level logging
            };

            this.coldstart = false;
            log.info('Received request to opintoOikeusHandler');

            if (event.httpMethod === 'GET') {
                callback(null, {
                    statusCode: 200,
                    body: await Lambda.handleWSDLRequest(event.queryStringParameters),
                    headers: { 'content-type': 'application/wsdl+xml' },
                });
            } else {
                if (process.env.NODE_ENV !== 'test') {
                    log.info({ opintooikeusQuery: 'ok' });
                }
                callback(null, {
                    statusCode: 200,
                    body: await this.handleSOAPRequest(event.body),
                    headers: { 'content-type': 'text/xml' },
                });
            }
        } catch (err) {
            if (process.env.NODE_ENV !== 'test') {
                log.error(err);

                if (err instanceof Forbidden) {
                    log.info({ opintooikeusQuery: 'forbidden' });
                } else {
                    log.error({ opintooikeusQuery: 'failure' });
                }
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
