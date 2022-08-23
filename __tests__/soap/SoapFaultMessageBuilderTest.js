import PromiseMatcher from 'jasmine-node-promise-matchers';
import { compare } from 'dom-compare';
import XMLDom from '@xmldom/xmldom';
import fs from 'fs';
import xpath from 'xpath';
import errorMessageBuilder from '../../src/soap/SoapFaultMessageBuilder';
import ClientError from '../../src/error/ClientError';
import Forbidden from '../../src/error/Forbidden';

const parser = new XMLDom.DOMParser();

describe('SoapFaultMessageBuilder', () => {
    beforeEach(() => {
        jasmine.addMatchers(PromiseMatcher); // eslint-disable-line jest/no-jasmine-globals
    });

    it('Should generate SOAP Fault message like examples/error-message.xml', () => {
        const errorEnvelope = errorMessageBuilder.buildErrorMessage(new ClientError('oid not found', 'no user found with given hetu'));
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

    it('Should generate proper status code when no permission given', () => {
        const errorEnvelope = errorMessageBuilder.buildErrorMessage(new Forbidden('Permission not granted'));
        const createdError = parser.parseFromString(errorEnvelope);

        const select = xpath.useNamespaces({ soap: 'http://schemas.xmlsoap.org/soap/envelope/' });
        const code = select('//soap:Envelope/soap:Body/soap:Fault/faultcode/text()', createdError)[0].nodeValue;

        expect(code).toEqual('SOAP-ENV:Server.Forbidden');
    });
});
