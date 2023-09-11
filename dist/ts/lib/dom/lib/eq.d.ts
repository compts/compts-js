export default eq;
/**
 * Set the index of children element
 *
 * @since 2.0.1
 * @category DOM
 * @param {String} value The second number in an addition.
 * @returns {Class} Returns the total.
 * @example
 *
 * dom("body")
 * // => ElementTrigger{element: Array(1), parent_child: null}element: Array(1)0: div#idlength: 1__proto__: Array(0)parent_child: null__proto__: Object
 */
declare function eq(value: string): Class;
declare class eq {
    /**
     * Set the index of children element
     *
     * @since 2.0.1
     * @category DOM
     * @param {String} value The second number in an addition.
     * @returns {Class} Returns the total.
     * @example
     *
     * dom("body")
     * // => ElementTrigger{element: Array(1), parent_child: null}element: Array(1)0: div#idlength: 1__proto__: Array(0)parent_child: null__proto__: Object
     */
    constructor(value: string);
    parent_child: string;
}
