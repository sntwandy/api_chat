/**
 *
 */
import store from '../store';
import { User } from '../../../utils/interfaces';

// Add a user logic
const addUser = async (user: User): Promise<User> => {
  try {
    !user && Promise.reject('Invalid user');
    const userAdded: User = await store.add(user);
    return userAdded;
  } catch (error) {
    throw new Error(error);
  };
};

export = {
  addUser,
};
