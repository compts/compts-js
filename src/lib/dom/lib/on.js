import domEventIniate from '../../../core/dom/domEventIniate';

/**
 * Set event action is on
 *
 * @since 2.0.1
 * @category DOM
 * @param {String} event The second number in an addition.
 * @param {String} fn The second number in an addition.
 * @returns {Class} Returns the total.
 * @example
 *
 * dom("body")
 * // => ElementTrigger{element: Array(1), parent_child: null}element: Array(1)0: div#idlength: 1__proto__: Array(0)parent_child: null__proto__: Object
 */
function on (event, fn) {

    domEventIniate(this, event.split(","), fn, true);

    return this;

}

export default on;
