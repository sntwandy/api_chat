'use strict';

const responseMessages = require('./responseMessages');

exports.sucess = function(req, res, status) {
  res.status(status).send({
    'error': '',
    'body': responseMessages(status),
  });
};

exports.error = function(req, res, status, details) {
  console.error('[response error] => ' + details);
  res.status(status).send({
    'error': responseMessages(status),
    'body': '',
  });
};