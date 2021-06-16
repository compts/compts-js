import {each, has} from 'structkit';
import assignElementDistinction from './assignElementDistinction';
import findElement from './findElement';
import ElementTrigger from '../lib/dom/index';

function PsExtender () {}

PsExtender.prototype.extendElement= function (id) {

    const ps_ob=new ElementTrigger(id);

    return ps_ob;


};

PsExtender.prototype.tag_value= function (tar, ar) {


    const tar_sub=tar.split("=>");

    each(tar_sub, function (eck, ecv) {

        findElement(ecv, ar, eck>0);

    });

};

PsExtender.prototype.init= function (str, ar) {


    const ar_s=[];


    const chd_dom=str.toString().match(/^[#.\w]{0,1}/g);

    if (chd_dom===null) {

        return document;

    }

    this.tag_value(str, ar_s);

    return assignElementDistinction(ar_s, str, ar);

};

PsExtender.prototype.domQuerySelector= function (idss, ar) {

    if (ar.length ===0 && has(document.querySelectorAll)) {

        for (const tKey in idss) {

            if (has(idss[tKey])) {

                const str_sub=idss[tKey].split("=>");

                const dataElem = document.querySelectorAll(str_sub[0]);

                for (const key in dataElem) {

                    if (has(dataElem[key])) {

                        ar.push(dataElem[key]);

                    }

                }

            }

        }

    }

};

export default PsExtender;
