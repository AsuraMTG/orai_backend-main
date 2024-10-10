/*vevok nyilvantartasa*/

const port = 3000;
const express = require('express');
const app = express();
app.use(express.json());
let vevok = [
    { id: 0, nev: 'Józsi', kor: 32, foglalkozas: 'futár' }
];

app.get('/', (req, res) => {
    res.header('Content-Type', 'text/html; charset=utf-8');
    res.status(201);
    res.send('Helló Express!');
});

// osszes vevo lekerdezese
app.get('/vevok', (req, res) => {
    res.header('Content-Type', 'application/json');
    res.status(200);
    res.json(vevok);
});

// uj vevo letrehozasa
app.post('/vevok', (req, res) => {
    console.log(req.body);
    let ujVev = req.body;
    vevok.push(ujVev);
    res.send(`Az új vévo adatai: v: ${ujVev.nev}, k: ${ujVev.kor}, f: ${ujVev.foglalkozas}`);

});

// vevo modositasa
//{ "id": "2", "nev": "Laci", "kor": "22", "foglalkozas": "asztalos" }
app.put('/vevok/:id', (req, res) => {
    console.log(req.params.id);
    let id = req.params.id;
    let ujVev = req.body;
    vevok[id] = ujVev;
    res.send(`A modosított vevo adatai: v: ${ujVev.nev}, k: ${ujVev.kor}, f: ${ujVev.foglalkozas}`);
});
//-- vevo torlese
app.delete('/vevok/:id', (req, res) => {
    let id = req.params.id;
    vevok.splice(id, 1);
    res.send(`A törlendő vevo adatai: v: ${vevok[id].nev}, k: ${vevok[id].kor}, f: ${vevok[id].foglalkozas}`);
});
app.listen(port, () => {
    console.log(`Express szerver indítva. Port: ${port}`);
});
