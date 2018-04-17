import { DOMParser } from 'xmldom';
import xpath from 'xpath';

import OpintoOikeusAdapterServer from './OpintoOikeusAdapterServer';
import SecretsManager from './SecretsManager';

require('dotenv').config();

const secrets = new SecretsManager();
/*
const secrets = {
    getKoskiCredentials: function getKoskiCredentials() {
        return { username: 'foo', password: 'foo' };
    },
};*/

exports.opintoOikeusHandler = async(event, context, callback) => {

    try {
        const { username, password } = await secrets.getKoskiCredentials(); // TODO: Fail if no username & password provided
        const adapterServer = new OpintoOikeusAdapterServer(username, password);

        const doc = new DOMParser().parseFromString(event.body);
        const select = xpath.useNamespaces({
            soap: 'http://schemas.xmlsoap.org/soap/envelope/',
            xroad: 'http://x-road.eu/xsd/xroad.xsd',
            id: 'http://x-road.eu/xsd/identifiers',
            koski: 'http://docs.dev.koski-xroad.fi/producer', // TODO: We have environment here!
        });
        const clientXRoadInstance = select('//soap:Header/xroad:client/id:xRoadInstance/text()', doc)[0].nodeValue;
        const clientMemberClass = select('//soap:Header/xroad:client/id:memberClass/text()', doc)[0].nodeValue;
        const clientMemberCode = select('//soap:Header/xroad:client/id:memberCode/text()', doc)[0].nodeValue;
        const clientSubsystemCode = select('//soap:Header/xroad:client/id:subsystemCode/text()', doc)[0].nodeValue;

        const clientUserId = select('//soap:Header/xroad:userId/text()', doc)[0].nodeValue;
        const clientRequestId = select('//soap:Header/xroad:id/text()', doc)[0].nodeValue;
        const clientType = select('//soap:Header/xroad:client/@id:objectType', doc)[0].value;

        const hetu = select('//soap:Body/koski:opintoOikeudetService/koski:hetu/text()', doc)[0].nodeValue;

        const soapEnvelope = await adapterServer.getOpintoOikeudetSoapResponse(clientXRoadInstance, clientMemberClass, clientMemberCode,
            clientSubsystemCode, clientUserId, clientRequestId, clientType, hetu,
        );

        callback(null, {
            statusCode: 200,
            body: soapEnvelope,
            headers: {'content-type': 'text/xml'},
        });
    } catch (err) {
        console.log(err);
        context.done('error', 'Failed to get opinto-oikeudet');
    }
};
