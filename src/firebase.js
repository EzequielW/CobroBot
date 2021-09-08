const admin = require("firebase-admin");
var credential = '';

try{
    const serviceAccount = require('./cafetero-surk-key.json');
    credential = admin.credential.cert(serviceAccount);
} catch(err){
    credential = admin.credential.applicationDefault();
    console.log(err);
}

module.exports = admin.initializeApp({ credential: credential});