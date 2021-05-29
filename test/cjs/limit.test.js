const {limit} = require("../../dist/node.cjs");
const assert = require("assert");

const eight=8,
    five=5,
    four=4,
    nine=9,
    one =1,
    seven=7,
    six=6,
    ten=10,
    three=3,
    two =2;

describe('limit method', function () {

    it('check if value exist', function () {


        assert.deepStrictEqual(limit([
            one,
            two,
            three,
            four,
            five,
            six,
            seven,
            eight,
            nine,
            ten
        ], one), {
            '1': 2,
            '2': 3,
            '3': 4,
            '4': 5,
            '5': 6,
            '6': 7,
            '7': 8,
            '8': 9,
            '9': 10
        });

        assert.deepStrictEqual(limit([
            one,
            two,
            three,
            four,
            five,
            six,
            seven,
            eight,
            nine,
            ten
        ], one, five), {'1': 2,
            '2': 3,
            '3': 4,
            '4': 5,
            '5': 6});


    });


});


