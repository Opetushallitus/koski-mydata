import builder from 'xmlbuilder';
import ClientError from '../error/ClientError';

const codes = {
    client: 'SOAP-ENV:Client',
    server: 'SOAP-ENV:Server',
};

Object.freeze(codes);

class SoapFaultMessageBuilder {
    static buildErrorMessage(error) {
        const code = (error instanceof ClientError) ? codes.client : codes.server;
        return builder.create({
            'SOAP-ENV:Envelope': {
                'SOAP-ENV:Header': {},
                'SOAP-ENV:Body': {
                    'SOAP-ENV:Fault': {
                        faultcode: code,
                        faultstring: error.message,
                        detail: error.details,
                    },
                },
            },
        }, {
            version: '1.0',
            encoding: 'UTF-8',
            standalone: false,
        })
            .att('xmlns:SOAP-ENV', 'http://schemas.xmlsoap.org/soap/envelope/')
            .end({ pretty: true });
    }
}

export default SoapFaultMessageBuilder;

exports.codes = codes;
