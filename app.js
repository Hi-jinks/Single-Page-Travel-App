const express = require('express');
const app = express();

const cities = require('./cities.json');
const sites = require('./sites.json');
const comments = require('./comments.json')

const fs = require('fs');

const commentsFile = './comments.json';
app.use(express.json());
const path = require('path');
app.use(express.static(path.join(__dirname, 'client')));

/* Lists most popular cities in an African country*/
app.get('/africanCountry/:country', function(req,resp){
    country = req.params.country;
    const done = cities["Africa"][country];
    resp.send(done); 
}) 

/* Lists most popular sites in a city with descriptions */
app.get('/sites/:city', function(req, resp){
    city = req.params.city;
    const result = sites[city];
    resp.send(result); 
})

/* Lists most popular cities in an Asian country*/
app.get('/asianCountry/:acountry', function(req, resp){
    acountry = req.params.acountry;
    const done = cities["Asia"][acountry]; /* [country]; */
    resp.send(done); 
})

/* Lists most popular cities in a European country*/
app.get('/europeanCountry/:eurocountry', function(req,resp){
    eurocountry = req.params.eurocountry;
    const edone = cities["Europe"][eurocountry];
    resp.send(edone); 
}) 

/* Lists most popular cities in a North American state*/
app.get('/northStates/:nastate', function(req,resp){
    nastate = req.params.nastate;
    const nadone = cities["North America"][nastate];
    resp.send(nadone); 
}) 

/* Lists most popular cities in a South American country*/
app.get('/southAmerica/:sacountry', function(req,resp){
    sacountry = req.params.sacountry;
    const sadone = cities["South America"][sacountry];
    resp.send(sadone); 
}) 

/* Lists most popular cities in an Australian state*/
app.get('/australia/:austate', function(req,resp){
    austate = req.params.austate;
    const audone = cities["Australia"][austate];
    resp.send(audone); 
}) 

/* Lists and details the comments for a certain site */
app.get('/comments/:site', function(req, resp){
    site = req.params.site;
    const respond = comments[site];
    resp.send(respond);
})

/* Adds a comment to a specific site*/
app.post('/addComment', function (req, resp) {
    const key = req.body.key;
    const content =req.body.content;
    comments[key].push(content);
    /*textArray = JSON.parse(siteArray)
    const index = textArray.length; */
    fs.writeFileSync(commentsFile, JSON.stringify(comments));
    resp.send(comments[key]);
});

module.exports = app;

