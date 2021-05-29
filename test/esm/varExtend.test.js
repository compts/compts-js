
import {varExtend} from "../../dist/node.es";
import assert from 'assert';

describe('varExtend method', function () {

    it('check if value exist', function () {

        assert.deepStrictEqual(varExtend({"s1": 1}, {"s1": 2}), {"s1": 2});

    });


});
