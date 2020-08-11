/*
============================================
; Title:  Exercise 1.4
; Author: Juvenal gonzalez
; Date:   August 10 2020
; Modified By: Juvenal Gonzalez
; Description: Create a variable that is used to parse a URL's protocol, domain, and query
;===========================================
*/
//initiales a url variable that links the URL module in the node.js library 
var url = require('url');
//parses the url link into a variable
var parsedURL = url.parse('http://www.example.com/profile?name=juvenal');
//outputs the protocol, domain, and query
console.log(parsedURL.protocol);
console.log(parsedURL.host);
console.log(parsedURL.query);