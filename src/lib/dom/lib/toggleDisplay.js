import CoreElementInit from '../../../core/coreElementInit';
import domCSS from '../../../core/dom/domCSS';
import domGetCSS from '../../../core/dom/domGetCSS';

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
 * // => ElementTrigger{element: Array(1), parent_child: null}element: Array(1)0: div#idlength: 1__proto__: Array(0)parent_child: null__proto__: Object
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

export default toggleDisplay;
