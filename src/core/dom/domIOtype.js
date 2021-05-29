import {has} from 'structkit';

function domIOtype (type, dom, htmll) {

    const main_dom=null;

    if ((/\b(val)\b/g).test(type)) {

        const alt_val=this.get_attr(dom, "ps_alt_value");

        if (has(htmll)) {

            dom.value=htmll;

        }
        if (has(alt_val, "ps_alt_value") && dom.value.trim().length==0) {

            return alt_val.ps_alt_value;

        }

        return dom.value;


    }
    if ((/\b(html)\b/g).test(type)) {

        if (has(htmll)) {

            dom.innerHTML=htmll;

        }

        return dom.innerHTML;

    }
    if ((/\b(text)\b/g).test(type)) {

        if (has(htmll)) {

            !has(dom.innerText)
                ?dom.textContent
                :dom.innerText=htmll;

        }

        return !has(dom.innerText)
            ?dom.textContent
            :dom.innerText;

    } if ((/\b(outerhtml)\b/g).test(type)) {

        if (has(htmll)) {

            dom.outerHTML=htmll;

        }

        return dom.outerHTML;

    }

}
export default domIOtype;
