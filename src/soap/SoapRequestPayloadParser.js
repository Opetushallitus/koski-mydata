import { DOMParser } from 'xmldom';
import xpath from 'xpath';
import ClientError from '../error/ClientError';

const clientXRoadInstancePath = '//soap:Header/xroad:client/id:xRoadInstance/text()';
const clientMemberClassPath = '//soap:Header/xroad:client/id:memberClass/text()';
const clientMemberCodePath = '//soap:Header/xroad:client/id:memberCode/text()';
const clientSubSystemCodePath = '//soap:Header/xroad:client/id:subsystemCode/text()';
const clientUserIdPath = '//soap:Header/xroad:userId/text()';
const clientRequestIdPath = '//soap:Header/xroad:id/text()';
const clientTypePath = '//soap:Header/xroad:client/@id:objectType';
const clientIssuePath = '//soap:Header/xroad:issue/text()';
const hetuPath = '//soap:Body/koski:opintoOikeudetService/koski:hetu/text()';

class SoapRequestPayloadParser {
    constructor() {
        this.select = xpath.useNamespaces({
            soap: 'http://schemas.xmlsoap.org/soap/envelope/',
            xroad: 'http://x-road.eu/xsd/xroad.xsd',
            id: 'http://x-road.eu/xsd/identifiers',
            koski: 'http://docs.koski-xroad.fi/producer',
        });
    }

    nodeValue(xpath, doc) {
        const element = this.select(xpath, doc)[0];
        return typeof element !== 'undefined' ? element.nodeValue : undefined;
    }

    parsePayload(xmlContent) {
        if (typeof xmlContent === 'undefined' || xmlContent === null) throw new ClientError('Cannot parse empty XML content');

        const doc = new DOMParser().parseFromString(xmlContent);

        return {
            clientXRoadInstance: this.nodeValue(clientXRoadInstancePath, doc),
            clientMemberClass: this.nodeValue(clientMemberClassPath, doc),
            clientMemberCode: this.nodeValue(clientMemberCodePath, doc),
            clientSubsystemCode: this.nodeValue(clientSubSystemCodePath, doc),

            clientUserId: this.nodeValue(clientUserIdPath, doc),
            clientRequestId: this.nodeValue(clientRequestIdPath, doc),
            clientType: this.nodeValue(clientTypePath, doc),
            clientIssue: this.nodeValue(clientIssuePath, doc),

            hetu: this.nodeValue(hetuPath, doc),
        };
    }
}

export default SoapRequestPayloadParser;
