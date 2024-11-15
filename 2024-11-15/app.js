const express = require('express');  // Express könyvtár importálása
const app = express();  // Express alkalmazás létrehozása

app.use(express.json());  // JSON adatok feldolgozása a kérésekben

const path = require('path');  // A 'path' modul importálása fájlútvonalak kezelésére
app.use(express.static(path.join(__dirname, 'public')));  // A 'public' mappát statikus fájlok kiszolgálására állítja be

app.set('view engine', 'ejs');  // Beállítja az EJS sablonmotor használatát

app.get('/', (req, res) => {   // GET kérés kezelése a gyökér URL-en
    let object2 = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9 };
    let title = "Ciklusok";
    res.render('index', {object2, title});  // Rendereli az 'index' nézetet (EJS sablon)
});

app.listen(3000, () => {  // A szerver indítása a 3000-es porton
    console.log('A szerver elindult a http://localhost:3000 porton.');  // Kiírja, hogy a szerver elindult
});