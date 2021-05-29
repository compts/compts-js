const {toArray} = require("../../dist/node.cjs");
const assert = require("assert");

const ten=10;

describe('toArray method', function () {

    it('check if value exist', function () {

        assert.deepStrictEqual(toArray(ten), [ten]);
        assert.deepStrictEqual(toArray([ten]), [ten]);

    });


});
