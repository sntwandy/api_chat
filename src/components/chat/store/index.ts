/**
 *
 */
import db from '../../../db';
import { Chat, ChatM } from '../../../utils/interfaces';
import Model from '../model';

// Init DB instance
db();

const create = async (users: ChatM): Promise<Chat> => {
  try {
    console.log(users)
    const chat = await new Model(users);
    const chatReturn = await chat.save()
    return chatReturn;
  } catch (error) {
    throw new Error(error);
  }
}

export = {
  create,
};
