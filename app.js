const express = require('express');
const app = express();

const cities = require('./cities.json');
const sites = require('./sites.json');
const comments = require('./comments.json');

const fs = require('fs');

const commentsFile = './comments.json';
app.use(express.json());
const path = require('path');
app.use(express.static(path.join(__dirname, 'client')));

/* Lists most popular cities in a country */
app.get('/country/:continent/:city', function (req, resp) {
    const continent = req.params.continent;
    const city = req.params.city;
    const alldone = cities[continent][city];
    resp.send(alldone);
});

/* Lists most popular sites in a city with descriptions */
app.get('/sites/:city', function (req, resp) {
    const city = req.params.city;
    const result = sites[city];
    resp.send(result);
});

/* Lists and details the comments for a certain site */
app.get('/comments/:site', function (req, resp) {
    const site = req.params.site;
    const respond = comments[site];
    resp.send(respond);
});

/* Adds a comment to a specific site */
app.post('/addComment', function (req, resp) {
    const key = req.body.key;
    const content = req.body.content;
    comments[key].push(content);
    fs.writeFileSync(commentsFile, JSON.stringify(comments));
    resp.send(comments[key]);
});

module.exports = app;
