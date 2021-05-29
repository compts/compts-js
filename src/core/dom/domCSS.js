import {count, each, has} from 'structkit';
import getDomAttr from './getDomAttr';

function domCSS (id, d) {

    let elem_str_class="";
    const get_attr=has(getDomAttr(id, ['style']).style)
        ?getDomAttr(id, ['style']).style
        :"";
    const split_style=get_attr.toString().split(";");

    each(split_style, function (spk, spv) {

        const elem_d=spv.split(":");

        if (count(elem_d)>0 && has(spv)) {

            if (!has(d, elem_d[0]) && has(elem_d[1])) {

                const ele_key=elem_d[0].replace(/\s/, "");
                const ele_val=elem_d[1].replace(/\s/, "");

                if (!has(d[ele_key])) {

                    d[ele_key]=ele_val;

                }

            }

        }

    });

    for (const v in d) {

        elem_str_class+=v+":"+d[v]+";";
        if (has(id)) {

            try {

                if (has(id.style.setAttribute)) {

                    id.style.setAttribute(v, d[v]);

                }

            } catch (e) {

                console.log(e);

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

        } catch (e) {

            console.log(e);

        }

    }

}

export default domCSS;
