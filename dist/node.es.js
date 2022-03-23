const documentReady =  require("../../core/documentReady") 
;

/**
 * Check if HTML is rendered completed
 *
 * @since 2.0.1
 * @category DOM
 * @param {function} func The second number in an addition.
 * @returns {Object} Returns the total.
 * @example
 *
 * control(function(){})
 * // => null
 */
function control (func) {

    return documentReady(func);

}
module.exports=control
;
const domCoreAssign =  require('../../core/domCoreAssign') 
;

/**
 * Check if object or value
 *
 * @since 2.0.1
 * @category DOM
 * @param {Object|String} element The second number in an addition.
 * @returns {Object} Returns the total.
 * @example
 *
 * dom("body")
 * // => ElementTrigger{element: Array(1), parent_child: null}element: Array(1)0: div#idlength: 1__proto__: Array(0)parent_child: null__proto__: Object
 */
function dom (element) {

    return domCoreAssign(element);

}
module.exports=dom
;

/**
 * Check if object or value
 *
 * @since 2.0.1
 * @category DOM
 * @returns {Object} Returns the total.
 * @example
 *
 * dom("body")
 * // => ElementTrigger{element: Array(1), parent_child: null}element: Array(1)0: div#idlength: 1__proto__: Array(0)parent_child: null__proto__: Object
 */
function element () {}
module.exports=element
;

/**
 * Compts JS plugin
 *
 * @since 2.0.1
 * @category DOM
 * @param {String} dom The second number in an addition.
 * @param {String} bascConfig The second number in an addition.
 * @returns {Object} Returns the total.
 * @example
 *
 * dom("body")
 * // => ElementTrigger{element: Array(1), parent_child: null}element: Array(1)0: div#idlength: 1__proto__: Array(0)parent_child: null__proto__: Object
 */
function extension (dom, bascConfig) {

    alert(dom);

}
module.exports=extension
;
