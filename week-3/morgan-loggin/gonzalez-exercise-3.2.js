var express = require('express');
var http = require('http');
var path = require('path');
var logger = require('morgan');

var app = express();
//tell js where to find views directory
app.set('views', path.resolve(__dirname, 'views'));
//set ejs view engine
app.set('view engine', 'ejs');
//logger set up
app.use(logger('dev'));
//get request that listens to request and renders message as output
app.get('/', function(req,res){
    res.render('index', {
        message: "Morgan Logger Example message here!"
    });
});
//intializes server that is listening on port 3000
http.createServer(app).listen(3000, function() {
    console.log('Application started and listening on port %s', 3000)
});