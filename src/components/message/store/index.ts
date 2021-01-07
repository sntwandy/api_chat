/**
 * @param {Message} [messageData] -- full message
 */

import db from 'mongoose';
import Model from '../model';
import config from '../../../config';

const { dbUser, dbPassword, dbName, dbHost } = config;

// MongoDB URI
const uri =`mongodb+srv://${dbUser}:${dbPassword}@${dbHost}/${dbName}?retryWrites=true&w=majority`;

// MongoDB Connection
db.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error(`There was an error: ${error.name}`, error));
interface Message {
  user: string,
  message: string,
  date: Date,
};

// Add a message
const addMessage = (message: Message): void => {
  const myMessage = new Model(message);
  myMessage.save();
};

// get all messages
const getMessages = async (): Promise<Message[]> => {
  const messages: Message[] = await Model.find();
  return messages;
};

export = {
  add: addMessage,
  list: getMessages,
  // get -- get a specific message
  // update --update a message
  // delete -- delete a message
};