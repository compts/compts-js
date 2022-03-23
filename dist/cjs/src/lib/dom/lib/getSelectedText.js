const CoreElementInit =  require('../../../core/coreElementInit'); 
;
const domSelectOption =  require('../../../core/dom/domSelectOption'); 
;

/**
 * Get not Sub element
 *
 * @since 2.0.1
 * @category DOM
 * @param {boolean} bol The second number in an addition.
 * @returns {Class} Returns the total.
 * @example
 *
 * dom("body")
 * // => ElementTrigger{element: Array(1), parent_child: null}element: Array(1)0: div#idlength: 1__proto__: Array(0)parent_child: null__proto__: Object
 */
function getSelectedText (bol) {

    const core = new CoreElementInit(this);

    return domSelectOption(core, bol, "text");

}

module.exports=getSelectedText
;
