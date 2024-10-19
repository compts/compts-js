const CoreElementInit = require('../../../core/coreElementInit');

const domSelectOption = require('../../../core/dom/domSelectOption');

/**
 * Get selected option in multiple selection
 *
 * @since 2.0.1
 * @category DOM
 * @param {boolean} bol The second number in an addition.
 * @returns {Class} Returns the total.
 * @example
 *
 * dom("body").getSelectedCount(1)
 * // => [ELEMENT]
 */
function getSelectedCount (bol) {

    const core = new CoreElementInit(this);

    return domSelectOption(core, bol, "count");

}

module.exports=getSelectedCount
;
