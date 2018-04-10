import builder from 'xmlbuilder';

const xml = builder.create('SOAP-ENV:Envelope', {
    version: '1.0',
    encoding: 'UTF-8',
})
    .att('xmlns:SOAP-ENV', 'http://schemas.xmlsoap.org/soap/envelope/')
    .att('xmlns:id', 'http://x-road.eu/xsd/identifiers')
    .att('xmlns:xrd', 'http://x-road.eu/xsd/xroad.xsd')
    .ele('SOAP-ENV:Header')
    .end({ pretty: true});

/*
const xml = builder.create('root')
    .ele('xmlbuilder')
    .ele('repo', {'type': 'git'}, 'git://github.com/oozcitak/xmlbuilder-js.git')
    .end({ pretty: true});
*/

console.log(xml);
