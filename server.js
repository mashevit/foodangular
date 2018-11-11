'use strict';

var express = require('express');
var app = express();
var path = require('path');
var rootPath = path.normalize(__dirname);
var nodePort = '2009';

app.use(express.static(rootPath));
//console.log(rootPath);
app.use('/node_modules', express.static(rootPath + '/node_modules'))
var ipaddr = process.env.OPENSHIFT_NODEJS_IP || "localhost";
var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8000;

app.get('/', function(req, res){
    res.sendFile(rootPath + 'src/index.html');
});

app.listen(port, ipaddr, function(){
    console.log('Express server listening on port ' + app.get('port'));
  });
console.log(new Date() + ' Listening on port: ' + nodePort);

