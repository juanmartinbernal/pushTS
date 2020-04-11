import  Client  = require('pg');
import { Message } from './Index';

const connectionData = {
  user: 'postgres',
  host: 'localhost',
  database: 'test',
  password: 'sapadm123',
  port: 5432,
};
const client = new Client.Client(connectionData);

client.connect();
client
  .query('SELECT * FROM customers')
  .then((response) => {
    response.rows.forEach((element) => {
      let message = element.message;
      let recipients = element.device_id;
      //console.log(result.title);
      //recipients.push(recipients);
      sendMessage(message, recipients);
    });

    client.end();
  })
  .catch((err) => {
    client.end();
  });

/**
 * SendMessage
 * @param message 
 * @param devideId 
 */
function sendMessage(message: string, devideId: string) {
  let recipients: Array<string> = Array();
  recipients.push(devideId);
  let messa = new Message('Title', 'Icon', message, recipients);
  messa.sendMessage();
}
