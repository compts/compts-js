import {each, getTypeof, has} from 'structkit';


/**
 * Get or set css element
 *
 * @since 2.0.1
 * @category DOM
 * @param {any} meth The second number in an addition.
 * @param {any} dk The second number in an addition.
 * @returns {Class} Returns the total.
 * @example
 *
 * dom("body").css()
 * // => ElementTrigger{element: Array(1), parent_child: null}element: Array(1)0: div#idlength: 1__proto__: Array(0)parent_child: null__proto__: Object
 */
function getDomAttr (meth, dk) {

    const attr_type=getTypeof(dk)==="array"
        ?dk
        :[dk];
    const globl={};

    if (has(meth)) {

        if (has(meth.getAttributeNode)) {

            each(attr_type, function (ky, vl) {

                if (meth.getAttributeNode(vl)) {

                    globl[vl]=meth.getAttributeNode(vl).value;

                }

            });

        } else {

            each(attr_type, function (ky, vl) {

                if (meth.getAttribute) {

                    globl[vl]=meth.getAttribute(vl);

                }

            });

        }

    }

    return globl;

}

export default getDomAttr;
