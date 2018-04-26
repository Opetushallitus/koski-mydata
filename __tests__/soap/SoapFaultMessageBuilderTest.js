import PromiseMatcher from 'jasmine-node-promise-matchers';
import { compare } from 'dom-compare';
import XMLDom from 'xmldom';
import fs from 'fs';
import { errorBuilder, codes } from '../../src/soap/SoapFaultMessageBuilder';

const parser = new XMLDom.DOMParser();

describe('SoapFaultMessageBuilder', () => {
    beforeEach(() => {
        jasmine.addMatchers(PromiseMatcher);
    });

    it('Should generate SOAP Fault message like examples/error-message.xml', () => {
        const errorEnvelope = errorBuilder.buildErrorMessage(codes.client, 'oid not found', 'no user found with given hetu');
        const expectedError = parser.parseFromString(fs.readFileSync('examples/error-message.xml', 'UTF-8'));
        const createdError = parser.parseFromString(errorEnvelope);
        const result = compare(expectedError, createdError, { stripSpaces: true });

        if (!result.getResult()) {
            console.log(result.getDifferences());
        }

        const differences = result.getDifferences();
        expect(Array.isArray(differences)).toEqual(true);
        expect(differences).toHaveLength(0);
        expect(result.getResult()).toEqual(true);
    });
});
