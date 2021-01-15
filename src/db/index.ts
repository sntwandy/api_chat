/**
 * Connection to MongoDB
 */

import db from 'mongoose';
import config from '../config';

const { dbUser, dbPassword, dbName, dbHost } = config;

// MongoDB URI
const uri: string =`mongodb+srv://${dbUser}:${dbPassword}@${dbHost}/${dbName}?retryWrites=true&w=majority`;

const connect = (): void => {
  // MongoDB Connection
  db.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.error(`There was an error: ${error.name}`, error));
};

export default connect;