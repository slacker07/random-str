const should = require('chai').should();
const expect = require('chai').expect;
const assert = require('chai').assert;

const randomStr = require('./index.js');

describe("Test for Random Data Generator", () => {
    it("Should return the Random Alphabets", (done) => {
        expect(randomStr("alphabet", 10).match("[a-z]{10}")!=null).to.equal(true);
        expect(randomStr("alphabet", 100, true).match("[A-Z]{100}")!=null).to.equal(true);
        expect(randomStr("alphabet").match("[a-z]") != null).to.equal(true);
        done();
    });

    it('Should return random numbers', (done) => {
        expect(randomStr("number", 50).match("[0-9]{50}") != null).to.equal(true);
        expect(randomStr("number").match("[0-9]") != null).to.equal(true);
        expect(randomStr("number", 19).match("[0-9]{19}") != null).to.equal(true);
        done();
    });

    it('should return random strings', (done) => {
        expect(randomStr("string", 25).match("[a-z0-9]{25}")!=null).to.equal(true);
        expect(randomStr("string", 25).match("[a-z0-9]{25}")!=null).to.equal(true);
        expect(randomStr("string", 25, true).match("[A-Z0-9]{25}")!=null).to.equal(true);
        done();
    });

    it('should return random AsciiMix', (done) => {
               expect(randomStr("asciimix", 30).match("[!-~]{30}")!=null).to.equal(true);
        expect(randomStr("asciimix", 30).match("[!-~]{30}")!=null).to.equal(true);
        expect(randomStr("asciimix", 30).match("[!-~]{30}")!=null).to.equal(true);
        done();
    })

    it('should return random Special Character', (done) => {
        expect(randomStr("special", 56).match('[!@#$%^&*(),.?":{}|<>]{56}') != null).to.equal(true);
        expect(randomStr("special", 12).match('[!@#$%^&*(),.?":{}|<>]{12}') != null).to.equal(true);
        expect(randomStr("special", 100).match('[!@#$%^&*(),.?":{}|<>]{100}') != null).to.equal(true);;
        done();
    })
})

describe('Test for random data generate fails', () => {
    it('should fail to return alphabet', (done) => {
        // expect(randomStr('l'))
        done();
    })
})