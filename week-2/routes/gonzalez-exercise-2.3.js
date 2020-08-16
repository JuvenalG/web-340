/*
============================================
; Title:  Exercise 2.3
; Author: Richard Krasso
; Date:   August 10 2020
; Modified By: Juvenal Gonzalez
; Description: Create a web server that sends a message to the browser
;===========================================
*/

const header = require('/gonzalez-header');
console.log(header.display("Juvenal", "Gonzalez", "Exercise 2.3"));


var express = require('express');
var http = require('http');

var app = express();

//route intercepters that catch url messages
app.get("/", function(req, res){
    res.end("Welcome to the homepage.\n");
});

app.get("/about", function(req, res){
    res.end("Welcome to the about page.\n");
});

app.get("/contact", function(req, res){
    res.end("Welcome to the contact page.\n");
});

app.use(function(req, res){
    res.statsCode = 404;
    res.end("404!\n");
});

http.createServer(app).listen(3000, function() {
    console.log("Application started on port %s", 3000);
});