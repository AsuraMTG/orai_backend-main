const express = require("express");
const app = express();
const mysql = require("mysql2");
app.use(express.json())
const connection = mysql.createConnection({
    host: "127.0.0.1",
    port: 3307,
    user: "root",
    password: "",
    database: "pizza"
});

connection.connect(function (err) {
    if (err) {
        console.log("Adatbázis kapcsolódás sikertelen: ", err.message);
        return;
    };
    console.log("Adatbázis kapcsolódás sikeres!");
});

// minden vevo lekerdezese
app.get('/vevo', function (req, res){
    let sqlStatement = "SELECT vazon,vnev,vcim FROM vevo";
    connection.query(sqlStatement, function (err, rows) {
        if (err) {
            console.error(err);
            res.status(500).send('Adatbazis hiba tortent');
            return;
        };
        res.send(rows);
    });
});

app.get('/vevo/:id', function (req, res){
    let id = req.params.id;
    let sql = "SELECT vazon,vnev,vcim FROM vevo WHERE vazon = ?";
    let sqlParams = [id, 'vnev'];
    connection.query(sql, sqlParams, function (err, rows){
        if (err) {
            console.error(err);
            res.status(500).send('Adatbazis hiba tortent');
            return;
        };
        res.send(rows);
    });
});

app.post('/vevo', function (req, res){
    let uj = req.body;
    let sql = 'INSERT INTO vevo (vazon, vnev, vcim) VALUES (NULL,?,?)';
    let sqlParams = [uj.vnev, uj.vcim];
    connection.query(sql, sqlParams, function (err, rows){
        if (err) {
            console.error(err);
            res.status(500).send('Adatbazis hiba tortent');
            return;
        };
        res.send(rows);
    });
});

app.listen(3000, () => {
    console.log(`Express server is live in localhost: 3000`);
});