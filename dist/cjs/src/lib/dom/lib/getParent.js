const CoreElementInit =  require('../../../core/coreElementInit'); 
;
const {count} =  require('structkit'); 
;

/**
 * Search Sub element
 *
 * @since 2.0.1
 * @category DOM
 * @returns {Class} Returns the total.
 * @example
 *
 * dom("body").getParent("div")
 * // => ElementTrigger{element: Array(1), parent_child: null}element: Array(1)0: div#idlength: 1__proto__: Array(0)parent_child: null__proto__: Object
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

module.exports=getParent
;
