const express = require('express');
const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log(`Express server is live in localhost:3000`);
});

let fruit = [
    {
        "id": 1,
        "fruit": "Apple",
        "size": "Large",
        "color": "Red"
    }
];

app.get('/fruit', (req, res) => {
    res.header('Content-Type', 'application/json');
    res.status(200);
    res.json(fruit);
});

app.post('/fruit', (req, res) => {
    let newFruit = req.body;
    fruit.push(newFruit);
    res.send(`Details of the new fruit: fruit: ${newFruit.fruit}, size: ${newFruit.size}, color: ${newFruit.color}`);

});

app.put('/fruit/:id', (req, res) => {
    let id = req.params.id;
    let newFruit = req.body;
    fruit[id] = newFruit;
    res.send(`Updated fruit details: fruit: ${newFruit.fruit}, size: ${newFruit.size}, color: ${newFruit.color}`);
});

app.delete('/fruit/:id', (req, res) => {
    let id = req.params.id;
    fruit.splice(id, 1);
    res.send(`Details of choesen fruit to delete: fruit: ${newFruit.fruit}, size: ${newFruit.size}, color: ${newFruit.color}`);
});