const express = require('express');
const app = express();
app.use(express.json()); // JSON típusú adatok fogadásához
const mysql = require('mysql2');
const { Connection } = require('mysql2/typings/mysql/lib/Connection');
const connection = mysql.createConnection({
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "",
    database: "pizza"
});
connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return; // Ha hiba van, akkor kilépünk a programból
    }
    console.log('Kapcsolódva az adatbázishoz.');
});
//-- Minden vevő lekérdezése
app.get('/vevo', (req, res) => {
    let sql = 'SELECT vazon,vnev,vcim FROM vevo';
    connection.query(sql, function(err, rows) {
        if (err) {
            console.error(err);
            res.status(500).send('Adatbázis hiba történt.');
            return; // Ha hiba van, akkor kilépünk a programból
        }
        res.send(rows);
    }); 
});
//-- egy vevő lekérdezése
app.get('/vevo/:id', (req, res) => {
    let id = req.params.id;
    let sql = 'SELECT vazon,vnev,vcim FROM vevo WHERE vazon = ?';
    let sqlParams = [id];
    connection.query(sql, sqlParams, function(err, rows) {
        if (err) {
            console.error(err);
            res.status(500).send('Adatbázis hiba történt.');
            return; // Ha hiba van, akkor kilépő a programból
        }
        res.send(rows);
    });
})
//-- új vevő felvétele
app.post('/vevo', (req, res) => {
    let uj = req.body;
    let sql = 'INSERT INTO vevo (vazon, vnev, vcim) VALUES (NULL,?,?)'; //-- vazon autoincrement!
    let sqlParams = [uj.vnev, uj.vcim];
    connection.query(sql, sqlParams, function(err, rows) {
        if (err) {
            console.error(err);
            res.status(500).send('Adatbázis hiba történt.');
            return; // Ha hiba van, akkor kilépő a programból
        }
        let lastInsertId = rows.insertId;
        res.status(201).send(lastInsertId, rows.vnev, rows.vcim);
    });
});

app.put('/vevo/:id', function(req, res) {
    let id = req.params.id;
    let uj = req.body;
    let sql = "UPDATE vevo SET vnev = ?, vcim = ? WHERE vazon = ?";
    let sqlParams = [uj.vnev, uj.vcim, id];
    connection.query(sql, sqlParams, function(err, rows) {
        if (err) {
            console.error(err);
            res.status(500).send('Adatbázis hiba történt.');
            return; // Ha hiba van, akkor kilépő a programból
        }
        res.status(201).send(rows);
    });
});



app.listen(3000, () => {
    console.log('A szerver elindult a 3000-es porton.');
});              