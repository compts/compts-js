
const {dom} = require("../../../dist/cjs/src/module/index.esm");
const {JSDOM} =require("jsdom");

const assert = require('assert');

describe('CJS:isDomNull method', function () {

    const dom1 = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);

    it('check if element is null true', function () {

        assert.strictEqual(dom(dom1.window.document.querySelector("p")).isDomNull(), false);

    });

    it('check if element is null false', function () {

        assert.strictEqual(dom(dom1.window.document.querySelector("span")).isDomNull(), true);

    });

});
