const express = require('express');
const app = express();

const fs = require('fs');

const cities = require('./cities.json');

app.use(express.json());
const path = require('path');
app.use(express.static(path.join(__dirname, 'client')));

/* To list cities */
app.get('/cities/:continent', function (req, resp) {
    const cityKeys = Object.keys(cities);
    resp.send(cityKeys);
});

module.exports = app;

