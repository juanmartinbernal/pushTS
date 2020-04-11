//var admin = require("firebase-admin");
import * as admin from 'firebase-admin';

var serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://testinke-a112c.firebaseio.com',
});

var device_token =
  'eSQhdyQ7UuU:APA91bGlYdyr-af80L_EnONQEFJRgwtS6Hi06tjhTcMnsxdEHYTuXR0Rb8TyXWu_cSnnhB5mCFHLKyQnhq9wKIQ1HCHnGiPHrmjsSQoPVPGiETIeukzIS4N09ByysYF7xcIiRIEDs128';

var registrationToken = device_token;

var message = {
  notification: {
    title: 'Title juan of your push notification',
    body: 'Body of your push notification khbhjbhbsssssss',
  },
  data: {
    score: '850',
    time: '2:45',
  },
  token: registrationToken,
};

// Send a message to the device corresponding to the provided
// registration token.
admin
  .messaging()
  .send(message)
  .then((response) => {
    // Response is a message ID string.
    console.log('Successfully sent message:', response);
  })
  .catch((error) => {
    console.log('Error sending message:', error);
  });

//envio a varios dispositivos
// Create a list containing up to 500 registration tokens.
// These registration tokens come from the client FCM SDKs.
/*const registrationTokens = [
  'YOUR_REGISTRATION_TOKEN_1',
  // …
  'YOUR_REGISTRATION_TOKEN_N',
];

const message = {
  data: {score: '850', time: '2:45'},
  tokens: registrationTokens,
}

admin.messaging().sendMulticast(message)
  .then((response) => {
    console.log(response.successCount + ' messages were sent successfully');*/
