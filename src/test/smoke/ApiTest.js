import axios from 'axios';
import fs from 'fs';
import assert from 'assert';
import { DOMParser } from 'xmldom';
import xpath from 'xpath';

const client = axios.create({
    baseURL: 'https://nfrn9xwnx0.execute-api.eu-west-1.amazonaws.com/dev', // TODO: Read URL from environment variables
    timeout: 15000,
});

async function TestDeployedFunction() {
    try {
        const postData = fs.readFileSync('examples/opintooikeudet-payload.xml', 'UTF-8');
        const response = await client.post(null, postData);

        const doc = new DOMParser().parseFromString(response.data);
        const cdata = xpath.parse('//soap:Body/koski:opintoOikeudetServiceResponse/koski:opintoOikeudet')
            .evaluateString({
                node: doc,
                namespaces: {
                    getNamespace: (prefix) => { // eslint-disable-line consistent-return
                        if (prefix === 'soap') {
                            return 'http://schemas.xmlsoap.org/soap/envelope/';
                        }
                        if (prefix === 'koski') {
                            return 'http://docs.koski-xroad.fi/producer';
                        }
                    },
                },
            });

        const opintoOikeudet = JSON.parse(cdata);
        assert.strictEqual(opintoOikeudet.henkilö.oid, '1.2.246.562.24.69337840275');

        process.exit(0);
    } catch (err) {
        console.log(`API Response failed ${err}`);
        if (err.response && err.response.data) {
            console.log(err.response.data);
        }
        process.exit(1);
    }
}

TestDeployedFunction();
