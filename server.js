//Install express server
const express = require('express');
const path = require('path');

//const app = express();
var express = require('express');
var app = express();
var server = require('http').Server(app);
// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/food-angular'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/food-angular/index.html'));
});
var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'
 
// server.listen(server_port, server_ip_address, function () {
//   console.log( "Listening on " + server_ip_address + ", port " + server_port )
// });
// Start the app by listening on the default Heroku port


server.listen(process.env.OPENSHIFT_NODEJS_PORT, process.env.OPENSHIFT_NODEJS_IP);
//app.listen(process.env.OPENSHIFT_NODEJS_PORT || 8080);