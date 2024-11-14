const express = require('express');

const app = express();

const path = require('path');

const mysql = require('mysql2');

require('dotenv').config();

const connect = require(path.join(__dirname, 'db.js'));

const connection = connect();

app.use(express.json());

if (connection) 
{
    console.log('Connected to the MySQL server.');
}

app.use(express.json());

app.get('/rendeles/:id', (req, res) => {
    let id = req.params.id;
    let sql = "SELECT pizza.pnev, pizza.par, tetel.db FROM pizza NATURAL JOIN tetel WHERE tetel.razon = ?";
    connection.query(sql, [id], function (err, results) { 
        if (err) {
            console.error(err.message, err.code); 
            res.status(500).send('Database error');
        } else {
            res.status(201).send(results);
        }
    });

});

app.post('/rendeles', (req, res) => {
    const data = req.body;
    let sql = "INSERT INTO `rendeles` (`razon`, `vazon`, `fazon`, `idopont`) VALUES (NULL, ?, ?, current_timestamp())";
    connection.query(sql, [data.vazon, data.fazon], function (err, results) { 
        if (err) {
            console.error(err.message, err.code); 
            res.status(500).send('Database error');
        } else {
            const rendelesId = results.insertId;
            for (let index = 0; index < data.items.length; index++) {
                const element = data.items[index];
                sql = "INSERT INTO `tetel` (`razon`, `pazon`, `db`) VALUES (?, ?, ?)";
                connection.query(sql, [rendelesId, element.pazon, element.db], function (err, results) { 
                    if (err) {
                        console.error(err.message, err.code); 
                        res.status(500).send('Database error');
                    } 
                    res.status(201).send(results);
                });
            }
            res.status(201).send(results);
        }
    });
});



app.listen(3000, () => {
    console.log('A szerver elindult a http://localhost:3000 porton.');
});