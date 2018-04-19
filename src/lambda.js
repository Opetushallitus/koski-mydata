import OpintoOikeusAdapterServer from './OpintoOikeusAdapterServer';
import AWSSecretsManager from './AWSSecretsManager';
import LocalSecretsManager from './LocalSecretsManager';
import SoapPayloadParser from './SoapPayloadParser';

const secretsManager = (process.env.AWS_SAM_LOCAL === 'true') ? new LocalSecretsManager() : new AWSSecretsManager();
const parser = new SoapPayloadParser();

exports.opintoOikeusHandler = async(event, context, callback) => {

    try {
        const { username, password } = await secretsManager.getKoskiCredentials(); // TODO: Fail if no username & password provided
        const adapterServer = new OpintoOikeusAdapterServer(username, password);

        const {
            clientXRoadInstance,
            clientMemberClass,
            clientMemberCode,
            clientSubsystemCode,
            clientUserId,
            clientRequestId,
            clientType,
            hetu,
        } = parser.parsePayload(event.body);


        const soapEnvelope = await adapterServer.getOpintoOikeudetSoapResponse(clientXRoadInstance, clientMemberClass, clientMemberCode,
            clientSubsystemCode, clientUserId, clientRequestId, clientType, hetu,
        );

        callback(null, {
            statusCode: 200,
            body: soapEnvelope,
            headers: {'content-type': 'text/xml'},
        });
    } catch (err) {
        console.log(err);
        context.done('error', 'Failed to get opinto-oikeudet');
    }
};
