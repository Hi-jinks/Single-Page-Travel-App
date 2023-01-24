const express = require('express');
const app = express();

const fs = require('fs');

const cities = require('./cities.json');
const sites = require('./sites.json');

app.use(express.json());
const path = require('path');
app.use(express.static(path.join(__dirname, 'client')));


app.get('/africanCountry/:country', function(req,resp){
    country = req.params.country;
    const done = cities["Africa"][country];
    resp.send(done); 
}) 

/* Lists sites when a city from above is clicked on */
app.get('/sites/:city', function(req, resp){
    city = req.params.city;
    const result = sites[city];
    resp.send(result); /*SHOULD BE RESULT */
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

app.get('/asianCountry/:acountry', function(req, resp){
    acountry = req.params.acountry;
    const done = cities["Asia"][acountry]; /* [country]; */
    resp.send(done); 
})

app.get('/europeanCountry/:eurocountry', function(req,resp){
    eurocountry = req.params.eurocountry;
    const edone = cities["Europe"][eurocountry];
    resp.send(edone); 
}) 

app.get('/northStates/:nastate', function(req,resp){
    nastate = req.params.nastate;
    const nadone = cities["North America"][nastate];
    resp.send(nadone); 
}) 

app.get('/southAmerica/:sacountry', function(req,resp){
    sacountry = req.params.sacountry;
    const sadone = cities["South America"][sacountry];
    resp.send(sadone); 
}) 

app.get('/australia/:austate', function(req,resp){
    austate = req.params.austate;
    const audone = cities["Australia"][austate];
    resp.send(audone); 
}) 

module.exports = app;

