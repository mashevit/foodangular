//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/src'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname,'/src/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080;

var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

app.listen(server_port, server_ip_address, function () {

    console.log( "Listening on " + server_ip_address + ", server_port " + server_port  );

});