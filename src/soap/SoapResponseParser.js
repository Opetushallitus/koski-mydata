import { DOMParser } from '@xmldom/xmldom';
import xpath from 'xpath';
import ClientError from '../error/ClientError';

const dataPath = '//soap:Body/kns1:opintoOikeudetServiceResponse/kns1:opintoOikeudet/text()';

class SoapResponseParser {
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

    parseXmlResponse(xmlContent) {
        if (typeof xmlContent === 'undefined' || xmlContent === null) throw new ClientError('Cannot parse empty XML content');

        const doc = new DOMParser().parseFromString(xmlContent);

        return {
            data: this.nodeValue(dataPath, doc),
        };
    }
}

export default SoapResponseParser;
