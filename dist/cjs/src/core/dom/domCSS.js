const {count, each, has} =  require('structkit'); 
;
const getDomAttr =  require('./getDomAttr'); 
;

/**
 * Css core engine
 *
 * @since 2.0.1
 * @category DOM
 * @param {object} id The second number in an addition.
 * @param {object} dList The second number in an addition.
 * @returns {Class} Returns the total.
 * @example
 *
 * dom("body").findElem("div")
 * // => ElementTrigger{element: Array(1), parent_child: null}element: Array(1)0: div#idlength: 1__proto__: Array(0)parent_child: null__proto__: Object
 */
function domCSS (id, dList) {

    let elem_str_class="";
    const get_attr=has(getDomAttr(id, ['style']).style)
        ?getDomAttr(id, ['style']).style
        :"";
    const split_style=get_attr.toString().split(";");

    each(split_style, function (spk, spv) {

        const elem_d=spv.split(":");

        if (count(elem_d)>0 && has(spv)) {

            if (!has(dList, elem_d[0]) && has(elem_d[1])) {

                const ele_key=elem_d[0].replace(/\s/, "");
                const ele_val=elem_d[1].replace(/\s/, "");

                if (!has(dList[ele_key])) {

                    dList[ele_key]=ele_val;

                }

            }

        }

    });

    for (const vK in dList) {

        if (has(dList, vK)) {

            elem_str_class+=vK+":"+dList[vK]+";";

            if (has(id)) {

                try {

                    if (has(id.style.setAttribute)) {

                        id.style.setAttribute(vK, dList[vK]);

                    }

                } catch (err) {

                    console.log(err);

                }

            }

        }

    }
    if (has(id)) {

        try {

            if (has(id.setAttributeNode)) {

                const creat_elem=document.createAttribute("style");

                creat_elem.value=elem_str_class;
                id.setAttributeNode(creat_elem);

            }

        } catch (err) {

            console.log(err);

        }

    }

}

module.exports=domCSS
;
