const CoreElementInit = require('../../../core/coreElementInit');

const domOffset = require('../../../core/dom/domOffset');

const {count} = require('structkit');

/**
 * Get the offset of element
 *
 * @since 2.0.1
 * @category DOM
 * @returns {Object} Returns the total.
 * @example
 *
 * dom("div").getElementOffSet()
 * // => {"bottom":896,"left":0,"right":1920,"top":0}
 */
function getElementOffSet () {

    const core = new CoreElementInit(this);

    const arryElem=[];

    core.each(function (elemm) {

        arryElem.push(domOffset(elemm));

    });

    return count(arryElem)===1
        ?arryElem[0]
        :arryElem;

}

module.exports=getElementOffSet
;
