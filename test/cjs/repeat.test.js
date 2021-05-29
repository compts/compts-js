const {repeat} = require("../../dist/node.cjs");
const assert = require("assert");

const two=2;

describe('repeat method', function () {

    it('check if repetion is correct', function () {

        assert.strictEqual(repeat("as", two), "asas");

    });

});
