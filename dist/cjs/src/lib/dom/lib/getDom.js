const CoreElementInit = require('../../../core/coreElementInit');

/**
 * Get element in dom
 *
 * @since 2.0.1
 * @category DOM
 * @returns {Class} Returns the total.
 * @example
 *
 * dom("body").getDom()
 * // => [ELEMENT]
 */
function getDom () {

    const core = new CoreElementInit(this);

    const id_dm=[];

    core.each(function (meth) {

        id_dm.push(meth);

    });

    return id_dm;

}

module.exports=getDom
;
