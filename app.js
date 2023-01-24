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

/* To list countries for a continent 
app.get('/africanCountry/:country', function(req,resp){
    searchParam = req.params.country;
    console.log(searchParam);
    const countries = cities["Africa"];
    for (country in countries){
        if (country.name==searchParam){
            result = country.name;
        }
    }
    var resultText = JSON.stringify(result)
    resp.send(result)
}) */

app.get('/africanCountry/:country', function(req,resp){
    /*country = req.params.country;*/
    const city = cities["Africa"]["Egypt"];
    resp.send(city);
    /* for (place in countries){
        if (place.name==country){
            result = country.name;
        }
    }
     var resultText = JSON.stringify(result); 
    resp.send(result); */
}) 

/* List cities for a continent */
app.get('/africanCities', function(req, resp){ 
    const city = cities["Africa"];
    /* const citiesText = city[0]["Africa"]; */
    const citiesText = city["South Africa"];
    resp.send(citiesText);
})

/*To list sites for a specific city */
app.get('/sites', function(req, resp){
    const sitesText = Object.keys(sites);
    resp.send(sitesText);
})

module.exports = app;

