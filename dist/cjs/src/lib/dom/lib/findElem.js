const CoreElementInit = require('../../../core/coreElementInit');

const findElement = require('../../../core/findElement');

/**
 * Search for element in dom
 *
 * @since 2.0.1
 * @category DOM
 * @param {String|ElementDom} elem The second number in an addition.
 * @returns {Class} Returns the total.
 * @example
 *
 * dom("body").findElem("div")
 * // => ElementTrigger{element: Array(1), parent_child: null}element: Array(1)0: div#idlength: 1__proto__: Array(0)parent_child: null__proto__: Object
 */
function findElem (elem) {

    const core = new CoreElementInit(this);

    findElement(elem, core.element, true);

    return this;

}

module.exports=findElem
;
