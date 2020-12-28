const express = require('express');

const app = express();
// eslint-disable-next-line no-undef
const port = process.env.port || 3000;

app.use('/', (request, response) => {
  response.send('Hello! :)');
});

app.listen(port, () => console.log(`The App is listening on: http://localhost:${port}/`));