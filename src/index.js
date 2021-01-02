'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const response = require('./network/response');

const app = express();
// eslint-disable-next-line no-undef
const port = process.env.port || 3000;

app.use(bodyParser.json());
app.use(router);

router.get('/message', (req, res) => {
  if (req.query.error === 'OK') {
    response.error(req, res, 'There are an error');
  } else {
    response.sucess(req, res, 'Messages lists');
  }
});

router.post('/message', (req, res) => {
  // res.status(201).send({
  //   'error': '',
  //   'body': 'created correctly'
  // });
  response.sucess(req, res, 'Created correctly!', 201);
});

// app.use('/', (request, response) => {
//   response.send('Hello! :)');
// });



app.listen(port, () => console.log(`The App is listening on: http://localhost:${port}/`));