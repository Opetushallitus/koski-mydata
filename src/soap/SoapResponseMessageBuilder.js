import builder from 'xmlbuilder';
import log from 'lambda-log';
import config from 'config';

class SoapResponseMessageBuilder {
    constructor() {
        this.serverXRoadInstance = config.get('xroad.env');
        this.serverMemberClass = 'GOV';
        this.serverMemberCode = '2769790-1';
        this.serverSubsystemCode = 'koski';
        this.serverServiceCode = 'opintoOikeudetService';
        this.serverServiceVersion = 'v1';

        this.serverProtocolVersion = '4.0';
    }

    buildResponseMessage(
        clientXRoadInstance, clientMemberClass, clientMemberCode, clientSubsystemCode,
        clientUserId, clientRequestId, clientType, opintoOikeudet,
    ) {
        try {
            return builder.create('SOAP-ENV:Envelope', {
                version: '1.0',
                encoding: 'UTF-8',
            })
            /* eslint-disable newline-per-chained-call */
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
                .ele(`kns1:${this.serverServiceCode}Response`).att('xmlns:kns1', 'http://docs.koski-xroad.fi/producer')
                .ele('kns1:opintoOikeudet').dat(JSON.stringify(opintoOikeudet))

                .end({ pretty: true });
            /* eslint-enable */
        } catch (err) {
            log.error(err);
            throw new Error('Failed to create SOAP Envelope');
        }
    }
}

export default SoapResponseMessageBuilder;
