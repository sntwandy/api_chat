/**
 * @param {Message} [messageData] -- full message
 */

interface Message {
  user: string,
  message: string,
  date: Date,
};

let messageList: Message[] = [];

const addMessage = (message: Message): void => {
  messageList.push(message);
};

const getMessages = (): Message[] => {
  return messageList;
};

export = {
  add: addMessage,
  list: getMessages,
  // get -- get a specific message
  // update --update a message
  // delete -- delete a message
};