import builder from 'xmlbuilder';
import fs from 'fs';

class OpintoOikeusAdapterServer {
    constructor() {
        /* TODO: These are specific to our instance and environment */
        this.serverXRoadInstance = 'FI-DEV';
        this.serverMemberClass = 'GOV';
        this.serverMemberCode = '2769790-1';
        this.serverSubsystemCode = 'koski';
        this.serverServiceCode = 'opintoOikeudetService';
        this.serverServiceVersion = 'v1';

        this.serverProtocolVersion = '4.0';

        fs.readFile('./examples/opintooikeudet.json', 'utf8', (err, data) => {
            if (err) throw err; // we'll not consider error handling for now
            this.opintoOikeudet = JSON.parse(data);
        });
    }

    getOpintoOikeudetSoapResponse(clientXRoadInstance, clientMemberClass, clientMemberCode, clientSubsystemCode,
        clientUserId, clientRequestId, clientType,
    ) {
        return builder.create('SOAP-ENV:Envelope', {
            version: '1.0',
            encoding: 'UTF-8',
        })
            .att('xmlns:SOAP-ENV', 'http://schemas.xmlsoap.org/soap/envelope/')
            .att('xmlns:id', 'http://x-road.eu/xsd/identifiers')
            .att('xmlns:xrd', 'http://x-road.eu/xsd/xroad.xsd')
            .ele('SOAP-ENV:Header')

            // TODO: Vastaussanoman on sisällettävä täsmälleen samat otsikkotiedot kuin kyselysanomassakin on.
            .ele('xrd:client').att('id:objectType', clientType)
            .ele('id:xRoadInstance', clientXRoadInstance).up()
            .ele('id:memberClass', clientMemberClass).up()
            .ele('id:memberCode', clientMemberCode).up()
            .ele('id:subsystemCode', clientSubsystemCode).up()

            .up()
            .ele('xrd:service').att('id:objectType', 'SERVICE')
            .ele('id:xRoadInstance', this.serverXRoadInstance).up()
            .ele('id:memberClass', this.serverMemberClass).up()
            .ele('id:memberCode', this.serverMemberCode).up()
            .ele('id:subsystemCode', this.serverSubsystemCode).up()
            .ele('id:serviceCode', this.serverServiceCode).up()
            .ele('id:serviceVersion', this.serverServiceVersion).up()

            .up()
            .ele('xrd:userId', clientUserId).up()
            .ele('xrd:id', clientRequestId).up()
            .ele('xrd:protocolVersion', this.serverProtocolVersion).up()

            .up()
            .ele('SOAP-ENV:Body')
            .ele(`kns1:${this.serverServiceCode}Response`).att('xmlns:kns1', 'http://docs.dev.koski-xroad.fi/producer')
            .ele('kns1:opintoOikeudet').dat(JSON.stringify(this.opintoOikeudet)) // TODO: Read this from Koski API

            .end({ pretty: true});
    }
}

export default OpintoOikeusAdapterServer;
