/**
 *
 */
import { Chat, ChatM } from '../../../utils/interfaces';
import store from '../store';


const createChat = async (users: ChatM): Promise<Chat> => {
  try {
    const chat = await store.create(users);
    return chat;
  } catch (error) {
    throw new Error(error);
  }
};

export = {
  create: createChat
};
