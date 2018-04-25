import fs from 'fs';
import XMLDom from 'xmldom';
import { assert } from 'chai';
import { compare } from 'dom-compare';
import OpintoOikeusAdapterServer from '../src/OpintoOikeusAdapterServer';

const adapter = new OpintoOikeusAdapterServer();
const parser = new XMLDom.DOMParser();

describe('OpintoOikeusAdapterServer', () => {
    it('Should create correct response XML', () => {
        const opintoOikeudet = JSON.parse(fs.readFileSync('examples/opinto-oikeudet-ei-suoritukset.json', 'UTF-8'));
        const expectedResponse = parser.parseFromString(fs.readFileSync('examples/opintooikeudet-response.xml', 'UTF-8'));
        const createdXML = parser.parseFromString(adapter.createOpintoOikeusSoapResponse(
            'FI-DEV', 'GOV', '2769790-1', 'koski', '123456789', 'ID123456', 'SUBSYSTEM', opintoOikeudet,
        ));
        const result = compare(expectedResponse, createdXML, { stripSpaces: true });

        if (!result.getResult()) {
            console.log(result.getDifferences());
        }

        assert.isEmpty(result.getDifferences(), 'No differences in XMLs');
        assert.isTrue(result.getResult(), 'XMLs are identical');
    });
});
