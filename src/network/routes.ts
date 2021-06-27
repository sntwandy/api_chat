import { Application } from 'express';
import message from '../components/message/network';
import user from '../components/user/network';
import chat from '../components/chat/network';


const routes = (server: Application) => {
  server.use('/api//message', message);
  server.use('/api//user', user);
  server.use('/api//chat', chat);
};

export default routes;
