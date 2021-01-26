/**
 *
 */
import { Schema, model, Document } from 'mongoose';

const mySchema = new Schema({
  name: String,
  registerDate: Date,
  },
  { collection: 'ChatUsers' },
);

interface User extends Document {
  name: string;
  registerDate: Date;
};

const myModel = model<User>('User', mySchema);

export default myModel;
