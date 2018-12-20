
const http = require('http')
const path = require('path');


var express = require('express')
 , app = express()
 , server = require('http').createServer(app)
 
 app.use(express.static(path.join(__dirname, 'dist')));



app.use(express.static(__dirname + '/dist/'));
app.use(express.static(__dirname + '/dist/food-angular'));

const port = process.env.PORT || 3000;
app.set('port', port);

app.get('/*', function(req,res) {
 
    res.sendFile(path.join(__dirname+'/dist/index.html'));
    res.sendFile(path.join(__dirname+'/dist/food-angular/index.html'));



});

const server = http.createServer(app);
server.listen(port, () => console.log('running')); 


 
