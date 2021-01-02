'use strict';

const express = require('express');
const router = express.Router();
const response = require('../../../network/response');

router.get('/', (req, res) => {
  if (req.query.error === 'OK') {
    response.error(req, res, 500, 'Server error');
  } else {
    response.sucess(req, res, 200, 'Messages lists');
  }
});

router.post('/', (req, res) => {
  if (req.query.error === 'OK') {
    response.error(req, res, 401, 'User unauthorized, doesnt have privilegies to access.');
  } else {
    response.sucess(req, res, 201);
  }
});

module.exports = router;