/**
 * Created by Supreme_Kaj on 8-3-2017.
 */


var http = require('http');
var assert = require('assert');

var server = require('../app/server.js');

var port = 8989;
var errorPort = 1337;

exports.servertest =




describe('HTTP Server Test', function() {

    before(function() {
        server.listen(port);
        server.errorListen(errorPort);
    });


    after(function() {
        server.close();
        server.errorClose();
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

    describe('Error Test', function() {

        it('should be Error 404 like page', function(done) {

            http.get('http://127.0.0.1:1337', function(response) {
                // Assert the status code.
                assert.equal(response.statusCode, 404);

                done();

                });

            });

        });



});