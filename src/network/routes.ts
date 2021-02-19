import { Application } from 'express';
import message from '../components/message/network';
import user from '../components/user/network';
import chat from '../components/chat/network';


const routes = (server: Application) => {
  server.use('/message', message);
  server.use('/user', user);
  server.use('/chat', chat);
};

export default routes;
