import {getTypeof} from 'structkit';

/**
 * Get or set css element
 *
 * @since 2.0.1
 * @category DOM
 * @param {Object} dom The second number in an addition.
 * @param {number} style The second number in an addition.
 * @returns {Class} Returns the total.
 * @example
 *
 * dom("body").css()
 * // => ElementTrigger{element: Array(1), parent_child: null}element: Array(1)0: div#idlength: 1__proto__: Array(0)parent_child: null__proto__: Object
 */
function loopstyle (dom, style) {

    const golb={};
    let golb_st="";


    if (!window.getComputedStyle) {

        golb[style] = dom.currentStyle[style];
        golb_st= dom.currentStyle[style];

    } else {

        golb[style] = window.getComputedStyle(dom).getPropertyValue(style);
        golb_st= window.getComputedStyle(dom).getPropertyValue(style);

    }

    return golb_st;

};

/**
 * Get or set css element
 *
 * @since 2.0.1
 * @category DOM
 * @param {Object} ele The second number in an addition.
 * @param {Object} prop The second number in an addition.
 * @returns {Class} Returns the total.
 * @example
 *
 * dom("body").css()
 * // => ElementTrigger{element: Array(1), parent_child: null}element: Array(1)0: div#idlength: 1__proto__: Array(0)parent_child: null__proto__: Object
 */
function domGetCSS (ele, prop) {


    let golb_ret={};

    if (getTypeof(prop)==="array") {

        for (const fn in prop) {

            golb_ret[prop[fn]]=loopstyle(ele, prop[fn]);

        }

    } else if (getTypeof(prop)==="string") {

        golb_ret=loopstyle(ele, prop);

    }

    return golb_ret;

}

export default domGetCSS;
