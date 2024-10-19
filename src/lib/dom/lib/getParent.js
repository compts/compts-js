import CoreElementInit from '../../../core/coreElementInit';
import {count} from 'structkit';

/**
 * Get the parent element
 *
 * @since 2.0.1
 * @category DOM
 * @returns {Class} Returns the total.
 * @example
 *
 * dom("body").getParent("div")
 * // => [ELEMENT]
 */
function getParent () {

    const core = new CoreElementInit(this);

    const arry_pl=[];

    core.each(function (meth) {

        arry_pl.push(meth.parentElement);

    });

    return count(arry_pl)===1
        ?arry_pl[0]
        :arry_pl;

}

export default getParent;
