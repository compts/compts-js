const CoreElementInit = require('../../../core/coreElementInit');

const domGetCSS = require('../../../core/dom/domGetCSS');

const initFadeElement = require('../../../core/dom/initFadeElement');

const {has, getTypeof} = require('structkit');

/**
 * Set element fade
 *
 * @since 2.0.1
 * @category DOM
 * @param {function} typ The second number in an addition.
 * @param {function} intrvl The second number in an addition.
 * @param {function} func The second number in an addition.
 * @returns {Class} Returns the total.
 * @example
 *
 * dom("body").findElem("div")
 * // => ElementTrigger{element: Array(1), parent_child: null}element: Array(1)0: div#idlength: 1__proto__: Array(0)parent_child: null__proto__: Object
 */
function fade (typ, intrvl, func) {

    const core = new CoreElementInit(this);

    let typ_s="";

    const intrvl_s={};

    if (getTypeof(intrvl)==="json") {

        if (has(intrvl.time)) {

            intrvl_s.time=intrvl.time;

        }

    } else {

        if (getTypeof(intrvl)==="number") {

            intrvl_s.time=intrvl;

        }
        if (getTypeof(intrvl) === "string") {

            const jsn_spd_type=
                {
                    "fast": 200,
                    "faster": 100,
                    "slow": 400,
                    "slower": 500
                };

            if (has(jsn_spd_type, intrvl)) {

                intrvl_s.time=jsn_spd_type[intrvl];

            } else {

                intrvl_s.time=400;

            }

        }

    }

    core.each(function (meth) {

        if ((/(fadetoggle)/g).test(typ)) {

            typ_s=domGetCSS(meth, "display")==="none"
                ?"fadeout"
                :"fadein";

        } else {

            typ_s=typ;

        }
        initFadeElement(meth, typ_s, intrvl_s, func);

    });

    return this;

}

module.exports=fade
;
