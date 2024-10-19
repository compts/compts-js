import CoreElementInit from '../../../core/coreElementInit';
import domGetCSS from '../../../core/dom/domGetCSS';
import domCSS from '../../../core/dom/domCSS';
import {getTypeof, has} from 'structkit';

/**
 * Get or set css element
 *
 * @since 2.0.1
 * @category DOM
 * @param {Object} value The second number in an addition.
 * @param {number} countValue The second number in an addition.
 * @returns {Class} Returns the total.
 * @example
 *
 * dom("body").css()
 * // => {"z-index": 1}
 */
function css (value, countValue) {

    const core = new CoreElementInit(this);

    const typeofs = getTypeof(value) === "json";

    const cntt=has(countValue) === false
        ?0
        :countValue-1;

    const val_g = {};

    core.each(function (meth, td) {

        if (typeofs) {

            domCSS(meth, value);

        } else {

            if (parseInt(td)<=cntt) {

                val_g[td]=domGetCSS(meth, value);

            }

        }

    });

    const returnValue = cntt===0
        ?val_g[0]
        :val_g;

    return typeofs
        ? this
        : returnValue;

}

export default css;
