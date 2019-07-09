const should = require('chai').should();
const expect = require('chai').expect;
const assert = require('chai').assert;

const randomStr = require('./index.js');

describe("Test for Random Numbers", () => {
    it("Should return the random number", (done) => {
        // expect(randomStr(10).length).to.equal(10);
        // expect(randomStr(0).length).to.equal(0);
        // expect(randomStr(100000).length).to.equal(100000);
        expect(randomStr("alphabet",10).match("[a-z]{10}")!=null).to.equal(true);
        expect(randomStr("alphabet",100,true).match("[A-Z]{100}")!=null).to.equal(true);
        expect(randomStr("number",50).match("[0-9]{50}")!=null).to.equal(true);
        expect(randomStr("string",25).match("[a-z0-9]{25}")!=null).to.equal(true);
        expect(randomStr("string",25,true).match("[A-Z0-9]{25}")!=null).to.equal(true);
        expect(randomStr("asciimix",30).match("[!-~]{30}")!=null).to.equal(true);
       //TODO: Test for special 
        done();
    });

    it("Should fail and throw errors", (done) => {
        // Fill it later LOL
        done();
    })
})