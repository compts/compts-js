export default delegate;
/**
 * Set delegate event action
 *
 * @since 2.0.1
 * @category DOM
 * @param {String} evnt The second number in an addition.
 * @param {String} target_element The second number in an addition.
 * @param {String} func The second number in an addition.
 * @returns {Class} Returns the total.
 * @example
 *
 * dom("body").delegate("click", ()=>{})
 * // => [ELEMENT]
 */
declare function delegate(evnt: string, target_element: string, func: string): Class;
