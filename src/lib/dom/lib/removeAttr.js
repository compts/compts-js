import CoreElementInit from '../../../core/coreElementInit';
import {getTypeof, each} from 'structkit';

/**
 * Remove Dom attribute
 *
 * @since 2.0.1
 * @category DOM
 * @param {Object} value The second number in an addition.
 * @returns {Class} Returns the total.
 * @example
 *
 * dom("body").removeAttr()
 * // => [ELEMENT]
 */
function removeAttr (value) {

    const core = new CoreElementInit(this);

    const attr_type = getTypeof(value) === "array"
        ?value
        :new Array(value);

    core.each(function (td, meth) {

        if (meth.removeAttribute) {

            each(attr_type, function (ky, vl) {

                meth.removeAttribute(vl);

            });

        }

    });

}

export default removeAttr;
