'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

const app = express();
// eslint-disable-next-line no-undef
const port = process.env.port || 3000;

app.use(bodyParser.json());
app.use(router);

router.get('/message', (req, res) => {
  console.log(req.body);
  console.log(req.query);
  res.send(`Messages ${req.body.name} lists`);
});

router.post('/message', (req, res) => {
  res.send('Message added!');
});

// app.use('/', (request, response) => {
//   response.send('Hello! :)');
// });



app.listen(port, () => console.log(`The App is listening on: http://localhost:${port}/`));