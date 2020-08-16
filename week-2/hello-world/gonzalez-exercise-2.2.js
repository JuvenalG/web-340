/*
============================================
; Title:  Exercise 2.2
; Author: Richard Krasso
; Date:   August 16 2020
; Modified By: Juvenal Gonzalez
; Description: Create a web server that outputs hello world
;===========================================
*/

const header = require('/users/mrjuv/bu-webdev/web-340/gonzalez-header');
console.log(header.display("Juvenal", "Gonzalez", "Exercise 2.2"));
//links express package using require keyword
var express = require('express');
var http = require('http');
//creates app that holds express package
var app = express();
//implements use method that outputs Hello world 
app.use(function(req, res)
{
    console.log("In comes a request to $s" , req.url);

    res.end("Hello World\n");
})
//starts server on port 8080 and outputs message to confirm
http.createServer(app).listen(8080, function()
{
    console.log("Application started on port %2", 8080);
});