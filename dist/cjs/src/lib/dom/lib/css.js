const CoreElementInit =  require('../../../core/coreElementInit'); 
;
const domGetCSS =  require('../../../core/dom/domGetCSS'); 
;
const domCSS =  require('../../../core/dom/domCSS'); 
;
const {getTypeof, has} =  require('structkit'); 
;

/**
 * Search Sub element
 *
 * @since 2.0.1
 * @category DOM
 * @param {Object} value The second number in an addition.
 * @param {number} countValue The second number in an addition.
 * @returns {Class} Returns the total.
 * @example
 *
 * dom("body").css()
 * // => ElementTrigger{element: Array(1), parent_child: null}element: Array(1)0: div#idlength: 1__proto__: Array(0)parent_child: null__proto__: Object
 */
function css (value, countValue) {

    const core = new CoreElementInit(this);

    const typeofs = getTypeof(value) === "json";

    const cntt=has(countValue) === false
        ?0
        :countValue-1;

    const val_g = {};

    core.each(function (meth, td) {

        if (typeofs) {

            domCSS(meth, value);

        } else {

            if (parseInt(td)<=cntt) {

                val_g[td]=domGetCSS(meth, value);

            }

        }

    });

    const returnValue = cntt===0
        ?val_g[0]
        :val_g;

    return typeofs
        ? this
        : returnValue;

}

exports.module=css
;
