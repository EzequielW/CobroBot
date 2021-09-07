const admin = require("firebase-admin");
const serviceAccount = require('./cafetero-surk-key.json');

module.exports = admin.initializeApp({ credential: admin.credential.cert(serviceAccount)});