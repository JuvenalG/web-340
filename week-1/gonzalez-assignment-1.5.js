/*
============================================
; Title:  Exercise 1.5
; Author: Juvenal gonzalez
; Date:   August 10 2020
; Modified By: Juvenal Gonzalez
; Description: Create a web server that sends a message to the browser
;===========================================
*/

const header = require('../gonzalez-header');
console.log(header.display("Juvenal", "Gonzalez", "Exercise 1.5"));
//inputs http method into a variable so that its properties may be implemented
var http = require("http");
//function that responds with a message once the localhost is called
function processRequest(req, res) {

var body = "Hey I'm in your browser!!";

    var contentLength = body.length;

    res.writeHead(200, {

        'Content-Length': contentLength,

        'Content-Type': 'text/plain'

    });

    res.end(body);

}
//starts the server that is constantly running and processes commands
var s = http.createServer(processRequest);
s.listen(8080);