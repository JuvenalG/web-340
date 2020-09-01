/*
============================================
; Title:  Exercise 4.3
; Author: Richard Krasso
; Date:   August 31 2020
; Modified By: Juvenal Gonzalez
; Description: Return JSON objects that return error codes
;===========================================
*/

const header = require('/users/mrjuv/bu-webdev/web-340/gonzalez-header');
console.log(header.display("Juvenal", "Gonzalez", "Exercise 4.3"));

//includes these modules
var express = require('express');
var http = require('http');
var logger = require('morgan');
//apply library to app variable
var app = express();
//logger set up
app.use(logger('dev'));
 //gets data from the entered http url path and returns the corresponding error code into the terminal
app.get("/not-found", function(req,res){
    res.status(404);

    res.json({
        error: "Resource not found."
    });
});

app.get("/ok", function(req,res){
    res.status(200);

    res.json({
        error: "Page loaded correctly."
    });
});

app.get("/not-implemented", function(req,res){
    res.status(501);

    res.json({
        error: "Not implemented."
    });
});

http.createServer(app).listen(3000, function(){
    console.log("Application started and listening on port 3000");
});