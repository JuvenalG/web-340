/*
============================================
; Title:  Assignment 6.3
; Author: Richard Krasso
; Date:   September 13 2020
; Modified By: Juvenal Gonzalez
; Description: Create a web server that connects to a Mongo database
;===========================================
*/
const header = require('/users/mrjuv/bu-webdev/web-340/gonzalez-header');
console.log(header.display("Juvenal", "Gonzalez", "Assignment 6.3"));

//require staements that import libraries
var express = require("express");
var http = require("http");
var logger = require("morgan");
var mongoose = require("mongoose");
//mongoDB connection with password in url link also must encode special characters in password to connect
var mongoDB = "mongodb://juvGonz:admin@buwebdev-cluster-1-shard-00-00.saboe.mongodb.net:27017,buwebdev-cluster-1-shard-00-01.saboe.mongodb.net:27017,buwebdev-cluster-1-shard-00-02.saboe.mongodb.net:27017/<dbname>?ssl=true&replicaSet=atlas-8fcbaa-shard-0&authSource=admin&retryWrites=true&w=majority";
mongoose.connect(mongoDB, {
    useMongoClient: true
});
//output for connection or no conncetion to db
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error: "));
db.once("open", function(){
    console.log("Application connected to mLab");
});

var app = express();
app.use(logger("dev"));
//app creation with connection feedback
http.createServer(app).listen(5000, function(){
    console.log("Application started on port 5000");
});