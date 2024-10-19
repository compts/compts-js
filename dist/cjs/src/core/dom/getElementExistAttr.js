/**
 * Get or set css element
 *
 * @since 2.0.1
 * @category DOM
 * @param {any} res The second number in an addition.
 * @returns {Class} Returns the total.
 * @example
 *
 * dom("body").css()
 * // => ElementTrigger{element: Array(1), parent_child: null}element: Array(1)0: div#idlength: 1__proto__: Array(0)parent_child: null__proto__: Object
 */
function getElementExistAttr (res) {

    const attr_elem={};

    for (var att, i = 0, atts = res.attributes, n = atts.length; i < n;) {

        att = atts[i];

        attr_elem[att.nodeName]=att.nodeValue;

        i += 1;

    }

    return attr_elem;

}

module.exports=getElementExistAttr
;
