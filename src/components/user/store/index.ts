/**
 *
 */
import Model from '../model';
import db from '../../../db';
import { User } from '../../../utils/interfaces';

// Get DB instance
db();

// Add a user to DB
const addUser = async (user: User): Promise<User> => {
  try {
    const myUser =  new Model(user);
    const userAdded = await myUser.save();
    return userAdded;
  } catch (error) {
    throw new Error(error);
  };
};


export = {
  add: addUser,
};
