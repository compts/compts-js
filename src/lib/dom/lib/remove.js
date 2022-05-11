import CoreElementInit from '../../../core/coreElementInit';
import {has} from 'structkit';

/**
 * Remove the specific element
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
function remove (doms) {

    const core = new CoreElementInit(this);

    core.each(function (elemm) {

        if (has(doms)===false) {

            if (elemm && elemm.parentNode) {

                elemm.parentNode.removeChild(document.querySelector(doms));

            }

        } else {

            if (elemm && elemm.parentNode) {

                elemm.parentNode.removeChild(elemm);

            }

        }

    });

    return this;

}

export default remove;
