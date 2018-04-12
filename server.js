import express from 'express';
import bodyParser from 'body-parser';
import { parseString, processors } from 'xml2js';
import morgan from 'morgan';

import soapResponse from './index';
import OpintoOikeusAdapterServer from './OpintoOikeusAdapterServer';

require('body-parser-xml')(bodyParser);

import xpath from 'xpath';
import { DOMParser } from 'xmldom';

const app = express();
const { stripPrefix } = processors;
const adapterServer = new OpintoOikeusAdapterServer();

app.use(morgan('combined')); // logging
app.use(express.static('./docs')); // static content
app.use(bodyParser.text({type: '*/*' }));

app.get('/', (req, res) => {
    res.set('Content-Type', 'application/xml');
    res.send(soapResponse);
});

app.post('/Endpoint', (req, res) => {

    const doc = new DOMParser().parseFromString(req.body);
    const select = xpath.useNamespaces({
        soap: 'http://schemas.xmlsoap.org/soap/envelope/',
        xroad: 'http://x-road.eu/xsd/xroad.xsd',
        id: 'http://x-road.eu/xsd/identifiers',
    });
    const clientXRoadInstance = select('//soap:Header/xroad:client/id:xRoadInstance/text()', doc)[0].nodeValue;
    const clientMemberClass = select('//soap:Header/xroad:client/id:memberClass/text()', doc)[0].nodeValue;
    const clientMemberCode = select('//soap:Header/xroad:client/id:memberCode/text()', doc)[0].nodeValue;
    const clientSubsystemCode = select('//soap:Header/xroad:client/id:subsystemCode/text()', doc)[0].nodeValue;

    const clientUserId = select('//soap:Header/xroad:userId/text()', doc)[0].nodeValue;
    const clientRequestId = select('//soap:Header/xroad:id/text()', doc)[0].nodeValue;

    res.set('Content-Type', 'text/xml');

    res.send(adapterServer.getOpintoOikeudetSoapResponse(clientXRoadInstance, clientMemberClass, clientMemberCode,
        clientSubsystemCode, clientUserId, clientRequestId,
    ));
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
