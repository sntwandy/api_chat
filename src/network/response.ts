import { Request, Response } from 'express';

interface FullMessage {
  user: string,
  message: string,
  date: Date,
};

const sucess = (req: Request, res: Response, status: number, message: string): void => {
  res.status(status).send({
    'error': '',
    'body': message,
  });
};

const sucessMessageList = (req: Request, res: Response, status: number, messageList: FullMessage[]): void => {
  res.status(status).send({
    'error': '',
    'body': messageList,
  });
};

const sucessMessage = (req: Request, res: Response, status: number, message: FullMessage): void => {
  res.status(status).send({
    'error': '',
    'body': message,
  });
};

const error = (req: Request, res: Response, status: number, message: string, details: string): void => {
  console.error('[response error] => ' + details);
  res.status(status).send({
    'error': message,
    'body': '',
  });
};

export = {
  sucess,
  sucessMessage,
  sucessMessageList,
  error
};