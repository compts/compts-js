const CoreElementInit = require('../../../core/coreElementInit');

/**
 * Show Element in dom
 *
 * @since 2.0.1
 * @category DOM
 * @param {string} val The second number in an addition.
 * @returns {Object} Returns the total.
 * @example
 *
 * dom("div").setSelected('test')
 * // => null
 */
function setSelected (val) {

    const core = new CoreElementInit(this);

    let opt = null;

    core.each(function (meth) {

        opt=meth.options;
        for (let inc =0; inc<opt.length;) {

            opt[inc].selected = opt[inc].value===val;

            inc+=1;

        }

    });

    return this;

}

module.exports=setSelected
;
