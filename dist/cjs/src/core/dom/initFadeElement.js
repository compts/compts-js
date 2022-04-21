const domCSS = require('./domCSS');

const {has} = require('structkit');

/**
 * Search Sub element
 *
 * @since 2.0.1
 * @category DOM
 * @param {function} meth The second number in an addition.
 * @param {function} fade The second number in an addition.
 * @returns {Class} Returns the total.
 * @example
 *
 * dom("body").findElem("div")
 * // => ElementTrigger{element: Array(1), parent_child: null}element: Array(1)0: div#idlength: 1__proto__: Array(0)parent_child: null__proto__: Object
 */
function fadefun (meth, fade) {

    domCSS(meth, {"opacity": fade/100});

}

/**
 * Search Sub element
 *
 * @since 2.0.1
 * @category DOM
 * @param {function} meth The second number in an addition.
 * @param {function} typ_s The second number in an addition.
 * @param {function} intrvl_s The second number in an addition.
 * @param {function} func The second number in an addition.
 * @returns {Class} Returns the total.
 * @example
 *
 * dom("body").findElem("div")
 * // => ElementTrigger{element: Array(1), parent_child: null}element: Array(1)0: div#idlength: 1__proto__: Array(0)parent_child: null__proto__: Object
 */
function initFadeElement (meth, typ_s, intrvl_s, func) {

    const ot={"fadein": 100,
        "fadeout": 0,
        "fadeto": 100};
    const timetofade={"fadein": "ot-20",
        "fadeout": "ot+20",
        "fadeto": "100"};
    const timetoequal={"fadein": "ot<10",
        "fadeout": "ot>90",
        "fadeto": "ot==100"};

    if ((/(fadeout)/g).test(typ_s)) {

        domCSS(meth, {"display": ""});

    }
    if ((/(fadeto)/g).test(typ_s)) {

        domCSS(meth, {"display": ""});
        fadefun(meth, intrvl_s.time/10);
        if (has(func) && intrvl_s.time/10===1) {

            func();

        }

    } else {

        const intval=setInterval(function () {

            const func_check=new Function("ot", "return "+timetoequal[typ_s]);

            if (func_check(ot[typ_s])) {

                clearInterval(intval);

                if ((/(fadein)/g).test(typ_s)) {

                    domCSS(meth, {"display": "none"});
                    if (has(func)) {

                        func();

                    }

                }

            }

            if ((/(fadein|fadeout)/g).test(typ_s)) {

                fadefun(meth, ot[typ_s]);

            }
            const func_ot=new Function("ot", "return "+timetofade[typ_s]);

            ot[typ_s]=func_ot(ot[typ_s]);

        }, intrvl_s.time);

    }

}
module.exports=initFadeElement
;
