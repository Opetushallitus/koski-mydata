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

            .up()

            .ele('wsdl:portType').att('name', 'opintoOikeudetServicePortType')
            .ele('wsdl:operation').att('name', 'opintoOikeudetService')
            .ele('wsdl:input').att('message', 'tns:opintoOikeudetService')
            .ele('wsdl:output').att('message', 'tns:opintoOikeudetServiceResponse')

            .up().up().up().up()

            .ele('wsdl:binding').att('name', 'opintoOikeudetServiceBinding').att('type', 'tns:opintoOikeudetServicePortType')
            .ele('soap:binding').att('style', 'document').att('transport', 'http://schemas.xmlsoap.org/soap/http')
            .ele('wsdl:operation').att('name', 'opintoOikeudetService')
            .ele('soap:operation').att('soapAction', '').att('style', 'document').up()
            .ele('xrd:version').text('v1').up()
            .ele('wsdl:input')
            .ele('soap:body').att('parts', 'body').att('use', 'literal')
            .ele('soap:header').att('message', 'tns:requestheader').att('part', 'client').att('use', 'literal').up()
            .ele('soap:header').att('message', 'tns:requestheader').att('part', 'service').att('use', 'literal').up()
            .ele('soap:header').att('message', 'tns:requestheader').att('part', 'userId').att('use', 'literal').up()
            .ele('soap:header').att('message', 'tns:requestheader').att('part', 'id').att('use', 'literal').up()
            .ele('soap:header').att('message', 'tns:requestheader').att('part', 'issue').att('use', 'literal').up()
            .ele('soap:header').att('message', 'tns:requestheader').att('part', 'protocolVersion').att('use', 'literal').up()
            .up().up()
            .ele('wsdl:output')
            .ele('soap:body').att('parts', 'body').att('use', 'literal')
            .ele('soap:header').att('message', 'tns:requestheader').att('part', 'client').att('use', 'literal').up()
            .ele('soap:header').att('message', 'tns:requestheader').att('part', 'service').att('use', 'literal').up()
            .ele('soap:header').att('message', 'tns:requestheader').att('part', 'userId').att('use', 'literal').up()
            .ele('soap:header').att('message', 'tns:requestheader').att('part', 'id').att('use', 'literal').up()
            .ele('soap:header').att('message', 'tns:requestheader').att('part', 'issue').att('use', 'literal').up()
            .ele('soap:header').att('message', 'tns:requestheader').att('part', 'protocolVersion').att('use', 'literal').up()
            .up().up().up().up().up()

            .ele('wsdl:service').att('name', 'opintoOikeudetService')
            .ele('wsdl:port').att('binding', 'tns:opintoOikeudetServiceBinding').att('name', 'opintoOikeudetServicePort')
            .ele('soap:address').att('location', 'https://e5tcdum0og.execute-api.eu-west-1.amazonaws.com/dev') // TODO API URL

            .end({ pretty: true });
    }
}

export default WSDLGenerator;
