/**
 * Get not Sub element
 *
 * @since 2.0.1
 * @category DOM
 * @param {String} value The second number in an addition.
 * @returns {Class} Returns the total.
 * @example
 *
 * dom("body").noteq(0)
 * // => [ELEMENT]
 */
function noteq (value) {

    this.parent_child="node::noteq("+value+")";

    return this;

}

export default noteq;
