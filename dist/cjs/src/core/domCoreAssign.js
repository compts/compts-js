const {each, getTypeof, has, toString, count ,isEmpty} = require('structkit');

const PsExtender = require('./psExtender');

const domCoreAssign=function (id) {

    const doc_set=function (idss) {

        const domm=[];
        const ps_ext=new PsExtender();

        try {

            if (getTypeof(idss)==="object") {

                if (count(idss) === 0) {

                    domm.push(idss);

                } else {

                    each(idss, function (__, val) {

                        domm.push(val);

                    });

                }

            } else if (getTypeof(idss)==="array") {

                each(idss, function (key, val) {

                    if (getTypeof(val)==="object") {

                        domm.push(val);

                    } else if (getTypeof(val)==="string") {

                        ps_ext.init(val, domm);

                    }

                });

            } else {

                const doc_loop=toString(idss).split(",");

                for (const tKey in doc_loop) {

                    if (has(doc_loop[tKey])) {

                        ps_ext.init(doc_loop[tKey], domm);

                    }

                }

            }

        } catch (error) {

            console.log(error);

        }

        return ps_ext.extendElement(domm);

    };

    return doc_set(id);

};

module.exports=domCoreAssign
;
