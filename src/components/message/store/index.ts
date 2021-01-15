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

// add a message
const addMessage = (message: Message): void => {
  const myMessage = new Model(message);
  myMessage.save();
};

// get all messages
const getMessages = async (filterUser: any): Promise<Message[]> => {
  try {
    let filter = {};
    if (filterUser !== null) {
      filter = { user: new RegExp(filterUser, 'i') } // not sensitive to mayus
    }
    const messages: Message[] = await Model.find(filter);
    return messages;
  } catch (error) {
    throw new Error(error);
  };
};

// update a message
const updateMessage = async (id: string, message: string): Promise<string> => {
  try {
    const updatedMessage = await Model.findOneAndUpdate(
      { _id: id },
      { message: message },
      { new: true }
    );
    return updatedMessage;
  } catch (error) {
    throw new Error(error);
  }
};

// delete a message
const deleteMessage = async (userId: string): Promise<void> => {
  try {
    await Model.deleteOne({
      _id: userId,
    });
  } catch(error) {
    console.error(error);
    throw new Error('Error internal');
  };
};

export = {
  add: addMessage,
  list: getMessages,
  update: updateMessage,
  remove: deleteMessage,
  // get -- get a specific message
  // update --update a message
  // delete -- delete a message
};