/*
============================================
; Title:  Exercise 2.4
; Author: Richard Krasso
; Date:   August 16 2020
; Modified By: Juvenal Gonzalez
; Description: create a server that outputs html using an esj file
;===========================================
*/

const header = require('/users/mrjuv/bu-webdev/web-340/gonzalez-header');
console.log(header.display("Juvenal", "Gonzalez", "Exercise 2.4"));
//link to http module 
var http = require("http");
//link to express module
var express = require("express");
//link to path method which defines endpoints
var path = require("path");
//applies express funtions to a variable
var app = express();
//sets the path to the views folder
app.set("views", path.resolve(__dirname, "views"));
//makes sure that ejs is initiated
app.set("view engine" , "ejs");
//gets index file and passes ejs through which 
//ensures that html can be used
app.get("/", function(request, response){
    response.render("index", {
        firstName: "Juvenal",
        lastName: "Gonzalez",
        address: "123 Elm St Stockton, CA, 95210"
    });

});


//starts server on port 8080 with output to confirm
http.createServer(app).listen(8080, function(){
    console.log("EJS-Views app started on port 8080.");
});

