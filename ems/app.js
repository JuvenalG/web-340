//require statements
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");
var mongoose = require("mongoose");
var Employee = require("./models/employee");//schema
var helmet = require("helmet");//xss require statement(helmet defends from xss)
var bodyParser = require("body-parser");//required csurf dependencies (body and cookie)
var cookieParser = require("cookie-parser");
var csrf = require("csurf");
const { request } = require("express");
//provides setup of csrf protection
var csrfProtection = csrf({cookie: true});

// mLab connection
var mongoDB = "mongodb://juvGonz:admin@buwebdev-cluster-1-shard-00-00.saboe.mongodb.net:27017,buwebdev-cluster-1-shard-00-01.saboe.mongodb.net:27017,buwebdev-cluster-1-shard-00-02.saboe.mongodb.net:27017/ems?ssl=true&replicaSet=atlas-8fcbaa-shard-0&authSource=admin&retryWrites=true&w=majority";
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
//helmet use statement
app.use(helmet.xssFilter());
//use statements for body/cookie/csrf
app.use(bodyParser.urlencoded({
   extended: true
}));
app.use(cookieParser());
app.use(csrfProtection);
app.use(function(request, response, next) {
   var token = request.csrfToken();
   response.cookie('XSRF-TOKEN', token);
   response.locals.csrfToken = token;
   next();
});
//home index get call
 app.get("/", function (request, response){
     response.render('index', {
        title: "Home Page",
        message: "Home Page"
    });
 });
/*
 app.get("/", function(request, response) {
   response.render("index", {
       message: "XSS Prevention Example"
   });
});*/
//get function calls new ejs page
app.get("/new", function(request, response) {
   response.render("new", {
      title: "New Page",
       message: "New Employee Entry Page"
   });
});

app.get("/list", function(request, response) {
   Employee.find({}, function(error, employee) {
      if (error) throw error;
      response.render("list", {
          title: "Employee List",
          employee: employee
      });
   });
});

app.post("/process", function(request, response) {
   //empty employee object
   var employee = new Employee({
      firstName: "",
      lastName: ""
   });
    //takes input and stores into employee object to be passed to database
    employee.lastName = request.body.lastName;
    employee.firstName = request.body.firstName;
    //save functions stores object to linked database
    employee.save();
   //responds upon successful submission
   console.log(employee.firstName, employee.lastName + " saved successfully!");
   //redirects to new page
   response.redirect("/new");

});




 http.createServer(app).listen(8080, function (){
    console.log("Application started on port 8080!");
 });
