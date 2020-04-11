//https://firebase.google.com/docs/cloud-messaging/send-message
var FCM = require('fcm-node')
    
    var serverKey = require('./serviceAccountKey.json') //put the generated private key path here    
    
    var fcm = new FCM(serverKey)
 
    var message = { //this may vary according to the message type (single recipient, multicast, topic, et cetera)
        to: 'eSQhdyQ7UuU:APA91bGlYdyr-af80L_EnONQEFJRgwtS6Hi06tjhTcMnsxdEHYTuXR0Rb8TyXWu_cSnnhB5mCFHLKyQnhq9wKIQ1HCHnGiPHrmjsSQoPVPGiETIeukzIS4N09ByysYF7xcIiRIEDs128',
        
        notification: {
            title: 'Title of your push notification', 
            body: 'Body of your push notification khbhjbhbsssssss' 
        },
        
        data: {  //you can send only notification or only data(or include both)
            my_key: 'my value',
            my_another_key: 'my another value'
        }
    }
    
    fcm.send(message, function(err, response){
        if (err) {
            console.log("Something has gone wrong!")
        } else {
            console.log("Successfully sent with response: ", response)
        }
    })