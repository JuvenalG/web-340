var http = require("http");

var express = require("express");

var path = require("path");

var app = express();

app.set("views", path.resolve(__dirname, "views"));

app.set("view engine" , "ejs");

app.get("/", function(request, response){
    response.render("index", {
        firstName: "Juvenal",
        lastName: "Gonzalez",
        address: "123 Elm St Stockton, CA, 95210"
    });

});



http.createServer(app).listen(8080, function(){
    console.log("EJS-Views app started on port 8080.");
});

