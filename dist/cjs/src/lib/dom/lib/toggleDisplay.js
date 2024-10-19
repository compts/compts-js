const CoreElementInit = require('../../../core/coreElementInit');

const domCSS = require('../../../core/dom/domCSS');

const domGetCSS = require('../../../core/dom/domGetCSS');

/**
 * Toggle display show and hide
 *
 * @since 2.0.1
 * @category DOM
 * @param {String} display The second number in an addition.
 * @returns {Class} Returns the total.
 * @example
 *
 * dom("body").toggleDisplay()
 * // => [ELEMENT]
 */
function toggleDisplay (display) {

    const d_var=display||"";

    const core = new CoreElementInit(this);

    core.each(function (meth) {

        const elem=meth.style.display||domGetCSS(meth, "display");

        domCSS(meth, {
            "display": elem==="none"
                ?d_var
                :"none"

        });

    });

    return this;

}

module.exports=toggleDisplay
;
