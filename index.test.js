const should = require('chai').should();
const expect = require('chai').expect;
const assert = require('chai').assert;

const randomStr = require('./index.js');

describe("Test for Random Numbers", () => {
    it("Should return the random number", (done) => {
        expect(randomStr(10).length).to.equal(10);
        expect(randomStr(0).length).to.equal(0);
        expect(randomStr(100000).length).to.equal(100000);
        done();
    });

    it("Should fail and throw errors", (done) => {
        // Fill it later LOL
    })
})