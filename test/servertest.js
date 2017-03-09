
var http = require('http');
var assert = require('assert');

var server = require('../app/server.js');

var port = 8989;
var errorPort = 1337;


describe('HTTP Server Test', function() {

    before(function() {
        server.listen(port);
        // error start zelf invullen
    });


    after(function() {
        server.close();
        // error close zelf invullen
    });

    describe('HTTP test', function() {

        it('should be Hello, Information Engineers!', function(done) {

            http.get('http://127.0.0.1:8989', function(response) {
                assert.equal(response.statusCode, 200);

                var body = '';
                response.on('data', function(d) {
                    body += d;
                });

                response.on('end', function() {
                    assert.equal(body, 'Hello, Information Engineers!');
                    done();
                });

            });

        });

    });



});


// schrijf zelf binnen de test hierboven een server Error test kijk naar het voorbeeld hierboven en denk na dat je alleen maar de error hoeft te testen
