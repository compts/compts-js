import CoreElementInit from '../../../core/coreElementInit';
import {has} from 'structkit';

/**
 * Get the index of Element
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

    const domSelector=has(doms)===false
        ?"none"
        :document.querySelector(doms);

    const core = new CoreElementInit(this);

    core.each(function (elemm) {

        if (domSelector !=="none" ) {

            elemm && elemm.parentNode && elemm.parentNode.removeChild(domSelector);

        }
        else{
    
            
            elemm && elemm.parentNode && elemm.parentNode.removeChild(elemm);

        }

    });

    return this;

}

export default remove;
