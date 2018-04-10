import builder from 'xmlbuilder';

/* TODO: These must be read from the request SOAP headers */
const clientXRoadInstance = 'FI-DEV';
const clientMemberClass = 'GOV';
const clientMemberCode = '2769790-1';
const clientSubsystemCode = 'koski';

const clientUserId = '123456789';
const clientRequestId = 'ID123456';

/* TODO: These are specific to our instance and environment */
const serverXRoadInstance = 'FI-DEV';
const serverMemberClass = 'GOV';
const serverMemberCode = '2769790-1';
const serverSubsystemCode = 'koski';
const serverServiceCode = 'opintoOikeudetService';
const serverServiceVersion = 'v1';

const serverProtocolVersion = '4.0';

const antunOpintoOikeudet = {
    mallikoulu: 2020,
    astronauttikoulu: 2024,
};

const xml = builder.create('SOAP-ENV:Envelope', {
    version: '1.0',
    encoding: 'UTF-8',
})
    .att('xmlns:SOAP-ENV', 'http://schemas.xmlsoap.org/soap/envelope/')
    .att('xmlns:id', 'http://x-road.eu/xsd/identifiers')
    .att('xmlns:xrd', 'http://x-road.eu/xsd/xroad.xsd')
    .ele('SOAP-ENV:Header')

    // TODO: Vastaussanoman on sisällettävä täsmälleen samat otsikkotiedot kuin kyselysanomassakin on.
    .ele('xrd:client').att('id:objectType', 'SUBSYSTEM')
    .ele('id:xRoadInstance', clientXRoadInstance).up()
    .ele('id:memberClass', clientMemberClass).up()
    .ele('id:memberCode', clientMemberCode).up()
    .ele('id:subsystemCode', clientSubsystemCode).up()

    .up()
    .ele('xrd:service').att('id:objectType', 'SERVICE')
    .ele('id:xRoadInstance', serverXRoadInstance).up()
    .ele('id:memberClass', serverMemberClass).up()
    .ele('id:memberCode', serverMemberCode).up()
    .ele('id:subsystemCode', serverSubsystemCode).up()
    .ele('id:serviceCode', serverServiceCode).up()
    .ele('id:serviceVersion', serverServiceVersion).up()

    .up()
    .ele('xrd:userId', clientUserId).up()
    .ele('xrd:id', clientRequestId).up()
    .ele('xrd:protocolVersion', serverProtocolVersion).up()

    .up()
    .ele('SOAP-ENV:Body')
    .ele(`kns1:${serverServiceCode}Response`).att('xmlns:kns1', 'http://example.org/todo')
    .ele('kns1:opintoOikeudet').dat(JSON.stringify(antunOpintoOikeudet))

    .end({ pretty: true});

console.log(xml);
