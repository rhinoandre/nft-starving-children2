import { MongoClient } from 'mongodb';
import Nullstack from 'nullstack';
import Application from './src/Application';

const context = Nullstack.start(Application);

context.start = async function start() {
  const { secrets } = context;

  const databaseClient = new MongoClient(secrets.databaseHost);
  await databaseClient.connect();
  context.database = await databaseClient.db(secrets.databaseName);
}

export default context;