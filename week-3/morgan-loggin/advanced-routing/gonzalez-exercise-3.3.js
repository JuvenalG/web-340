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

app.get("/:productId", function(req,res){
    var productId = parseInt(req.params.productId, 10);

    res.render("index", {
        productId: prdouctId
    });
});

http.createServer(app).listen(3001, function(){
    console.log("Application started and listening on port %s", 3001);
});