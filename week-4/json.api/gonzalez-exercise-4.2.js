/*
============================================
; Title:  Exercise 4.2
; Author: Richard Krasso
; Date:   August 31 2020
; Modified By: Juvenal Gonzalez
; Description: Return JSON object from get request and output the data in the terminal
;===========================================
*/

const header = require('/users/mrjuv/bu-webdev/web-340/gonzalez-header');
console.log(header.display("Juvenal", "Gonzalez", "Exercise 4.2"));

//includes these modules
var express = require('express');
var http = require('http');
var logger = require('morgan');
//apply library to app variable
var app = express();
//logger set up
app.use(logger('dev'));
 //gets data from the entered http url path
app.get("/customer/:id", function(req,res){
    var id = parseInt(req.params.id, 10);
     //set json data fields
    res.json({
        firstName: "Leo",
        lastName: "Tolstoy",
        employeeId: id

    });
});

// starts server on port 3000 and responds with output
http.createServer(app).listen(3000, function() {
    console.log("Application started and listening on port 3000");
});