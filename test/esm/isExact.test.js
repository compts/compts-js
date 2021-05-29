
import {isExact} from "../../dist/node.es";
import assert from 'assert';

describe('isExact method', function () {

    it('check if json key exist', function () {

        assert.strictEqual(isExact({"test": 11,
            "test2": 11}, {"test2": 11}, true), true);

    });


});
