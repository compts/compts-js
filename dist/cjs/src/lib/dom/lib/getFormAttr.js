const CoreElementInit =  require('../../../core/coreElementInit'); 
;
const formGetValues =  require('../../../core/dom/formGetValues'); 
;

/**
 * Search Sub element
 *
 * @since 2.0.1
 * @category DOM
 * @returns {Class} Returns the total.
 * @example
 *
 * dom("body").getFormAttr("div")
 * // => ElementTrigger{element: Array(1), parent_child: null}element: Array(1)0: div#idlength: 1__proto__: Array(0)parent_child: null__proto__: Object
 */
function getFormAttr () {

    const core = new CoreElementInit(this);

    return formGetValues(core);

}

module.exports=getFormAttr
;
