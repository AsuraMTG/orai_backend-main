const express = require("express"); //-- betölti az express modult
const app = express(); //-- példányosítás
const mysql = require("mysql2"); //-- betölti a mysql2 modult
const connection = mysql.createConnection({ //-- ezekkel az adatokkal kapcsolódik az adatbázishoz
    host: "127.0.0.1",
    user: "root",
    password: "",
    port: 3307,
    database: "pizza",
    encoding: "utf8"
});
connection.connect(function (err) { //-- kapcsolódás
    if (err) {
        console.log("Adatbázis kapcsolódás sikertelen: ", err.message);
        return; //-- ha nem sikerült a kapcsolódás, akkor kilép a program
    }
    console.log("Adatbázis kapcsolódás sikeres!");
});
let sqlStatement = "SELECT * FROM `vevo` WHERE 1;"; //-- lekérdezés
connection.query(sqlStatement, function (err, rows) {
    if (err) {
        console.log("Hiba a lekérdezés során! ", err.message);
        return; //-- ha hiba van a lekérdezésben, akkor kilép a program
    }
    console.log(rows); //-- kiírja a lekérdezés eredményét
});