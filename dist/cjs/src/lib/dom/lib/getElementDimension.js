const CoreElementInit = require('../../../core/coreElementInit');

const {has, count, first} = require('structkit');

/**
 * Get the dimension of element
 *
 * @since 2.0.1
 * @category DOM
 * @returns {Object} Returns the total.
 * @example
 *
 * dom("div").getElementDimension()
 * // => {"bottom":896.328125,"height":896.328125,"left":0,"right":1920,"top":0,"width":1920}
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
        ?first(arryElem)
        :arryElem;

}

module.exports=getElementDimension
;
