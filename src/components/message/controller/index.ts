import store from '../store';

/**
 * @param {user, string} -- to add the message
 */

interface Message {
  user: string,
  message: string,
  date: Date,
};

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

const getMessages = (): Promise<Message[]> => {
  return new Promise((resolve, reject) => {
    resolve(store.list());
  });
};

export = {
  addMessage,
  getMessages,
};