import {each, getTypeof, has} from 'structkit';
import PsExtender from './psExtender';

const domCoreAssign=(function () {

    const doc_set=function (idss) {

        const domm=[];
        const ps_ext=new PsExtender();

        try {

            if (getTypeof(idss)==="object") {

                domm.push(idss);

            } else if (getTypeof(idss)==="array") {

                each(idss, function (key, val) {

                    if (getTypeof(val)==="object") {

                        domm.push(val);

                    } else if (getTypeof(val)==="string") {

                        ps_ext.dom.init(val, domm);

                    }

                });

            } else {

                const doc_loop=idss.toString().split(",");

                for (const tKey in doc_loop) {

                    if (has(doc_loop[tKey])) {

                        ps_ext.dom.init(doc_loop[tKey], domm);

                    }


                }

            }

        } catch (error) {

            console.log(error);

        }

        return ps_ext.extend.obj_extnd(domm);


    };


    return {

        "doc" (id) {

            return doc_set(id);

        }


    };

}());

export default domCoreAssign;
