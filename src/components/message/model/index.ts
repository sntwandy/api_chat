/**
 *
 */
import { Schema, model, Document } from 'mongoose';

const mySchema: Schema = new Schema(
  {
    user: [
      {
        type: Schema.Types.ObjectId,
        // Make reference to the collection where you want to populate
        ref: 'ChatUsers',
      },
    ],
    message: {
      type: String,
      required: true,
    },
    date: Date,
  },
  { collection: 'ChatApp' }
);

interface Message extends Document {
  user: string;
  message: string;
  date: Date;
}

const myModel = model<Message>('Message', mySchema);

export default myModel;
