
import {dom} from "../../../dist/node.es";
import {JSDOM} from "jsdom";
import assert from 'assert';

describe('isDomNull method', function () {

    const dom1 = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);

    it('check if element is null true', function () {

        assert.strictEqual(dom(dom1.window.document.querySelector("p")).isDomNull(), false);

    });

    it('check if element is null false', function () {

        assert.strictEqual(dom(dom1.window.document.querySelector("span")).isDomNull(), true);

    });

});
