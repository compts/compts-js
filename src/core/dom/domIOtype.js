import {has} from 'structkit';

/**
 * Get or set css element
 *
 * @since 2.0.1
 * @category DOM
 * @param {any} type The second number in an addition.
 * @param {any} dom The second number in an addition.
 * @param {any} htmll The second number in an addition.
 * @returns {Class} Returns the total.
 * @example
 *
 * dom("body").css()
 * // => ElementTrigger{element: Array(1), parent_child: null}element: Array(1)0: div#idlength: 1__proto__: Array(0)parent_child: null__proto__: Object
 */
function domIOtype (type, dom, htmll) {

    if ((/\b(val)\b/g).test(type)) {

        if (has(htmll)) {

            dom.value=htmll;

        }


        return dom.value;

    }
    if ((/\b(html)\b/g).test(type)) {

        if (has(htmll)) {

            dom.innerHTML=htmll;

        }

        return dom.innerHTML;

    }
    if ((/\b(text)\b/g).test(type)) {

        if (has(htmll)) {

            !has(dom.innerText)
                ?dom.textContent
                :dom.innerText=htmll;

        }

        return !has(dom.innerText)
            ?dom.textContent
            :dom.innerText;

    } if ((/\b(outerhtml)\b/g).test(type)) {

        if (has(htmll)) {

            dom.outerHTML=htmll;

        }

        return dom.outerHTML;

    }

    return null;

}
export default domIOtype;
