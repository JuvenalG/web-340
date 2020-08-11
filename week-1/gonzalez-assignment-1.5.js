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

var http = require("http");

function processRequest(req, res) {

var body = "Hey I'm in your browser!!";

    var contentLength = body.length;

    res.writeHead(200, {

        'Content-Length': contentLength,

        'Content-Type': 'text/plain'

    });

    res.end(body);

}

var s = http.createServer(processRequest);

s.listen(8080);