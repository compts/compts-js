
import {toArray} from "../../dist/node.es";
import assert from 'assert';

const ten=10;

describe('toArray method', function () {

    it('check if value exist', function () {

        assert.deepStrictEqual(toArray(ten), [ten]);
        assert.deepStrictEqual(toArray([ten]), [ten]);

    });


});
