
import {dom} from "../../../src/module/index.esm";
import {JSDOM} from "jsdom";
import assert from 'assert';

describe('ESM:tagName method', function () {

    const dom1 = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);

    it('check if element tagname', function () {

        assert.strictEqual(dom(dom1.window.document.querySelector("p")).tagName(), 'P');

    });


});
