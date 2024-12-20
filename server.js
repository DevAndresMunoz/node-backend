const express = require('express');
require('dotenv').config();
const cors = require('cors')
const products = require('./products.js');
const app = express();

app.use(cors({}))

app.get("/products", (req, res) => {
    res.json(products)
})

app.listen(process.env.PORT, () => {
    console.log(`Server running on Port ${process.env.PORT}`)
})