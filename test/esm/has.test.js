
import {has} from "../../dist/node.es";
import assert from 'assert';

describe('has method', function () {

    it('check if json key does exist', function () {

        assert.strictEqual(has({"as": 1}, "as"), true);

    });


});
