import builder from 'xmlbuilder';

/* TODO: These must be read from the request SOAP headers */
const clientXRoadInstance = 'FI-DEV';
const clientMemberClass = 'GOV';
const clientMemberCode = '2769790-1';
const clientSubsystemCode = 'koski';

/* TODO: These are specific to our instance and environment */
const serverXRoadInstance = 'FI-DEV';
const serverMemberClass = 'GOV';
const serverMemberCode = '2769790-1';
const serverSubsystemCode = 'koski';
const serverServiceCode = 'getOpintoOikeudet';
const serverServiceVersion = 'v1';

const xml = builder.create('SOAP-ENV:Envelope', {
    version: '1.0',
    encoding: 'UTF-8',
})
    .att('xmlns:SOAP-ENV', 'http://schemas.xmlsoap.org/soap/envelope/')
    .att('xmlns:id', 'http://x-road.eu/xsd/identifiers')
    .att('xmlns:xrd', 'http://x-road.eu/xsd/xroad.xsd')
    .ele('SOAP-ENV:Header')

    .ele('xrd:client').att('id:objectType', 'SUBSYSTEM')
    .ele('id:xRoadInstance', clientXRoadInstance).up()
    .ele('id:memberClass', clientMemberClass).up()
    .ele('id:memberCode', clientMemberCode).up()
    .ele('id:subsystemCode', clientSubsystemCode).up()

    .up()
    .ele('xrd:service').att('id:objectType', 'SERVICE')
    .ele('id:xRoadInstance', serverXRoadInstance)
    .end({ pretty: true});

/*
const xml = builder.create('root')
    .ele('xmlbuilder')
    .ele('repo', {'type': 'git'}, 'git://github.com/oozcitak/xmlbuilder-js.git')
    .end({ pretty: true});
*/

console.log(xml);
