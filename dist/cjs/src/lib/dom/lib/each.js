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
 * dom("body").each((data) =>{})
 * // => [ELEMENT]
 */
function each (func) {

    const core = new CoreElementInit(this);

    core.each(func);

}

module.exports=each
;
