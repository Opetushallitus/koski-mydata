import builder from "xmlbuilder";

class WSDLGenerator {
    createOpintoOikeusWSDL() {

        return builder.create({
            'wsdl:definitions': {
                'wsdl:types': {
                    'xsd:schema': {
                        '@elementFormDefault': 'qualified',
                        '@targetNamespace': 'http://docs.dev.koski-xroad.fi/producer',
                        'xsd:import': {
                            '@id': 'xrd',
                            '@namespace': 'http://x-road.eu/xsd/xroad.xsd',
                            '@schemaLocation': 'http://x-road.eu/xsd/xroad.xsd',
                            'xsd:element': {
                                '@name': 'opintoOikeudetService',
                                'xsd:complexType': {
                                    'xsd:sequence': {
                                        'xsd:element': {
                                            '@name': 'hetu',
                                            '@type': 'xsd:string',
                                            'xsd:annotation': {
                                                'xsd:documentation': {
                                                    '#text': 'Name',
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                            'xsd:element': { // TODO: Cannot have duplicate keys, this won't work
                                '@name': 'opintoOikeudetServiceResponse',
                                'xsd:complexType': {
                                    'xsd:sequence': {
                                        'xsd:element': {
                                            '@name': 'opintoOikeudet',
                                            '@type': 'xsd:string',
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
        })
            .att('xmlns:soap', 'http://schemas.xmlsoap.org/wsdl/soap/')
            .att('xmlns:tns', 'http://docs.dev.koski-xroad.fi/producer')
            .att('xmlns:wsdl', 'http://schemas.xmlsoap.org/wsdl/')
            .att('xmlns:xrd', 'http://x-road.eu/xsd/xroad.xsd')
            .att('xmlns:xsd', 'http://www.w3.org/2001/XMLSchema')
            .att('xmlns:id', 'http://x-road.eu/xsd/identifiers')
            .att('name', 'opintoOikeudetService')
            .att('targetNamespace', 'http://docs.dev.koski-xroad.fi/producer') // TODO: Read env from somewhere
            .end({ pretty: true });
    }
}

export default WSDLGenerator;
