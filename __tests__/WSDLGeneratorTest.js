import fs from 'fs';
import XMLDom from 'xmldom';
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

            const differences = result.getDifferences();
            expect(Array.isArray(differences)).toEqual(true);
            expect(differences).toHaveLength(0);
            expect(result.getResult()).toEqual(true);
        });
    });
});
