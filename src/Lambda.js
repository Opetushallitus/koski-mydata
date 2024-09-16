import log from 'lambda-log';
import config from 'config';
import isEqual from 'lodash.isequal';
import sortBy from 'lodash.sortby';
import cleanDeep from 'clean-deep';
import SoapResponseMessageBuilder from './soap/SoapResponseMessageBuilder';
import SoapPayloadParser from './soap/SoapRequestPayloadParser';
import KoskiClient from './KoskiClient';
import WSDLBuilder from './soap/WSDLBuilder';
import SoapErrorBuilder from './soap/SoapFaultMessageBuilder';
import SecretsManagerProvider from './SecretsManagerProvider';
import Forbidden from './error/Forbidden';
import NotFound from './error/NotFound';

function logMismatch(condition, message) {
    if (!condition) {
        console.warn(message);
    }
}
function compareResults(newData, oldData) {
    const henkilöOk = isEqual(newData.henkilö, oldData.henkilö);
    const suostumuksenPaattymispaivaOk = isEqual(newData.suostumuksenPaattymispaiva, oldData.suostumuksenPaattymispaiva);

    const sortedNew = sortBy(
        newData.opiskeluoikeudet.filter((oo) => !/korkeak/.test(oo.tyyppi.koodiarvo)),
        (o) => o.oid || o.alkamispäivä || o.tyyppi.koodiarvo,
    ).map((oo) => (cleanDeep({
        ...oo,
        suoritukset: sortBy(oo.suoritukset, (s) => s.tyyppi.koodiarvo).map((s) => ({ ...s, koulutussopimukset: [] })),
    })));

    const kkNew = (newData.opiskeluoikeudet.filter((oo) => /korkeak/.test(oo.tyyppi.koodiarvo)))
        .map((oo) => (cleanDeep({
            ...oo,
            suoritukset: sortBy(oo.suoritukset, (s) => s.tyyppi.koodiarvo).map((s) => ({ ...s, koulutussopimukset: [] })),
        })));

    const sortedOld = sortBy(
        oldData.opiskeluoikeudet.filter((oo) => !/korkeak/.test(oo.tyyppi.koodiarvo)),
        (o) => o.oid || o.alkamispäivä || o.tyyppi.koodiarvo,
    ).map((oo) => ({
        ...oo,
        suoritukset: sortBy(oo.suoritukset, (s) => s.tyyppi.koodiarvo),
    }));

    const kkOld = (oldData.opiskeluoikeudet.filter((oo) => /korkeak/.test(oo.tyyppi.koodiarvo)))
        .map((oo) => (cleanDeep({
            ...oo,
            suoritukset: sortBy(oo.suoritukset, (s) => s.tyyppi.koodiarvo).map((s) => ({ ...s, koulutussopimukset: [] })),
        })));

    const eachNewInOld = kkNew.all((kkn) => kkOld.some((kko) => isEqual(({ ...kkn, suoritukset: [] }), ({ ...kko, suoritukset: [] }))));
    const eachOldInNew = kkOld.all((kko) => kkNew.some((kkn) => isEqual(({ ...kko, suoritukset: [] }), ({ ...kkn, suoritukset: [] }))));

    const oosLengthOk = sortedNew.length === sortedOld.length;

    const oosOk = isEqual(sortedNew, sortedOld);

    const allDataOk = henkilöOk && suostumuksenPaattymispaivaOk && oosLengthOk && oosOk && eachNewInOld && eachOldInNew;

    if (allDataOk) {
        console.log('Vanha ja uusi data täsmäävät');
    } else {
        console.warn('Vanha ja uusi data eivät täsmää');

        logMismatch(henkilöOk, 'henkilö ei täsmää');
        logMismatch(suostumuksenPaattymispaivaOk, 'suostumuksen päättymispäivä ei täsmää');
        logMismatch(oosLengthOk, `opiskeluoikeuksien lkm ei täsmää ${newData.henkilö.oid}: 
            ${sortedNew.map((oo) => oo.oid)} vs. ${sortedOld.map((oo) => oo.oid)}`);

        if (!oosOk) {
            console.warn('opiskeluoikeudet eivät täsmää');

            const sortedNewWithoutSuoritukset = sortedNew.map((oo) => ({ ...oo, suoritukset: [] }));
            const sortedOldWithoutSuoritukset = sortedOld.map((oo) => ({ ...oo, suoritukset: [] }));

            if (!isEqual(sortedNewWithoutSuoritukset, sortedOldWithoutSuoritukset)) {
                console.warn(
                    'opiskeluoikeudet ilman suorituksia eivät täsmää',
                    JSON.stringify(sortedNewWithoutSuoritukset),
                    JSON.stringify(sortedOldWithoutSuoritukset),
                );
            } else {
                console.log(
                    'opiskeluoikeudet ilman suorituksia täsmäävät; suorituksissa eroa?',
                    JSON.stringify(sortedNew),
                    JSON.stringify(sortedOld),
                );
            }

            if (eachNewInOld && eachOldInNew) {
                console.log('Vanha ja uusi kk data täsmäävät');
            } else {
                console.warn(
                    'Vanha ja uusi kk data eivät täsmää',
                    JSON.stringify(kkNew),
                    JSON.stringify(kkOld),
                );
            }
        }
    }
}

