import CoreElementInit from '../../../core/coreElementInit';

/**
 * Check if the element is empty or not
 *
 * @since 2.0.1
 * @category DOM
 * @param {Object} doms The second number in an addition.
 * @returns {Object} Returns the total.
 * @example
 *
 * dom("div").index()
 * // => 1
 */
function empty () {

    const core = new CoreElementInit(this);

    core.each(function (elemm) {

        while (elemm.firstChild) {

            elemm.removeChild(elemm.firstChild);

        }

    });

    return this;

}

export default empty;
