import builder from 'xmlbuilder';
import ClientError from '../error/ClientError';
import Forbidden from '../error/Forbidden';
import NotFound from '../error/NotFound';

export const codes = {
    client: 'SOAP-ENV:Client',
    server: 'SOAP-ENV:Server',
    forbidden: 'SOAP-ENV:Server.Forbidden',
    notfound: 'SOAP-ENV:Server.NotFound',
};

Object.freeze(codes);

const getCode = (error) => {
    if (error instanceof Forbidden) return codes.forbidden;
    if (error instanceof NotFound) return codes.notfound;
    if (error instanceof ClientError) return codes.client;
    return codes.server;
};

class SoapFaultMessageBuilder {
    static buildErrorMessage(error) {
        return builder.create({
            'SOAP-ENV:Envelope': {
                'SOAP-ENV:Header': {},
                'SOAP-ENV:Body': {
                    'SOAP-ENV:Fault': {
                        faultcode: getCode(error),
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
