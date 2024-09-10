import { DOMParser } from '@xmldom/xmldom';
import xpath from 'xpath';
import ClientError from '../error/ClientError';

class SoapResponseParser {
    constructor() {
        this.select = xpath.useNamespaces({
            soap: 'http://schemas.xmlsoap.org/soap/envelope/',
            xroad: 'http://x-road.eu/xsd/xroad.xsd',
            id: 'http://x-road.eu/xsd/identifiers',
            kns1: 'http://docs.koski-xroad.fi/producer',
        });
    }

    nodeValue(xpath, doc) {
        const element = this.select(xpath, doc)[0];
        return typeof element !== 'undefined' ? element.nodeValue : undefined;
    }

    parseXmlResponse(xmlContent) {
        if (typeof xmlContent === 'undefined' || xmlContent === null) throw new ClientError('Cannot parse empty XML content');

        // Remove any Byte Order Mark (BOM) and trim whitespace
        const cleanedXmlContent = xmlContent.replace(/^\uFEFF/, '').trim();

        const doc = new DOMParser().parseFromString(cleanedXmlContent);

        if (doc.getElementsByTagName('parsererror').length > 0) {
            throw new Error('Error parsing XML content: ' + doc.getElementsByTagName('parsererror')[0].textContent);
        }

        const dataPath = '//soap:Body/kns1:opintoOikeudetServiceResponse/kns1:opintoOikeudet/text()';

        return {
            data: this.nodeValue(dataPath, doc),
        };
    }
}

export default SoapResponseParser;
