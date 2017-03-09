
var http = require('http');
var string = "Hello, Information Engineers!";

//kleine server config

var server = http.createServer(function(req, res) {
    res.writeHead(200);
    res.end(string);
});

var errorServer = http.createServer(function(req, res) {
    res.writeHead(404);
    res.end();

});


exports.listen = function(port) {
    console.log('HTTP on: ' + port);
    server.listen(port);
};


exports.close = function() {
    console.log('server closed');
    server.close();
};




exports.errorListen = function(port){
    console.log('Error on: ' + port);
    errorServer.listen(port);
};

exports.errorClose = function() {
    console.log('Error closed');
    errorServer.close();
};

