import documentReady from "../../core/documentReady";

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
export default control;
