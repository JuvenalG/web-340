/*
============================================
; Title:  Assignment 5.2
; Author: Richard Krasso
; Date:   September 8 2020
; Modified By: Juvenal Gonzalez
; Description: Create a web server that passes an array and
; is outputted using EJS for loop 
;===========================================
*/

const header = require('/users/mrjuv/bu-webdev/web-340/gonzalez-header');
console.log(header.display("Juvenal", "Gonzalez", "Assignment 5.2"));

//require statements
var express = require("express");
var http = require('http');
var path = require("path");
//app methods and set path to views folder
var app = express();
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
//composer object
var composers = [
    "Bach",
    "Mozart",
    "Beethoven",
    "Verdi",
]


//routes
app.get("/", function (req, res){
    res.render("index", {
        names: composers
    });
});

http.createServer(app).listen(3000, function () {
    console.log("Application started and listening on port 3000")
});