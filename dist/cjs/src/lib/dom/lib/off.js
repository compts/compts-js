const domEventIniate = require('../../../core/dom/domEventIniate');

/**
 * Get Sub element
 *
 * @since 2.0.1
 * @category DOM
 * @param {String} event The second number in an addition.
 * @param {String} fn The second number in an addition.
 * @returns {Class} Returns the total.
 * @example
 *
 * dom("body")
 * // => [ELEMENT]
 */
function off (event, fn) {

    domEventIniate(this, event.split(","), fn, false);

    return this;

}

module.exports=off
;
