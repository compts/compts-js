import {indexOf, has} from 'structkit';
import dom from '../../module/dom/index';
import {getWindowFunction} from '../browserFunction';

const comptsWindow = getWindowFunction();

if (has(comptsWindow, "comptsControl") ===false) {

    comptsWindow.comptsControl = {};
    comptsWindow.comptsControl.delegation_record_list=[];

}


/**
 * Get or set css element
 *
 * @since 2.0.1
 * @category DOM
 * @param {any} elem The second number in an addition.
 * @param {any} evnt The second number in an addition.
 * @param {any} func The second number in an addition.
 * @returns {Class} Returns the total.
 * @example
 *
 * dom("body").css()
 * // => ElementTrigger{element: Array(1), parent_child: null}element: Array(1)0: div#idlength: 1__proto__: Array(0)parent_child: null__proto__: Object
 */
function elemDelegateEvent (elem, evnt, func) {

    dom(elem).on(evnt, function (err) {

        const main = this;

        if (err.target) {

            const elem_index = indexOf(comptsWindow.comptsControl.delegation_record_list, main);

            if (elem_index===-1) {

                func.call(this, err);
                comptsWindow.comptsControl.delegation_record_list.push(main);

            }

        }

    });

}

export default elemDelegateEvent;
