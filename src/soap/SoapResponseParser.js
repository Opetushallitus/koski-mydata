import { DOMParser } from '@xmldom/xmldom';
import xpath from 'xpath';

class SoapResponseParser {
    constructor() {
        this.select = xpath.useNamespaces({
            soap: 'http://schemas.xmlsoap.org/soap/envelope/',
            xroad: 'http://x-road.eu/xsd/xroad.xsd',
            id: 'http://x-road.eu/xsd/identifiers',
            kns1: 'http://docs.koski-xroad.fi/producer',
        });
    }

    nodeValue(xpathExpression, doc) {
        return this.select(xpathExpression, doc);
    }

    parseXmlResponse(xmlContent) {
        if (typeof xmlContent === 'undefined' || xmlContent === null) {
            throw new Error('Cannot parse empty XML content');
        }

        console.log(xmlContent);

        const cleanedXmlContent = xmlContent.replace(/^\uFEFF/, '').trim();

        console.log(cleanedXmlContent);

        const doc = new DOMParser().parseFromString(cleanedXmlContent, 'text/xml');

        if (doc.getElementsByTagName('parsererror').length > 0) {
            throw new Error('Error parsing XML content: ' + doc.getElementsByTagName('parsererror')[0].textContent);
        }

        const dataPath = 'string(//soap:Body/kns1:opintoOikeudetServiceResponse/kns1:opintoOikeudet)';

        // Debugging: Log the entire XML to verify it was parsed correctly
        console.log('Parsed Document:', doc.toString());

        // Retrieve data using XPath
        const data = this.nodeValue(dataPath, doc);

        console.log('Parsed Data:', data); // Debugging: Output the parsed data

        return { data };
    }
}

export default SoapResponseParser;
