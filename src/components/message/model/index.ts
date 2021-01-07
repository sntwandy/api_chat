import { Schema, model } from 'mongoose';


const mySchema: Schema = new Schema({
  user: String,
  message: {
    type: String,
    required: true,
  },
  date: Date,
}, { collection: 'ChatApp' });

const myModel = model('Message', mySchema);

export default myModel;