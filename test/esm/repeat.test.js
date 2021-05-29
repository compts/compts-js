
import {repeat} from "../../dist/node.es";
import assert from 'assert';

const two=2;

describe('repeat method', function () {

    it('check if repetion is correct', function () {

        assert.strictEqual(repeat("as", two), "asas");

    });


});
