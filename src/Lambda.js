import log from 'lambda-log';
import config from 'config';
import isEqual from 'lodash.isequal';
import sortBy from 'lodash.sortby';
import differenceWith from 'lodash.differencewith';
import SoapResponseMessageBuilder from './soap/SoapResponseMessageBuilder';
import SoapPayloadParser from './soap/SoapRequestPayloadParser';
import KoskiClient from './KoskiClient';
import WSDLBuilder from './soap/WSDLBuilder';
import SoapErrorBuilder from './soap/SoapFaultMessageBuilder';
import SecretsManagerProvider from './SecretsManagerProvider';
import Forbidden from './error/Forbidden';
import NotFound from './error/NotFound';

function findDifferences(sortedArray1, sortedArray2) {
    const onlyInArray1 = differenceWith(sortedArray1, sortedArray2, isEqual);
    const onlyInArray2 = differenceWith(sortedArray2, sortedArray1, isEqual);

    return {
        onlyInArray1,
        onlyInArray2,
    };
}

function logMismatch(condition, message) {
    if (!condition) {
        console.warn(message);
    }
}

function logDifferences(differences) {
    console.log('Something only in new data:', differences.onlyInArray1.map(({ oid }) => oid).join(', '));
    console.log('Something only in old data:', differences.onlyInArray2.map(({ oid }) => oid).join(', '));
}

// eslint-disable-next-line no-unused-vars
function flattenObject(obj, parentKey = '', result = {}) {
    Object.keys(obj).forEach((key) => {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            const newKey = parentKey ? `${parentKey}.${key}` : key;

            if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
                flattenObject(obj[key], newKey, result);
            } else if (Array.isArray(obj[key])) {
                obj[key].forEach((item, index) => {
                    flattenObject(item, `${newKey}[${index}]`, result);
                });
            } else {
                // eslint-disable-next-line no-param-reassign
                result[newKey] = obj[key];
            }
        }
    });
    return result;
}

function compareResults(newData, oldData) {
    const henkilöOk = isEqual(newData.henkilö, oldData.henkilö);
    const suostumuksenPaattymispaivaOk = isEqual(newData.suostumuksenPaattymispaiva, oldData.suostumuksenPaattymispaiva);

    const sortedNewOos = sortBy(newData.opiskeluoikeudet, 'oid');
    const sortedOldOos = sortBy(oldData.opiskeluoikeudet, 'oid');
    const oosLengthOk = sortedNewOos.length === sortedOldOos.length;

    const sortedNew = sortBy(newData.opiskeluoikeudet, 'oid').map((oo) => ({
        ...oo,
        suoritukset: sortBy(oo.suoritukset, (s) => s.tyyppi.koodiarvo),
    }));

    const sortedOld = sortBy(oldData.opiskeluoikeudet, 'oid').map((oo) => ({
        ...oo,
        suoritukset: sortBy(oo.suoritukset, (s) => s.tyyppi.koodiarvo),
    }));

    const oosOk = isEqual(sortedNew, sortedOld);

    const allDataOk = henkilöOk && suostumuksenPaattymispaivaOk && oosLengthOk && oosOk;

    if (allDataOk) {
        console.log('Vanha ja uusi data täsmäävät');
    } else {
        console.warn('Vanha ja uusi data eivät täsmää');

        logMismatch(henkilöOk, 'henkilö ei täsmää');
        logMismatch(suostumuksenPaattymispaivaOk, 'suostumuksen päättymispäivä ei täsmää');
        logMismatch(oosLengthOk, 'opiskeluoikeuksien lkm ei täsmää');

        if (!oosOk) {
            console.warn('opiskeluoikeudet eivät täsmää');

            const differences = findDifferences(sortedNewOos, sortedOldOos);
            logDifferences(differences);

            sortedNew.forEach((newOo, idx) => {
                const oldOo = sortedOld[idx];

                logMismatch(
                    !isEqual(newOo.suoritukset.length, oldOo.suoritukset.length),
                    `suorituksia eri määrä opiskeluoikeudella ${newOo.oid}`,
                );

                if (!isEqual(newOo.suoritukset, oldOo.suoritukset)) {
                    console.log(
                        'Opiskeluoikeuden',
                        newOo.oid,
                        'suoritukset eivät täsmää',
                        JSON.stringify(newOo.suoritukset.map((s) => s.tyyppi)),
                        JSON.stringify(oldOo.suoritukset.map((s) => s.tyyppi)),
                    );
                }
            });
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
