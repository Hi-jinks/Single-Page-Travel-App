const express = require('express');
const app = express();

const fs = require('fs');

const cities = require('./cities.json');
const sites = require('./sites.json');

app.use(express.json());
const path = require('path');
app.use(express.static(path.join(__dirname, 'client')));

/* To list cities 
app.get('/cities/:continent', function (req, resp) {
    const cityText = cities[0]
    resp.send(cityText);
});

app.get('/cities', function(req, resp) {
    const cityKeys = Object.keys(cities);
    resp.send(cityKeys); 
}) */

/* List cities for a continent */
app.get('/cities', function(req, resp){
    const citiesText = Object.keys(cities);
    resp.send(citiesText);
})

/*To list sites for a specific city */
app.get('/sites', function(req, resp){
    const sitesText = Object.keys(sites);
    resp.send(sitesText);
})

module.exports = app;

