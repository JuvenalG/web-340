/*
============================================
; Title:  Exercise 2.3
; Author: Richard Krasso
; Date:   August 16 2020
; Modified By: Juvenal Gonzalez
; Description: Create a web server that handles a bad request
: and routes url messages
;===========================================
*/

const header = require('/users/mrjuv/bu-webdev/web-340/gonzalez-header');
console.log(header.display("Juvenal", "Gonzalez", "Exercise 2.3"));

//links express module using require keyword
var express = require('express');
//allows http properties to be accessible
var http = require('http');
//creates variable that holds express properties
var app = express();

//route intercepters that catch url messages and outputs a response
app.get("/", function(req, res){
    res.end("Welcome to the homepage.\n");
});

app.get("/about", function(req, res){
    res.end("Welcome to the about page.\n");
});

app.get("/contact", function(req, res){
    res.end("Welcome to the contact page.\n");
});
//when any url request that has not been created is called
//this error code will be outputted
app.use(function(req, res){
    res.statsCode = 404;
    res.end("404!\n");
});
//initiates a server on port 3000 that uses the above methods
http.createServer(app).listen(3000, function() {
    console.log("Application started on port %s", 3000);
});