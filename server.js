
const express = require('express');
const http = require('http')
const path = require('path');
const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/'));
app.use(express.static(__dirname + '/dist/food-angular'));

app.get('/*', function(req,res) {

res.sendFile(path.join(__dirname+'/dist/index.html'));
res.sendFile(path.join(__dirname+'/dist/food-angular/index.html'));
});