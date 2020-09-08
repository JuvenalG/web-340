/*
============================================
; Title:  Assignment 5.3
; Author: Richard Krasso
; Date:   September 8 2020
; Modified By: Juvenal Gonzalez
; Description: Create a web server that uses the pug npm language
; to pass a message with a get call
;===========================================
*/

const header = require('/users/mrjuv/bu-webdev/web-340/gonzalez-header');
console.log(header.display("Juvenal", "Gonzalez", "Assignment 5.3"));
//require statements to link the named library
var express = require("express");
var http = require("http");
var path = require("path");
var pug = require("pug");
//apply express to the app variable and set the target directory and tell the server to use the view engine
var app = express();
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "pug");
//add a value to the message identifier to be passed in the get call
app.get("/", function(req,res){
    res.render("index", {
      message: "Whether you think you can, or you think you can't you're right. -Henry Ford"  
    });
});
//startup server on port 8000
http.createServer(app).listen(8000, function() {
    console.log("Server started on port 8000");
});