
import {dom} from "../../../dist/node.es";
import {JSDOM} from "jsdom";
import assert from 'assert';

describe('tagName method', function () {

    const dom1 = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);

    it('check if element tagname', function () {

        assert.strictEqual(dom(dom1.window.document.querySelector("p")).tagName(), 'P');

    });


});
