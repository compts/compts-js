
import {jsonToArray} from "../../dist/node.es";
import assert from 'assert';

describe('jsonToArray method', function () {

    it('check if value exist', function () {

        assert.deepStrictEqual(
            jsonToArray({"a": 1,
                "b": {"asd": {"aa": "bb"}}}, "b:asd"),
            [{"aa": 'bb'}]
        );

    });


});
