const CoreElementInit =  require('../../../core/coreElementInit'); 
;

/**
 * Search Sub element
 *
 * @since 2.0.1
 * @category DOM
 * @returns {Class} Returns the total.
 * @example
 *
 * dom("body").findElem("div")
 * // => ElementTrigger{element: Array(1), parent_child: null}element: Array(1)0: div#idlength: 1__proto__: Array(0)parent_child: null__proto__: Object
 */
function getDom () {

    const core = new CoreElementInit(this);

    const id_dm=[];

    core.each(function (meth) {

        id_dm.push(meth);

    });

    return id_dm;

}

exports.module=getDom
;
