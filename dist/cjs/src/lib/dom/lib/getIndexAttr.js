const CoreElementInit = require('../../../core/coreElementInit');

const getDomAttr = require('../../../core/dom/getDomAttr');

const {getKey, getTypeof, count, where} = require('structkit');

/**
 * Get not Sub element
 *
 * @since 2.0.1
 * @category DOM
 * @param {String} attr The second number in an addition.
 * @returns {Class} Returns the total.
 * @example
 *
 * dom("body")
 * // => ElementTrigger{element: Array(1), parent_child: null}element: Array(1)0: div#idlength: 1__proto__: Array(0)parent_child: null__proto__: Object
 */
function getIndexAttr (attr) {

    const core = new CoreElementInit(this);

    let cnt=0;
    const globl=[];

    if (getTypeof(attr)!=="json") {

        return -1;

    }

    const getkey=getKey(attr);

    core.each(function (meth) {

        const get_attr=getDomAttr(meth,getkey);

        const where_count=where(get_attr,attr);

        if (count(where_count)>0) {

            globl.push(cnt);

        }

        cnt+=1;

    });

    return count(globl)===0
	    ?-1:
	    count(globl)===1
            ?globl[0]
            :globl;

}

module.exports=getIndexAttr
;
