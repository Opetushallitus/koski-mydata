import fs from 'fs';
import OpintoOikeusAdapterServer from './OpintoOikeusAdapterServer';
import AWSSecretsManager from './AWSSecretsManager';
import LocalSecretsManager from './LocalSecretsManager';
import SoapPayloadParser from './SoapPayloadParser';
import KoskiClient from './KoskiClient';

const secretsManager = (process.env.AWS_SAM_LOCAL === 'true') ? new LocalSecretsManager() : new AWSSecretsManager();
const parser = new SoapPayloadParser();

let client;

function handleWSDLRequest(queryParameters, callback) {
    if (queryParameters.hasOwnProperty('wsdl')) {
        const data = fs.readFileSync('./koski.wsdl', 'utf-8');
        // TODO: We should probably create this dynamically so we could include the environment URL
        callback(null, {
            statusCode: 200,
            body: data,
            headers: { 'content-type': 'application/wsdl+xml' },
        });
    } else {
        callback(null, {
            statusCode: 501,
            body: 'Invalid GET request, only WSDL-file requests supported',
        });
    }
}

async function handleSOAPRequest(xml, callback) {
    if (typeof client === 'undefined' || client === null) {
        const { username, password } = await secretsManager.getKoskiCredentials();

        if (typeof username === 'undefined' || username === null) {
            throw new Error('Koski username must be provided');
        } if (typeof password === 'undefined' || password === null) {
            throw new Error('Koski password must be provided');
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

    callback(null, {
        statusCode: 200,
        body: soapEnvelope,
        headers: {'content-type': 'text/xml'},
    });
}

exports.opintoOikeusHandler = async(event, context, callback) => {
    try { // TODO: Get rid of callback passing
        if (event.httpMethod === 'GET') {
            handleWSDLRequest(event.queryStringParameters, callback);
        } else {
            await handleSOAPRequest(event.body, callback);
        }
    } catch (err) {
        console.log(err);
        context.done('error', 'Failed to get opinto-oikeudet');
    }
};
