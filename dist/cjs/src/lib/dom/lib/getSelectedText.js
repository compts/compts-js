const CoreElementInit = require('../../../core/coreElementInit');

const domSelectOption = require('../../../core/dom/domSelectOption');

/**
 * Get the selected option in select element it text only
 *
 * @since 2.0.1
 * @category DOM
 * @param {boolean} bol The second number in an addition.
 * @returns {Class} Returns the total.
 * @example
 *
 * dom("body").getSelectedText()
 * // => "TEST"
 */
function getSelectedText (bol) {

    const core = new CoreElementInit(this);

    return domSelectOption(core, bol, "text");

}

module.exports=getSelectedText
;
