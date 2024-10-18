const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
app.use(cors({origin : 'https://localhost:3000'}));
const fs = require('fs'); 
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: false}));
let errors = [];
let data = [];
let success = true;

app.get('*',(req, res, next) => {
    console.log('GET-re lefud a middleware');
    console.log(req);
    next();
});

app.get('/', (req, res) => {
    // -- index.html visszaküldese
    console.log(__dirname);
    res.header('Content-Type', 'text/html; charset=utf-8');
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/login', (req, res) => {
    res.header('Content-Type', 'text/html; charset=utf-8');
    res.sendFile(__dirname + '/public/login.html');
});

app.get('/registration', (req, res) => {
    res.header('Content-Type', 'text/html; charset=utf-8');
    res.sendFile(__dirname + '/public/registration.html');
});

app.post('/registration', (req, res) => {
    res.header('Content-Type', 'application/json');
    let user = req.body;
    if(user.password != user.password2){
        success = false;
        errors.push('A jelszavak nem egyeznek');
    }
    if (user.password.lenght < 5) {
        success = false;
        errors.push('A jelszava hossza 5 karakternél nagyobbnak kell lenni');
    }
    if (success) {
        data.push(user);
        res.status(201).send({success: true, data: data, errors: errors});
    }else{
        res.status(201).send({success: false, data: data, errors: errors});
    }
});

app.listen(port, () => {
    console.log(`Express server is live in localhost:${port}`);
});