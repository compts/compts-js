const CoreElementInit =  require('../../../core/coreElementInit'); 
;
const {has} =  require('structkit'); 
;

/**
 * Get Sub element
 *
 * @since 2.0.1
 * @category DOM
 * @returns {Class} Returns the total.
 * @example
 *
 * dom("body").getChildPosition()
 * // => 1
 */
function getChildPosition () {

    const core = new CoreElementInit(this);

    let incrementi = 1;

    let node=has(core.element[0])===false
        ?core.element
        :core.element[0];

    while (node.previousSibling) {

        node = node.previousSibling;
        if (node.nodeType === 1) {

            incrementi+=1;

        }

    }

    return incrementi-1;

}

module.exports=getChildPosition
;
