/*
============================================
; Title:  Exercise 3.3
; Author: Richard Krasso
; Date:   August 24 2020
; Modified By: Juvenal Gonzalez
; Description: Create a web server takes a numerical value using
: a get request and outputing the value from the url into the tag
;===========================================
*/

const header = require('/users/mrjuv/bu-webdev/web-340/gonzalez-header');
console.log(header.display("Juvenal", "Gonzalez", "Exercise 3.3"));

//includes these modules
var express = require('express');
var http = require('http');
var path = require('path');
var logger = require('morgan');
//apply library to app variable
var app = express();
//tell js where to find views directory
app.set('views', path.resolve(__dirname, 'views'));
//set ejs view engine
app.set('view engine', 'ejs');
//logger set up
app.use(logger('dev'));
//expects a numerical value from product id and outputs it into the 
//the tag with the same name
app.get("/:productId", function(req, res){
    var productId = parseInt(req.params.productId, 10);

    res.render("index", {
        productId: productId
    });
});
//starts the server that is constantly running and listening for requests
http.createServer(app).listen(3001, function(){
    console.log("Application started and listening on port %s", 3001);
});