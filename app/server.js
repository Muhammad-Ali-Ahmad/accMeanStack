const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const db = require('./db');

const api = require('./routes/api');


const env = process.env.NODE_ENV = process.env.NODE_ENV || 'dev';
const app = express();
const port = 3030;
app.use(bodyParser.json());
app.use(morgan('combined'));
app.use(cors({ origin: '*' }));
const staticDir = path.join(__dirname, '../dist/AccMeanStack');

const htmlFile = path.join(staticDir, 'index.html');
console.log('Serving contents of ', staticDir);
app.use(express.static(staticDir));
app.use('/api', api);
app.use('/', (req, res) => res.sendFile(htmlFile));
app.listen(port);
console.log(`Listening on port ${port} ...`);
db.connect();