class Lambda {
    constructor() {
        this.secretsManager = SecretsManagerProvider.getSecretsManager();
        this.parser = new SoapPayloadParser();
        this.responseBuilder = new SoapResponseMessageBuilder();
        this.coldstart = true;
    }

    static handleWSDLRequest(queryParameters) {
        return new Promise((resolve, reject) => {
            if (queryParameters !== null && Object.prototype.hasOwnProperty.call(queryParameters, 'wsdl')) {
                resolve(WSDLBuilder.buildOpintoOikeusWSDL());
            } else {
                reject(new Error('Invalid GET request, only WSDL-file requests supported'));
            }
        });
    }

    async getClient(memberId) {
        const memberName = config.get(`member.${memberId}.name`);
        const { username, password } = await this.secretsManager.getKoskiCredentials(memberName);

        return new KoskiClient(username, password);
    }

    async handleSOAPRequest(xml) { // This is the "Adapter Server" for X-Road
        try {
            const {
                clientXRoadInstance,
                clientMemberClass,
                clientMemberCode,
                clientSubsystemCode,
                clientUserId,
                clientRequestId,
                clientType,
                clientIssue,
                hetu,
            } = this.parser.parsePayload(xml);

            const client = await this.getClient(clientMemberCode);
            const opintoOikeudet = await client.getOpintoOikeudet(hetu, clientMemberCode);

            try {
                const opintoOikeudetFromNewApi = await client.getOpintoOikeudetFromNewApi(xml);
                compareResults(opintoOikeudetFromNewApi, opintoOikeudet);
            } catch (e) {
                log.info('Failed to compare results');
                log.error(e);
            }

            const configKey = `member.${clientMemberCode}.name`;
            const clientMemberName = config.has(configKey) ? config.get(configKey) : undefined;

            log.config.meta.event.clientMemberCode = clientMemberCode;
            log.config.meta.event.clientMemberName = clientMemberName;

            const soapEnvelope = this.responseBuilder.buildResponseMessage(
                clientXRoadInstance,
                clientMemberClass,
                clientMemberCode,
                clientSubsystemCode,
                clientUserId,
                clientRequestId,
                clientType,
                clientIssue,
                opintoOikeudet,
            );

            log.config.meta.event.success = true;
            log.info('handleSOAPRequest(): Handled opinto-oikeus request successfully');

            return soapEnvelope;
        } catch (err) {
            log.config.meta.event.failure = true;
            log.error('handleSOAPRequest(): Handled opinto-oikeus request with failure');
            log.error(err);
            throw err;
        }
    }

    async opintoOikeusHandler(event, context, callback) {
        try {
            const { body, ...eventMeta } = event; // eslint-disable-line no-unused-vars
            const { logGroupName, logStreamName, ...contextMeta } = context; // eslint-disable-line no-unused-vars
            log.config = {
                meta: { event: { coldstart: this.coldstart, eventMeta, contextMeta } }, // omit post body from logs, it contains hetu
                debug: true, // enable debug-level logging
            };

            this.coldstart = false;
            log.info('Received request to opintoOikeusHandler');

            if (event.httpMethod === 'GET') {
                callback(null, {
                    statusCode: 200,
                    body: await Lambda.handleWSDLRequest(event.queryStringParameters),
                    headers: { 'content-type': 'application/wsdl+xml' },
                });
            } else {
                if (process.env.NODE_ENV !== 'test') {
                    log.info({ opintooikeusQuery: 'ok' });
                }
                callback(null, {
                    statusCode: 200,
                    body: await this.handleSOAPRequest(event.body),
                    headers: { 'content-type': 'text/xml' },
                });
            }
        } catch (err) {
            if (process.env.NODE_ENV !== 'test') {
                log.error('opintoOikeusHandler(): Failure');
                log.error(err);

                if (err instanceof Forbidden) {
                    log.info({ opintooikeusQuery: 'forbidden' });
                } else if (err instanceof NotFound) {
                    log.info({ opintooikeusQuery: 'notFound' });
                } else {
                    log.error({ opintooikeusQuery: 'failure' });
                }
            }
            callback(null, {
                statusCode: err instanceof Forbidden ? 403 : 500,
                body: SoapErrorBuilder.buildErrorMessage(err),
                headers: { 'content-type': 'text/xml' },
            });
        }
    }
}

export const lambda = new Lambda();

export const opintoOikeusHandler = (event, context, callback) => { // AWS Lambda expects to receive a function
    lambda.opintoOikeusHandler(event, context, callback);
};
