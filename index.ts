import gcm = require('node-gcm');

var server_token =
  'AAAAn-XD0rE:APA91bFLJjjvrMdnRlgRXSCXrZksBMjo0fUERxByYRrwuxN8UyLtI7AirMt8OSIKx8RJ48WvxcaHHlbi5EvWjyzLlkiekxK-h7Mc61uUfs7-3AcXxnAYxIyESw8YihOsXMIAao6z4auH'; //"eSQhdyQ7UuU:APA91bGlYdyr-af80L_EnONQEFJRgwtS6Hi06tjhTcMnsxdEHYTuXR0Rb8TyXWu_cSnnhB5mCFHLKyQnhq9wKIQ1HCHnGiPHrmjsSQoPVPGiETIeukzIS4N09ByysYF7xcIiRIEDs128";
let sender = new gcm.Sender(server_token);

var device_token =
  'eSQhdyQ7UuU:APA91bGlYdyr-af80L_EnONQEFJRgwtS6Hi06tjhTcMnsxdEHYTuXR0Rb8TyXWu_cSnnhB5mCFHLKyQnhq9wKIQ1HCHnGiPHrmjsSQoPVPGiETIeukzIS4N09ByysYF7xcIiRIEDs128';

/*let message = new gcm.Message({
    notification: {
        title: "Test notification hola",
        icon: "Icon name",
        body: "Here is a notification's"
    },
});


let recipients = [device_token];// gcm.IRecipient = { to: "/topics/all" };
sender.sendNoRetry(message,recipients, (err, response) => {
  if (err) console.error(err);
  else console.log(response);
});*/

export class Message {
  title: string;
  icon: string;
  body: string;
  recipients: string[];

  constructor(title: string, icon: string, body: string, recipients: string[]) {
    this.title = title;
    this.icon = icon;
    this.body = body;
    this.recipients = recipients;
  }
  public sendMessage() {
    let message = new gcm.Message({
      notification: {
        title: `${this.title}`,
        icon: `${this.icon}`,
        body: `${this.body}`
      }
    });

    //let recipients = [device_token];// gcm.IRecipient = { to: "/topics/all" };
    sender.sendNoRetry(message, `${this.recipients}`, (err, response) => {
      if (err) console.error(err);
      else console.log(response);
    });
  }
}
//let recipients = [device_token];
/*let recipients: Array<string> = Array();
recipients.push(device_token);

let message = new Message('hola devel', 'icon', 'body', recipients);
message.sendMessage();*/
