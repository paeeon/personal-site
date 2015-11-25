var express = require('express');
var path = require('path');
var morgan = require('morgan');
var app = express();
module.exports = app;

// Morgan being used for logging middleware
app.use(morgan('dev'));

app.get('/', function(req, res){
  // This is an Express method that reads the file in as text, and sends a response back with the correct headers and the content of that file. 
  res.sendFile(path.join(__dirname, '../', './views/index.html'));
});

// Express.static exists for assets that pretty much will never change. 
// Whenever a request for something that has a URI that matches with the /public
// directory (doesn't actually INCLUDE the public directory itself, just 
// everything inside that directory. 
app.use(express.static(path.join(__dirname, '../public')));

app.use(express.static(path.join(__dirname, '../node_modules')));