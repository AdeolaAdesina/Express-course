const express = require('express');

const app = express();
const PORT = 3001;

app.listen(PORT, () => console.log(`Running express server on Port ${PORT}!`))

//But we don't have any route defined, we cannot visit any route currently.const express = require('express');

const app = express();
const PORT = 3001;

app.listen(PORT, () => console.log(`Running express server on Port ${PORT}!`))

//But we don't have any route defined, we cannot visit any route currently.

app.get('/groceries', (req, res) => {
    res.send([
        {
        item: 'milk',
        quantity: 2,
        },
        {
        item: 'cereal',
        quantity: 4,
        },
    ]);
}); 
