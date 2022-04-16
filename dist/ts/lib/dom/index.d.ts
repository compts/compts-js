export default ElementTrigger;
/**
 * Class for dom
 *
 * @since 2.0.1
 * @category DOM
 * @param {Object} value The second number in an addition.
 * @returns {Class} Returns the total.
 * @example
 *
 * dom("body")
 * // => ElementTrigger{element: Array(1), parent_child: null}element: Array(1)0: div#idlength: 1__proto__: Array(0)parent_child: null__proto__: Object
 */
declare function ElementTrigger(value: any): Class;
declare class ElementTrigger {
    /**
     * Class for dom
     *
     * @since 2.0.1
     * @category DOM
     * @param {Object} value The second number in an addition.
     * @returns {Class} Returns the total.
     * @example
     *
     * dom("body")
     * // => ElementTrigger{element: Array(1), parent_child: null}element: Array(1)0: div#idlength: 1__proto__: Array(0)parent_child: null__proto__: Object
     */
    constructor(value: any);
    element: any;
    parent_child: any;
    attr: typeof attr;
    css: typeof css;
    fade: typeof fade;
    each: typeof each;
    empty: typeof empty;
    show: typeof show;
    hide: typeof hide;
    getIndexAttr: typeof getIndexAttr;
    getDom: typeof getDom;
    getLength: typeof getLength;
    remove: typeof remove;
    removeAttr: typeof removeAttr;
    tagName: typeof tagName;
    findElem: typeof findElem;
    getSelected: typeof getSelected;
    index: typeof index;
    getScrollPositon: typeof getScrollPositon;
    getElementOffSet: typeof getElementOffSet;
    getElementDimension: typeof getElementDimension;
    getSelectedCount: typeof getSelectedCount;
    getSelectedText: typeof getSelectedText;
    setSelected: typeof setSelected;
    toggleDisplay: typeof toggleDisplay;
    getParent: typeof getParent;
    getFormAttr: typeof getFormAttr;
    insertHtml: typeof insertHtml;
    isDomNull: typeof isDomNull;
    getChildPosition: typeof getChildPosition;
    domView: typeof domView;
    on: typeof on;
    off: typeof off;
    delegate: typeof delegate;
}
import attr from "./lib/attr";
import css from "./lib/css";
import fade from "./lib/fade";
import each from "./lib/each";
import empty from "./lib/empty";
import show from "./lib/show";
import hide from "./lib/hide";
import getIndexAttr from "./lib/getIndexAttr";
import getDom from "./lib/getDom";
import getLength from "./lib/getLength";
import remove from "./lib/remove";
import removeAttr from "./lib/removeAttr";
import tagName from "./lib/tagName";
import findElem from "./lib/findElem";
import getSelected from "./lib/getSelected";
import index from "./lib/index";
import getScrollPositon from "./lib/getScrollPositon";
import getElementOffSet from "./lib/getElementOffSet";
import getElementDimension from "./lib/getElementDimension";
import getSelectedCount from "./lib/getSelectedCount";
import getSelectedText from "./lib/getSelectedText";
import setSelected from "./lib/setSelected";
import toggleDisplay from "./lib/toggleDisplay";
import getParent from "./lib/getParent";
import getFormAttr from "./lib/getFormAttr";
import insertHtml from "./lib/insertHtml";
import isDomNull from "./lib/isDomNull";
import getChildPosition from "./lib/getChildPosition";
import domView from "./lib/domView";
import on from "./lib/on";
import off from "./lib//off";
import delegate from "./lib//delegate";
