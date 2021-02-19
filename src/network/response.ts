import { Request, Response } from 'express';
import { Chat, User } from '../utils/interfaces';

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

const sucessChat = (req: Request, res: Response, status: number, chat: Chat): void => {
  res.status(status).send({
    'error': '',
    'body': chat,
  });
};

const sucessUser = (req: Request, res: Response, status: number, user: User): void => {
  res.status(status).send({
    'error': '',
    'body': user,
  });
};

const sucessUsers = (req: Request, res: Response, status: number, user: User[]): void => {
  res.status(status).send({
    'error': '',
    'body': user,
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
  sucessUser,
  sucessUsers,
  sucessChat,
  sucessMessage,
  sucessMessageList,
  error
};