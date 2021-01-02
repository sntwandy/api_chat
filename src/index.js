'use strict';

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const router = require('./network/routes');

const app = express();
// eslint-disable-next-line no-undef
const port = process.env.port || 3000;

app.use(bodyParser.json());
router(app);

// serve statics files
// eslint-disable-next-line no-undef
app.use('/', express.static(path.join(__dirname, 'public')));

app.listen(port, () => console.log(`The App is listening on: http://localhost:${port}/`));