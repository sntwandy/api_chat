import { Application } from 'express';
const message = require('../components/message/network');


const routes = (server: Application) => {
  server.use('/message', message);
};

export default routes;