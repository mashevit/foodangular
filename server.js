var express = require('express')
, app = express()
, server = require('http').createServer(app)
 
var path=require('path');
var bodyParser= require('body-parser');
//, io = require("socket.io").listen(server)
//, npid = require("npid")
//, uuid = require('node-uuid')
//, Room = require('./room.js')
//, _ = require('underscore')._;
var morgan     = require("morgan");
app.use(morgan("dev"));
//app.set('port', process.env.OPENSHIFT_NODEJS_PORT || 3000);
app.set('ipaddr', process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1");
//app.use(express.bodyParser());
//app.use(express.methodOverride());
//app.use(express.static(__dirname + '/public'));
////app.use(express.static("/"));
//app.use(express.static(path.join(__dirname, "/")));
// app.use('/components', express.static(__dirname + '/components'));
// app.use('/js', express.static(__dirname + '/js'));
// app.use('/icons', express.static(__dirname + '/icons'));
// app.set('views', __dirname + '/views');
//app.engine('html', require('ejs').renderFile);

//app.use(express.static(__dirname + '/public'));

//app.set('port', process.env.OPENSHIFT_NODEJS_PORT ||  process.env.OPENSHIFT_INTERNAL_PORT || process.env.PORT||4200 || 8080);
///app.set('ip', process.env.OPENSHIFT_NODEJS_IP || process.env.OPENSHIFT_INTERNAL_IP || '127.0.0.1' ||'0.0.0.0');
var rootPath = path.normalize(__dirname);


app.set('port1',4200 );
app.set('ip1', 'localhost');

var express = require('express')
  ,cors = require('cors')
  , app = express();
//app.user();
app.use(bodyParser.json());
// after the code that uses bodyParser and other cool stuff
var originsWhitelist = [
  'http://127.0.0.1:8081',
  'http://localhost:4200',      //this is my front-end url for development
   'http://www.myproductionurl.com'
];
var corsOptions = {
  origin: function(origin, callback){
        var isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
        callback(null, isWhitelisted);
  },
  credentials:true
}
//here is the magic
app.use(cors(corsOptions));

app.use(express.static("./"));



app.get('/', function(req, res){
    res.sendFile( rootPath +  '/index.html');
});
app.listen(4200, 'localhost', function(){
    console.log("Express server listening on1 " + app.get('ip1') + ":" + app.get('port1'));
  });


  
// /* Store process-id (as priviledged user) */
// try {
//     npid.create('/var/run/advanced-chat.pid', true);
// } catch (err) {
//     console.log(err);
//     //process.exit(1);
// }