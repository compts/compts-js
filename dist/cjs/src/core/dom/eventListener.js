const {indexOf, has} = require('structkit');

const {getWindowFunction} = require('../browserFunction');

// Const remove_list_action= [];

const comptsWindow = getWindowFunction();

if (has(comptsWindow, "comptsControl") ===false) {

    comptsWindow.comptsControl = {};
    comptsWindow.comptsControl.remove_list_action=[];

}

/**
 * Get or set css element
 *
 * @since 2.0.1
 * @category DOM
 * @param {any} elthis The second number in an addition.
 * @param {any} c1 The second number in an addition.
 * @param {any} c2 The second number in an addition.
 * @param {any} c3 The second number in an addition.
 * @param {any} func The second number in an addition.
 * @param {any} act_bool The second number in an addition.
 * @returns {Class} Returns the total.
 * @example
 *
 * dom("body").css()
 * // => ElementTrigger{element: Array(1), parent_child: null}element: Array(1)0: div#idlength: 1__proto__: Array(0)parent_child: null__proto__: Object
 */
function eventListener (elthis, c1, c2, c3, func, act_bool) {

    let var_elthis = elthis;

	 elthis.each(function (elemm, td) {

		 var_elthis=elemm;
        if (act_bool) {

	 actionevent(elemm, c1, c2, c3, func);

	 return elthis;

     }

     comptsWindow.comptsControl.remove_list_action.push(elemm);
        return elthis;

    });

    return var_elthis;

}

/**
 * Get or set css element
 *
 * @since 2.0.1
 * @category DOM
 * @param {any} elems11 The second number in an addition.
 * @param {any} ch The second number in an addition.
 * @param {any} ie The second number in an addition.
 * @param {any} mo The second number in an addition.
 * @param {any} func The second number in an addition.
 * @returns {Class} Returns the total.
 * @example
 *
 * dom("body").css()
 * // => ElementTrigger{element: Array(1), parent_child: null}element: Array(1)0: div#idlength: 1__proto__: Array(0)parent_child: null__proto__: Object
 */
function actionevent (elems11, ch, ie, mo, func) {

    if (elems11.attachEvent) {

        (function (elems11, ff, mob) {

            elems11.attachEvent(ie, function (se) {

                if (indexOf(comptsWindow.comptsControl.remove_list_action, elems11)==-1) {

                    ff.call(elems11, se);

                }

            }, true);

        }(elems11, func, ie));

    } else {

        if (elems11.addEventListener) {

            (function (elems11, ff, mob) {

                elems11.addEventListener(ch, function (e) {

                    if (typeof e.targetTouches!=="object" && indexOf(comptsWindow.comptsControl.remove_list_action, elems11)==-1) {

                        ff.call(this, e);

                    }

                }, true);

            }(elems11, func, ch));

            if (mo!=="none") {

                (function (elems11, ff, mob) {

                    elems11.addEventListener(mo, function (e) {

                        if (indexOf(comptsWindow.comptsControl.remove_list_action, elems11)==-1) {

                            ff.call(this, e);

                        }

                    }, true);

                }(elems11, func, mo));

            }

        }

    }

}

module.exports=eventListener
;
