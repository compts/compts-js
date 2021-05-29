const {templateValue} = require("../../dist/node.cjs");
const assert = require("assert");

describe('templateValue method', function () {

    it('check if Template functionality', function () {

        assert.strictEqual(templateValue("<!- test !>", {"test": 11}), "11");

    });


});
