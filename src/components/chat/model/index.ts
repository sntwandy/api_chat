/**
 *
 */
import { Schema, model, Document } from 'mongoose';

const mySchema = new Schema({
  users: [
    {
      type: Schema.Types.ObjectId,
      ref: 'ChatUsers'
    }
  ] },
  { collection: 'Chats' },
);

interface Chat extends Document {
  users: [string]
}

const myModel = model<Chat>('Chats', mySchema);

export default myModel;
