

var http = require('http');
var assert = require('assert');

var server = require('./app/server.js');

//run dit script daarna:

// open je browser en kijk op http://localhost:8989
server.listen(8989);


// open je browser en kijk op http://localhost:1337
server.errorListen(1337);
