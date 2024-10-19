const CoreElementInit = require('../../../core/coreElementInit');

const domIOtype = require('../../../core/dom/domIOtype');

const {indexOf, has, getTypeof, count, ifUndefined} = require('structkit');

/**
 * Search Sub element
 *
 * @since 2.0.1
 * @category DOM
 * @param {Object} dom The second number in an addition.
 * @param {number} htm The second number in an addition.
 * @returns {Class} Returns the total.
 * @example
 *
 * dom("body").css()
 * // => [ELEMENT]
 */
function domView (dom, htm) {

    const core = new CoreElementInit(this);

    const domee=this.getLength();
    let str=domee>1
        ?[]
        :"";

    core.each(function (meth) {

        const dom_type = indexOf([
            "checkbox",
            "radio"
        ], ifUndefined(meth.type, "-")) > -1
            ?meth.checked
            :true;

        if (dom_type) {

            if (domee>1) {

                str.push(domIOtype(dom, meth, htm));

            } else {

                str=domIOtype(dom, meth, htm)+"";

            }

            domIOtype(dom, meth, htm);

        }

    });

    if (has(htm)) {

        return this;

    }

    if (getTypeof(str)==="array") {

        return count(str)===1
            ?str[0]
            :str;

    }

    return str;

}

module.exports=domView
;
