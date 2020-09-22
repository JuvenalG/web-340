//require statements
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");
var mongoose = require("mongoose");
var Employee = require("./models/employee");

// mLab connection
var mongoDB = "mongodb://juvGonz:admin@buwebdev-cluster-1-shard-00-00.saboe.mongodb.net:27017,buwebdev-cluster-1-shard-00-01.saboe.mongodb.net:27017,buwebdev-cluster-1-shard-00-02.saboe.mongodb.net:27017/<dbname>?ssl=true&replicaSet=atlas-8fcbaa-shard-0&authSource=admin&retryWrites=true&w=majority";
mongoose.connect(mongoDB, {

    useMongoClient: true
});

mongoose.Promise = global.Promise;

var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error: "));
db.once("open", function() {
   console.log("Application connected to mLab MongoDB instance");
});

var app = express();
 app.set("views", path.resolve(__dirname,"views"));
 app.set("view engine", "ejs");
 app.use(logger("short"));
//employee model with schema restrictions
 var employee = new Employee({
   firstName: "Bob",
   lastName: "Lezowsky"
});

 app.get("/", function (request, response){
     response.render('index', {
        title: "Home Page"
    });
 });

 http.createServer(app).listen(8080, function (){
    console.log("Application started on port 8080!");
 });
