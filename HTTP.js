/**
 * Created by Supreme_Kaj on 8-3-2017.
 */

var http = require('http');
var assert = require('assert');

var server = require('./app/server.js');

server.listen(8989);

server.errorListen(1337);
