const CoreElementInit = require('../../../core/coreElementInit');

const domSelectOption = require('../../../core/dom/domSelectOption');

/**
 * Get the selected option in select element
 *
 * @since 2.0.1
 * @category DOM
 * @param {boolean} bol The second number in an addition.
 * @returns {Class} Returns the total.
 * @example
 *
 * dom("body").getSelected("1")
 * // => true
 */
function getSelected (bol) {

    const core = new CoreElementInit(this);

    return domSelectOption(core, bol, "value");

}

module.exports=getSelected
;
