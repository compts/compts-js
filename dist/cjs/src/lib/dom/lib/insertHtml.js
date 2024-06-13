const CoreElementInit = require('../../../core/coreElementInit');

const {has} = require('structkit');

/**
 * Append element using insertAdjacentHTML
 *
 * @since 2.0.1
 * @category DOM
 * @param {Object} com The second number in an addition.
 * @param {Object} htm The second number in an addition.
 * @returns {Object} Returns the total.
 * @example
 *
 * dom("div").insertHtml()
 * // => 1
 */
function insertHtml (com, htm) {

    const lst_adj={
        "after": "afterend",
        "afterbegin": "afterbegin",
        "afterend": "afterend",
        "before": "beforebegin",
        "beforebegin": "beforebegin",
        "beforeend": "beforeend",
        "prepend": "afterbegin"
    };
    const core = new CoreElementInit(this);

    core.each(function (meth) {

        try {

            if (has(lst_adj, com) && has(meth)) {

                meth.insertAdjacentHTML(lst_adj[com], htm);

            } else {
                if (com === "beforeend"){
                    meth.append(htm);
                }
                if (com === "appendChild"){
                    meth.appendChild(htm);
                }
            }

        } catch (exception) {

            console.log(exception);

        }

    });

    return this;

}

module.exports=insertHtml
;
