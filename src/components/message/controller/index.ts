import store from '../store';

/**
 * @param {user, string} -- to add the message
 */

interface Message {
  user: string,
  message: string,
  date: Date,
};

// add a message
const addMessage = (user: string, message: string): Promise<Message> => {
  return new Promise((resolve, reject)=> {
    if (!user || !message) {
      reject('Incorrect data');
      console.error('[messageController] => The user or message doesn\'t exist');
      return false;
    };
    const fullMessage = {
      user,
      message,
      date: new Date(),
    };
    resolve(fullMessage);
    store.add(fullMessage);
    console.log(fullMessage);
  });
};

// get all messages
const getMessages = (filterUser: any): Promise<Message[]> => {
  return new Promise((resolve, reject) => {
    resolve(store.list(filterUser));
  });
};

// update a message
const updateMessage = async (id: string, message: string): Promise<string> => {
  if (!id || !message) throw new Error('Invalid data');
  try {
    const updatedMessage: string = await store.update(id, message);
    return updatedMessage;
  } catch(error) {
    console.error(error);
    throw new Error('Server Error, updating message');
  };
};

// delete a message
const deleteMessage = async (userId: string): Promise<void> => {
  try {
    await store.remove(userId);
  } catch(error) {
    console.log(error);
    throw new Error('Error to delete');
  };
};

export = {
  addMessage,
  getMessages,
  updateMessage,
  deleteMessage,
};