const {count} = require("../../dist/node.cjs");
const assert = require("assert");

const one =1;
const zero =0;

describe('count method', function () {

    it('check if value exist', function () {


        assert.deepStrictEqual(count({"s1": 1}), one);
        assert.deepStrictEqual(count([one]), one);

    });

    it('check JSON value if empty', function () {

        assert.deepStrictEqual(count([]), zero);
        assert.deepStrictEqual(count({}, true), zero);

    });

});


