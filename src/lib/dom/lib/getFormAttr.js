import CoreElementInit from '../../../core/coreElementInit';
import formGetValues from '../../../core/dom/formGetValues';

/**
 * Get the form attribute
 *
 * @since 2.0.1
 * @category DOM
 * @returns {Class} Returns the total.
 * @example
 *
 * dom("body").getFormAttr("div")
 * // => [ELEMENT]
 */
function getFormAttr () {

    const core = new CoreElementInit(this);

    return formGetValues(core);

}

export default getFormAttr;
