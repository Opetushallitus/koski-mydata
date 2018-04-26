import builder from 'xmlbuilder';

const codes = {
    client: 'SOAP-ENV:Client',
    server: 'SOAP-ENV:Server',
};

Object.freeze(codes);

class SoapFaultMessageBuilder {
    static buildErrorMessage(code, message, detail) {
        return builder.create({
            'SOAP-ENV:Envelope': {
                'SOAP-ENV:Header': {},
                'SOAP-ENV:Body': {
                    'SOAP-ENV:Fault': {
                        faultcode: code,
                        faultstring: message,
                        detail: detail,
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

exports.errorBuilder = SoapFaultMessageBuilder;
exports.codes = codes;
