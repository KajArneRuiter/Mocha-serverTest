
// basis testen van functies in het bestand app/calculator.js



var assert = require('assert');

var calc = require('../app/calculator.js');

// Dit is de titel van de test
    describe('Calculator Tests', function () {

        // eerst calc test in 1 globale test
        describe('Addition Tests', function () {

            it('returns 1 + 1 = 2', function (done) {
                assert.equal(calc.add(1, 1), 2);
                done();
            });

            it('returns 1 + -1 = 0', function (done) {
                assert.equal(calc.add(1, -1), 0);
                done();
            });

        });

        // tweede calc test in 1 globale test
        describe('Multiplication Tests', function () {

            it('returns 2 * 2 = 4', function (done) {
                assert.equal(calc.mul(2, 2), 4);
                done();
            });

            it('returns 0 * 4 = 4', function (done) {
                assert.equal(calc.mul(2, 2), 4);
                done();

            });

        });

        // derde calc test in 1 globale test
        describe('Modulus Tests', function () {

            it('returns 3 % 2 = 1', function (done) {
                assert.equal(calc.modulus(3, 2), 1);
                done();
            });

            it('returns 18 % 14 = 4', function (done) {
                assert.equal(calc.modulus(18, 14), 4);
                done();

            });

        });

        // en zo kun je alle tests in 1 keer uitvoeren van de calculator functionaliteit.
        // dit is voornamelijk handig in grotere applicaties om het overzicht te bewaren


    });
