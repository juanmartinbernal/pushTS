const { Client } = require('pg');
import { Message } from './Index';

const connectionData = {
  user: 'postgres',
  host: 'localhost',
  database: 'test',
  password: 'sapadm123',
  port: 5432,
};
const client = new Client(connectionData);

client.connect();
client
  .query('SELECT * FROM customers')
  .then((response) => {
    console.log(response.rows[0].device_id);
    sendMessage(response.rows[0].message, response.rows[0].device_id);
    client.end();
  })
  .catch((err) => {
    client.end();
  });

/**
 * sendMessage
 */
function sendMessage(message: string, devideId: string) {
  let recipients: Array<string> = Array();
  recipients.push(devideId);
  let messa = new Message('Title', 'Icon', message, recipients);
  messa.sendMessage();
}
