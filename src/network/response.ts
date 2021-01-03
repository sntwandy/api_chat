import { Request, Response } from 'express';
const responseMessages = require('./responseMessages');

const sucess = function(req: Request, res: Response, status: number): void {
  res.status(status).send({
    'error': '',
    'body': responseMessages(status),
  });
};

const error = function(req: Request, res: Response, status: number, details: string): void {
  console.error('[response error] => ' + details);
  res.status(status).send({
    'error': responseMessages(status),
    'body': '',
  });
};

export = {
  sucess,
  error
};