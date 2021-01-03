import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import router from './network/routes';

const app = express();
const port = process.env.port || 3000;
app.set('port', port);

app.use(bodyParser.json());
router(app);

// serve statics files
// eslint-disable-next-line no-undef
app.use('/', express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), (): any => console.log(`The App is listening on: http://localhost:${port}/`));