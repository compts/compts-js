const CoreElementInit = require('../../../core/coreElementInit');

const getDomAttr = require('../../../core/dom/getDomAttr');

const getElementExistAttr = require('../../../core/dom/getElementExistAttr');

const {count, getTypeof, has} = require('structkit');

/**
 * Get the element attribute
 *
 * @since 2.0.1
 * @category DOM
 * @param {Object} dl The second number in an addition.
 * @param {number} bol The second number in an addition.
 * @returns {Class} Returns the total.
 * @example
 *
 * dom("body").css()
 * // => ElementTrigger{element: Array(1), parent_child: null}element: Array(1)0: div#idlength: 1__proto__: Array(0)parent_child: null__proto__: Object
 */
function attr (dl, bol) {

    const core = new CoreElementInit(this);

    let cnt=0;
    const globl={},
        globl_all=[];
    const var_bol=bol||false;

    const is_where_attr = has(dl);

    const attr_type=getTypeof(dl)==="array"
        ?dl
        :[dl];

    const typeofs = getTypeof(dl) !== "json";

    core.each(function (meth) {

        if (is_where_attr) {

            if (typeofs) {

                const get_attr=getDomAttr(meth, attr_type);

                if (var_bol===true) {

                    if (count(get_attr)>0) {

                        globl[cnt]={};
                        globl[cnt]=get_attr;
                        cnt+=1;

                    }

                } else {

                    globl[cnt]={};
                    globl[cnt]=get_attr;
                    cnt+=1;

                }

            } else {

                for (const vk in dl) {

                    if (has(dl, vk)) {

                        const crte_elem=document.createAttribute(vk);

                        crte_elem.value = dl[vk];

                        if (meth.setAttribute) {

                            meth.setAttribute(vk, dl[vk]);

                        } else {

                            meth.setAttributeNode(crte_elem);

                        }

                    }

                }

            }

        } else {

            globl_all.push(getElementExistAttr(meth));

        }

    });

    if (is_where_attr===true) {

        return typeofs==false ? this : ((cnt==1 || cnt==0)?((attr_type.length==1)?((typeof(globl[0])==="undefined")?"undefined":globl[0][dl]):globl[0]):globl);

    }
         else{
            return count(globl_all)==0?-1:(count(globl_all)==1)?globl_all[0]:globl_all;
         }   

}

module.exports=attr
;
