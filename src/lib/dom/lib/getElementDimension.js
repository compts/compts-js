import CoreElementInit from '../../../core/coreElementInit';
import {has, count} from 'structkit';

/**
 * Is Dom null
 *
 * @since 2.0.1
 * @category DOM
 * @returns {Object} Returns the total.
 * @example
 *
 * dom("div").isDomNull()
 * // => false
 */
function getElementDimension () {

    const core = new CoreElementInit(this);

    const arryElem=[];

    core.each(function (elemm) {

        if (has(elemm.getBoundingClientRect())) {

            const gtrect=elemm.getBoundingClientRect();

            arryElem.push({
                "bottom": gtrect.bottom,
                "height": gtrect.height,
                "left": gtrect.left,
                "right": gtrect.right,
                "top": gtrect.top,
                "width": gtrect.width
            });

        }

    });

    return count(arryElem)===1
        ?arryElem[0]
        :arryElem;

}

export default getElementDimension;
