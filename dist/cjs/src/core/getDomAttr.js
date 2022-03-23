const {each, getTypeof, has} =  require('structkit'); 
;

/**
 * Check if object or value
 *
 * @since 2.0.1
 * @category Seq
 * @param {string} meth The first number in an addition.
 * @param {Object} domValue The second number in an addition.
 * @returns {Array|Object} Returns the total.
 * @example
 *
 * getDomAttr("first",element,1)
 * // => {'as':2}
 */
function getDomAttr (meth, domValue) {

    const attr_type=getTypeof(domValue)==="array"
        ?domValue
        :[domValue];
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

module.exports=getDomAttr
;
