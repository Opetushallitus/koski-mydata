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
                        },
                        'xsd:element': [
                            {
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
                            {
                                '@name': 'opintoOikeudetServiceResponse',
                                'xsd:complexType': {
                                    'xsd:sequence': {
                                        'xsd:element': {
                                            '@name': 'opintoOikeudet',
                                            '@type': 'xsd:string',
                                            'xsd:annotation': {
                                                'xsd:documentation': {
                                                    '#text': 'Service response',
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                        ],
                    },
                },
                'wsdl:message': [
                    {
                        '@name': 'requestheader',
                        'wsdl:part': [
                            {
                                '@name': 'client',
                                '@element': 'xrd:client',
                            },
                            {
                                '@name': 'service',
                                '@element': 'xrd:service',
                            },
                            {
                                '@name': 'userId',
                                '@element': 'xrd:userId',
                            },
                            {
                                '@name': 'id',
                                '@element': 'xrd:id',
                            },
                            {
                                '@name': 'issue',
                                '@element': 'xrd:issue',
                            },
                            {
                                '@name': 'protocolVersion',
                                '@element': 'xrd:protocolVersion',
                            },
                        ],
                    },
                    {
                        '@name': 'opintoOikeudetService',
                        'wsdl:part': {
                            '@name': 'body',
                            '@element': 'tns:opintoOikeudetService',
                        },
                    },
                    {
                        '@name': 'opintoOikeudetServiceResponse',
                        'wsdl:part': {
                            '@name': 'body',
                            '@element': 'tns:opintoOikeudetServiceResponse',
                        },
                    },
                ],
                'wsdl:portType': {
                    '@name': 'opintoOikeudetServicePortType',
                    'wsdl:operation': {
                        '@name': 'opintoOikeudetService',
                        'wsdl:input': {
                            '@message': 'tns:opintoOikeudetService',
                        },
                        'wsdl:output': {
                            '@message': 'tns:opintoOikeudetServiceResponse',
                        },
                    },
                },
                'wsdl:binding': {
                    '@name': 'opintoOikeudetServiceBinding',
                    '@type': 'tns:opintoOikeudetServicePortType',
                    'wsdl:binding': {
                        '@style': 'document',
                        '@transport': 'http://schemas.xmlsoap.org/soap/http',
                    },
                    'wsdl:operation': {
                        '@name': 'opintoOikeudetService',
                        'soap:operation': {
                            '@soapAction': '',
                            '@style': 'document',
                        },
                        'xrd:version': {
                            '#text': 'v1',
                        },
                        'wsdl:input': {
                            'soap:body': {
                                '@parts': 'body',
                                '@use': 'literal',
                            },
                            'soap:header': [
                                {
                                    '@message': 'tns:requestheader',
                                    '@part': 'client',
                                    '@use': 'literal',
                                },
                                {
                                    '@message': 'tns:requestheader',
                                    '@part': 'service',
                                    '@use': 'literal',
                                },
                                {
                                    '@message': 'tns:requestheader',
                                    '@part': 'userId',
                                    '@use': 'literal',
                                },
                                {
                                    '@message': 'tns:requestheader',
                                    '@part': 'id',
                                    '@use': 'literal',
                                },
                                {
                                    '@message': 'tns:requestheader',
                                    '@part': 'issue',
                                    '@use': 'literal',
                                },
                                {
                                    '@message': 'tns:requestheader',
                                    '@part': 'protocolVersion',
                                    '@use': 'literal',
                                },
                            ],
                        },
                        'wsdl:output': {
                            'soap:body': {
                                '@parts': 'body',
                                '@use': 'literal',
                            },
                            'soap:header': [
                                {
                                    '@message': 'tns:requestheader',
                                    '@part': 'client',
                                    '@use': 'literal',
                                },
                                {
                                    '@message': 'tns:requestheader',
                                    '@part': 'service',
                                    '@use': 'literal',
                                },
                                {
                                    '@message': 'tns:requestheader',
                                    '@part': 'userId',
                                    '@use': 'literal',
                                },
                                {
                                    '@message': 'tns:requestheader',
                                    '@part': 'id',
                                    '@use': 'literal',
                                },
                                {
                                    '@message': 'tns:requestheader',
                                    '@part': 'issue',
                                    '@use': 'literal',
                                },
                                {
                                    '@message': 'tns:requestheader',
                                    '@part': 'protocolVersion',
                                    '@use': 'literal',
                                },
                            ],
                        },
                    },
                },
                'wsdl:service': {
                    '@name': 'opintoOikeudetService',
                    'wsdl:port': {
                        '@binding': 'tns:opintoOikeudetServiceBinding',
                        '@name': 'opintoOikeudetServicePort',
                        'soap:address': {
                            '@location': 'https://e5tcdum0og.execute-api.eu-west-1.amazonaws.com/dev',
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
