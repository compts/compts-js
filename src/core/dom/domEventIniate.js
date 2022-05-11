
import eventListener from './eventListener';

/**
 * Get or set css element
 *
 * @since 2.0.1
 * @category DOM
 * @param {any} main The second number in an addition.
 * @param {any} spltt The second number in an addition.
 * @param {any} fn The second number in an addition.
 * @param {any} bools The second number in an addition.
 * @returns {Class} Returns the total.
 * @example
 *
 * dom("body").css()
 * // => ElementTrigger{element: Array(1), parent_child: null}element: Array(1)0: div#idlength: 1__proto__: Array(0)parent_child: null__proto__: Object
 */
function domEventIniate (main, spltt, fn, bools) {

    for (let vk=0; vk<spltt.length; vk++) {

        (function (main_sub, m1, m2, m3, func) {

            eventListener(main_sub, m1, m2, m3, func, bools);


        }(main, spltt[vk]+'', 'on'+spltt[vk]+'', 'none', fn));

    }

    return main;

}

export default domEventIniate;
