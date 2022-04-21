const CoreElementInit = require('../../../core/coreElementInit');

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
function isDomNull () {

    const core = new CoreElementInit(this);

    let bool=false;

    core.each(function (elemm) {

        if (elemm===null) {

            bool=true;

        }

    });

    return bool;

}

module.exports=isDomNull
;
