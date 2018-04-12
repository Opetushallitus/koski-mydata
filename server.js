import soapResponse from './index';

import express from 'express';
import bodyParser from 'body-parser';

require('body-parser-xml')(bodyParser);

import morgan from 'morgan';

const app = express();
app.use(morgan('combined')); // logging
app.use(express.static('./docs')); // static content
app.use(bodyParser.text({type: '*/*' }));

var parseString = require('xml2js').parseString;
var stripPrefix = require('xml2js').processors.stripPrefix;

app.get('/', (req, res) => {
    res.set('Content-Type', 'application/xml');
    res.send(soapResponse);
});

app.post('/Endpoint', (req, res) => {
    parseString(req.body, { tagNameProcessors: [stripPrefix] }, function(err, js) {
        if (err) throw err;
        console.dir(js, { depth: null });
    });
    res.set('Content-Type', 'text/xml');
    res.send(soapResponse);
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
