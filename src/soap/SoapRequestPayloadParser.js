import { DOMParser } from 'xmldom';
import xpath from 'xpath';
import ClientError from '../error/ClientError';

class SoapRequestPayloadParser {
    constructor() {
        this.select = xpath.useNamespaces({
            soap: 'http://schemas.xmlsoap.org/soap/envelope/',
            xroad: 'http://x-road.eu/xsd/xroad.xsd',
            id: 'http://x-road.eu/xsd/identifiers',
            koski: 'http://docs.dev.koski-xroad.fi/producer', // TODO: We have environment here!
        });
    }

    parsePayload(xmlContent) {
        if (typeof xmlContent === 'undefined' || xmlContent === null) throw new ClientError('Cannot parse empty XML content');

        const doc = new DOMParser().parseFromString(xmlContent);

        return {
            clientXRoadInstance: this.select('//soap:Header/xroad:client/id:xRoadInstance/text()', doc)[0].nodeValue,
            clientMemberClass: this.select('//soap:Header/xroad:client/id:memberClass/text()', doc)[0].nodeValue,
            clientMemberCode: this.select('//soap:Header/xroad:client/id:memberCode/text()', doc)[0].nodeValue,
            clientSubsystemCode: this.select('//soap:Header/xroad:client/id:subsystemCode/text()', doc)[0].nodeValue,

            clientUserId: this.select('//soap:Header/xroad:userId/text()', doc)[0].nodeValue,
            clientRequestId: this.select('//soap:Header/xroad:id/text()', doc)[0].nodeValue,
            clientType: this.select('//soap:Header/xroad:client/@id:objectType', doc)[0].value,

            hetu: this.select('//soap:Body/koski:opintoOikeudetService/koski:hetu/text()', doc)[0].nodeValue,
        };
    }
}

export default SoapRequestPayloadParser;
