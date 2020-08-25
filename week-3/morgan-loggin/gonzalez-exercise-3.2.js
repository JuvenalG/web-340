/*
============================================
; Title:  Exercise 3.3
; Author: Richard Krasso
; Date:   August 24 2020
; Modified By: Juvenal Gonzalez
; Description: Create a web server that logs request 
; which outputs a track recored of traffic to the url
;===========================================
*/

const header = require('/users/mrjuv/bu-webdev/web-340/gonzalez-header');
console.log(header.display("Juvenal", "Gonzalez", "Exercise 3.2"));

//includes these modules in the application
var express = require('express');
var http = require('http');
var path = require('path');
//includes logger library that outputs traffic to url and lists requests
var logger = require('morgan');
//applies the express library to the app variable
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