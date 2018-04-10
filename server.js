import express from 'express';
import morgan from 'morgan';
import soapResponse from './index';

const app = express();
app.use(morgan('combined'));

app.use(express.static('./docs'));

app.get('/', (req, res) => {
    res.set('Content-Type', 'application/xml');
    res.send(soapResponse);
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
