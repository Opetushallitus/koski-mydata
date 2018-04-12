import express from 'express';
import bodyParser from 'body-parser';
import { parseString, processors } from 'xml2js';
import morgan from 'morgan';

import soapResponse from './index';

require('body-parser-xml')(bodyParser);

const app = express();
const { stripPrefix } = processors;

app.use(morgan('combined')); // logging
app.use(express.static('./docs')); // static content
app.use(bodyParser.text({type: '*/*' }));

app.get('/', (req, res) => {
    res.set('Content-Type', 'application/xml');
    res.send(soapResponse);
});

app.post('/Endpoint', (req, res) => {
    parseString(req.body, { tagNameProcessors: [stripPrefix] }, (err, js) => {
        if (err) throw err;
        console.dir(js, { depth: null });
    });
    res.set('Content-Type', 'text/xml');
    res.send(soapResponse);
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
