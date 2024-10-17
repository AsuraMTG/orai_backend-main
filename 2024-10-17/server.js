const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
app.use(cors({origin : 'https://localhost:3000'}));
const fs = require('fs'); 
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

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

app.listen(port, () => {
    console.log(`Express server is live in localhost:${port}`);
});