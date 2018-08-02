import fs from 'fs';
import XMLDom from 'xmldom';
import { compare } from 'dom-compare';
import SoapResponseMessageBuilder from '../../src/soap/SoapResponseMessageBuilder';

const responseBuilder = new SoapResponseMessageBuilder();
const parser = new XMLDom.DOMParser();

describe('SoapResponseMessageBuilder', () => {
    it('Should create correct response XML', () => {
        const opintoOikeudet = JSON.parse(fs.readFileSync('examples/opinto-oikeudet-ei-suoritukset.json', 'UTF-8'));
        const expectedResponse = parser.parseFromString(fs.readFileSync('examples/opintooikeudet-response.xml', 'UTF-8'));
        const createdXML = parser.parseFromString(responseBuilder.buildResponseMessage(
            'FI-DEV', 'GOV', '2769790-1', 'koski', '123456789',
            'ID123456', 'SUBSYSTEM', 'issue #123', opintoOikeudet,
        ));
        const result = compare(expectedResponse, createdXML, { stripSpaces: true });

        if (!result.getResult()) {
            console.log(result.getDifferences());
        }

        const differences = result.getDifferences();
        expect(Array.isArray(differences)).toEqual(true);
        expect(differences).toHaveLength(0);
        expect(result.getResult()).toEqual(true);
    });
});
