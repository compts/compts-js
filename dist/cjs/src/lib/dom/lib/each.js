const CoreElementInit = require('../../../core/coreElementInit');

/**
 * For loop for element
 *
 * @since 2.0.1
 * @category DOM
 * @param {function} func The second number in an addition.
 * @returns {Class} Returns the total.
 * @example
 *
 * dom("body")
 * // => ElementTrigger{element: Array(1), parent_child: null}element: Array(1)0: div#idlength: 1__proto__: Array(0)parent_child: null__proto__: Object
 */
function each (func) {

    const core = new CoreElementInit(this);

    core.each(func);

}

module.exports=each
;
