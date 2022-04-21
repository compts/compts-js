const {dom} = require("../../../dist/cjs/src/module/index.esm");
const {JSDOM} =require("jsdom");

const assert = require('assert');

describe('CJS:tagName method', function () {

    const dom1 = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);

    it('check if element tagname', function () {

        assert.strictEqual(dom(dom1.window.document.querySelector("p")).tagName(), 'P');

    });


});
