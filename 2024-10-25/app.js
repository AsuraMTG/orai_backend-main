const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.json());
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/', (req, res) => {
    res.send('Hello, world');
});

app.post('/fruit', (req, res) => {
    console.log(req.body);
    res.send('A: ' + JSON.stringify(req.body));
});



app.listen(PORT, () => {
    console.log(`Express server is live in localhost:${PORT}`);
});

/*
app.use(cors({origin : 'https://localhost:3000'}));
const fs = require('fs'); 
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));


const cors = require('cors');
*/