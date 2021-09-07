const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const userRoute = require('./routes/userRoute');

const app = express();

//MIDDLEWARES------------------------------------------
app.use(express.urlencoded({extended:false}))//para q cuando envien un POST desde un form lo entienda
app.use(express.json());//para q entienda objetos json
app.use(morgan('dev'));
app.use(cors());//para q permita q cualquier servidor pida cosas y haga operaciones
app.use(express.static(path.join(__dirname, './views/static')));

//SETTINGS---------------------------------------------
app.set('json spaces', 2);
app.set('view engine', 'pug');
app.set('views', './src/views');

//ROUTES-----------------------------------------------
app.use('/users', userRoute);
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Chatbot'
    });
});

app.listen(process.env.PORT || 8080 , '0.0.0.0', ()=>{
    console.log('Escuchando el puerto', process.env.PORT || 8080);
})