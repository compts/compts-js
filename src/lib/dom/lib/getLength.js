import CoreElementInit from '../../../core/coreElementInit';
import {getTypeof} from 'structkit';

/**
 * Get count of search element
 *
 * @since 2.0.1
 * @category DOM
 * @returns {Object} Returns the total.
 * @example
 *
 * dom("div").getLength()
 * // => 1
 */
function getLength () {

    const core = new CoreElementInit(this);

    let cnt_i=0;

    core.each(function (meth) {

        if (meth !== null) {

            if (getTypeof(meth) === "object") {

                cnt_i+=1;

            }


        }


    });

    return cnt_i;

}

export default getLength;
