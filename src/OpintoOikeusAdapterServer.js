import builder from 'xmlbuilder';

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
    }

    createOpintoOikeusSoapResponse(clientXRoadInstance, clientMemberClass, clientMemberCode, clientSubsystemCode,
        clientUserId, clientRequestId, clientType, opintoOikeudet,
    ) {
        try {
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
                .ele('kns1:opintoOikeudet').dat(JSON.stringify(opintoOikeudet))

                .end({ pretty: true });

        } catch (err) {
            console.log('Failed to create SOAP Envelope', err);
            throw new Error('Failed to create SOAP Envelope');
        }
    }
}

export default OpintoOikeusAdapterServer;
