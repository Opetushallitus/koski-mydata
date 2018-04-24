import fs from 'fs';
import XMLDom from 'xmldom';
import { assert } from 'chai';
import { compare } from 'dom-compare';
import WSDLGenerator from '../src/WSDLGenerator';

const parser = new XMLDom.DOMParser();

describe('WSDLGenerator', () => {
    describe('#createOpintoOikeusWSDL()', () => {
        it('Should return same WSDL definition as docs/koski.wsdl', () => {
            const expectedWSDL = parser.parseFromString(fs.readFileSync('docs/koski.wsdl', 'UTF-8'));
            const createdWSDL = parser.parseFromString(WSDLGenerator.createOpintoOikeusWSDL());
            const result = compare(expectedWSDL, createdWSDL, { stripSpaces: true });

            if (!result.getResult()) {
                console.log(result.getDifferences());
            }

            assert.isEmpty(result.getDifferences(), 'No differences in XMLs');
            assert.isTrue(result.getResult(), 'XMLs are identical');
        });
    });
});
