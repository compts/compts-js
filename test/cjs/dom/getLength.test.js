
const {dom} = require("../../../dist/cjs/src/module/index.esm");
const {JSDOM} =require("jsdom");

const assert = require('assert');

describe('CJS:getLength method', function () {

    const dom1 = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);

    it('check if element count equal to 1', function () {

        assert.strictEqual(dom(dom1.window.document.querySelector("p")).getLength(), 1);

    });

    it('check if element count equal to 0', function () {

        assert.strictEqual(dom(dom1.window.document.querySelector("span")).getLength(), 0);

    });

});
