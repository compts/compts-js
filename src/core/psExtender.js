import {each} from 'structkit';
import assignElementDistinction from './assignElementDistinction';
import findElement from './findElement';
import ElementTrigger from '../lib/dom/index';

function PsExtender () { }

PsExtender.prototype.extend={
    "class_extnd" (clas, id) {

        for (const key in clas) {

            id[key] = clas[key];

        }

        return id;

    },

    "obj_extnd" (id) {

        const ps_ob=new ElementTrigger(id);

        return ps_ob;

    }

};

PsExtender.prototype.dom={

    "html": {
        "hasClass" (str, klass) {

            const r = new RegExp("(?:^| )(" + klass + ")(?: |$)"),
                m = (""+str).match(r);


            return m
                ? m[1]
                : null;

        },
        "tag_value" (tar, ar) {

            const tar_sub=tar.split("=>");

            each(tar_sub, function (eck, ecv) {

                findElement(ecv, ar, eck>0);

            });


        }


    },

    "init" (str, ar) {

        const ar_s=[];


        const chd_dom=str.toString().match(/^[#.\w]{0,1}/g);

        if (chd_dom===null) {

            return document;

        }

        this.html.tag_value(str, ar_s);

        return assignElementDistinction(ar_s, str, ar);

    }
};

export default PsExtender;
