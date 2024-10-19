import CoreElementInit from '../../../core/coreElementInit';
import findElement from '../../../core/findElement';

/**
 * Search for element in dom
 *
 * @since 2.0.1
 * @category DOM
 * @param {String|ElementDom} elem The second number in an addition.
 * @returns {Class} Returns the total.
 * @example
 *
 * dom("body").findElem("div")
 * // => [ELEMENT]
 */
function findElem (elem) {

    const core = new CoreElementInit(this);

    findElement(elem, core.element, true);

    return this;

}

export default findElem;
