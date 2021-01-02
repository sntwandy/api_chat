'use strict';

const message = require('../components/message/network');

const routes = (server) => {
  server.use('/message', message);
};

module.exports = routes;