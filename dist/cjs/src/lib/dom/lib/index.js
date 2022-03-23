const CoreElementInit =  require('../../../core/coreElementInit'); 
;
const {indexOf} =  require('structkit'); 
;

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
function index (doms) {

    const core = new CoreElementInit(this);

    const arry_dm = [];

    core.each(function (elemm) {

        arry_dm.push(elemm);

    });


    return indexOf(arry_dm, doms);

}

module.exports=index
;
