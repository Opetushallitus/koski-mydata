import builder from "xmlbuilder";

class WSDLGenerator {
    createOpintoOikeusWSDL() {

        return builder.create('wsdl:definitions', {
            version: '1.0',
            encoding: 'UTF-8',
            standalone: false,
        })
            .att('xmlns:soap', 'http://schemas.xmlsoap.org/wsdl/soap/')
            .att('xmlns:tns', 'http://docs.dev.koski-xroad.fi/producer')
            .att('xmlns:wsdl', 'http://schemas.xmlsoap.org/wsdl/')
            .att('xmlns:xrd', 'http://x-road.eu/xsd/xroad.xsd')
            .att('xmlns:xsd', 'http://www.w3.org/2001/XMLSchema')
            .att('xmlns:id', 'http://x-road.eu/xsd/identifiers')
            .att('name', 'opintoOikeudetService')
            .att('targetNamespace', 'http://docs.dev.koski-xroad.fi/producer') // TODO: Read env from somewhere

            .ele('wsdl:types')
            .ele('xsd:schema')
            .att('elementFormDefault', 'qualified')
            .att('targetNamespace', 'http://docs.dev.koski-xroad.fi/producer')

            .ele('xsd:import')
            .att('id', 'xrd')
            .att('namespace', 'http://x-road.eu/xsd/xroad.xsd')
            .att('schemaLocation', 'http://x-road.eu/xsd/xroad.xsd')
            .up()

            .ele('xsd:element')
            .att('name', 'opintoOikeudetService')
            .ele('xsd:complexType')
            .ele('xsd:sequence')
            .ele('xsd:element')
            .att('name', 'hetu')
            .att('type', 'xsd:string')
            .ele('xsd:annotation')
            .ele('xsd:documentation').text('Name')

            .up().up().up().up().up().up()


            .ele('xsd:element')
            .att('name', 'opintoOikeudetServiceResponse')

            .ele('xsd:complexType')
            .ele('xsd:sequence')
            .ele('xsd:element')
            .att('name', 'opintoOikeudet')
            .att('type', 'xsd:string')
            .ele('xsd:annotation')
            .ele('xsd:documentation').text('Service response')

            .up().up().up().up().up().up().up().up()

            .ele('wsdl:message')
            .att('name', 'requestheader')

            .ele('wsdl:part').att('name', 'client').att('element', 'xrd:client').up()
            .ele('wsdl:part').att('name', 'service').att('element', 'xrd:service').up()
            .ele('wsdl:part').att('name', 'userId').att('element', 'xrd:userId').up()
            .ele('wsdl:part').att('name', 'id').att('element', 'xrd:id').up()
            .ele('wsdl:part').att('name', 'issue').att('element', 'xrd:issue').up()
            .ele('wsdl:part').att('name', 'protocolVersion').att('element', 'xrd:protocolVersion').up()

            .up()


            .ele('wsdl:message').att('name', 'opintoOikeudetService')
            .ele('wsdl:part').att('name', 'body').att('element', 'tns:opintoOikeudetService').up()

            .up()

            .ele('wsdl:message').att('name', 'opintoOikeudetServiceResponse')
            .ele('wsdl:part').att('name', 'body').att('element', 'tns:opintoOikeudetServiceResponse').up()

            .end({ pretty: true });
    }
}

export default WSDLGenerator;
