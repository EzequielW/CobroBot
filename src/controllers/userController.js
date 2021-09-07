const fb = require('../firebase');
const db = fb.firestore();
const UserRef = db.collection('users');

const postUser = (req, res) => {
    try{
        UserRef.add({
            name: req.body.name,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber
        });
        res.status(200).send('Usuario agregado correctamente');
    } catch(err) {
        console.log(err);
        res.status(400).send(err);
    }
}

module.exports = { postUser }
