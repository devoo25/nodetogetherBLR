var port = '8080';
var host = '0.0.0.0';

var express = require('express');
var app = express(); //setting our app to use express package that we have installed.

app.listen(port,host);
console.log("Server is listening...");