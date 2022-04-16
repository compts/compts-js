const CoreElementInit =  require('../../../core/coreElementInit'); 
;
const {getTypeof, each} =  require('structkit'); 
;

/**
 * Remove Dom attribute
 *
 * @since 2.0.1
 * @category DOM
 * @param {Object} value The second number in an addition.
 * @returns {Class} Returns the total.
 * @example
 *
 * dom("body")
 * // => ElementTrigger{element: Array(1), parent_child: null}element: Array(1)0: div#idlength: 1__proto__: Array(0)parent_child: null__proto__: Object
 */
function removeAttr (value) {

    const core = new CoreElementInit(this);

    const attr_type = getTypeof(value) === "array"
        ?value
        :new Array(value);

    core.each(function (td, meth) {

        if (meth.removeAttribute) {

            each(attr_type, function (ky, vl) {

                meth.removeAttribute(vl);

            });

        }

    });

}

exports.module=removeAttr
;
