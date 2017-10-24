const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);


exports.dialogflowFirebaseFulfillment = functions.https.onRequest((req, res) => {

    console.log('Request headers: ' + JSON.stringify(req.headers));
    console.log('Request body: ' + JSON.stringify(req.body));
    // An action is a string used to identify what needs to be done in fulfillment
    let action = req.body.result.action; 
    // Parameters are any entites that Dialogflow has extracted from the request.
    const parameters = req.body.result.parameters; 

    // Contexts are objects used to track and store conversation state
    const inputContexts = req.body.result.contexts;

    // Get the request source slack/facebook/et
    const requestSource = (req.body.originalRequest) ? req.body.originalRequest.source : undefined;
    

    // Firestore database
    const db = admin.firestore()


    const actionHandlers = {

        'phone.update': () => { 
            const userRef = db.collection('users').doc('test-user');
            const phoneNumber = parameters['phone-number'];

            userRef.update({ phone: phoneNumber }).then(() => {

                const data = formatResponse('No problem. Phone number is updated in Firestore!')
                res.json(data)
            })

        },
        'default': () => {
            const data = formatResponse('Hi. I am the default response from the Cloud Function')
        }

    }

    if (!actionHandlers[action]) {
        action = 'default';
    }

    // Call the handler with action type
    actionHandlers[action]();

});


function formatResponse(text) {
    return {
        speech: text,
        displayText: text,
        data: {},
        contextOut: [],
        source: '',
        followupEvent: {}
    }
}