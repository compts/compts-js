const CoreElementInit =  require('../../../core/coreElementInit'); 
;
const domCSS =  require('../../../core/dom/domCSS'); 
;

/**
 * Show Element in dom
 *
 * @since 2.0.1
 * @category DOM
 * @param {function} func The second number in an addition.
 * @returns {Object} Returns the total.
 * @example
 *
 * dom("div").show()
 * // => null
 */
function show () {

    const core = new CoreElementInit(this);

    core.each(function (meth) {

        domCSS(meth, {
            "display": ""
        });

    });

    return this;

}

exports.module=show
;
