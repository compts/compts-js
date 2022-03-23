const parentchild =  require('./parentchild'); 
;
const {getTypeof, indexOf, ifUndefined} =  require('structkit'); 
;


/**
 * Check if object or value
 *
 * @since 1.0.1
 * @category Seq
 * @param {string} bools The first number in an addition.
 * @param {string} glb The first number in an addition.
 * @param {Object} key The second number in an addition.
 * @param {number} valu The second number in an addition.
 * @returns {object} sad
 * @example
 *
 * assignElementDistinction("first",element,1)
 * // => {'as':2}
 */
function glgFuncAssign (bools, glb, key, valu) {

    if (getTypeof(bools)==="array") {

        glb.push(valu[key]);

    } else {

        glb[key]=valu;

    }

}

/**
 * Check if object or value
 *
 * @since 1.0.1
 * @category Seq
 * @param {string} dom The first number in an addition.
 * @param {Object} assn The second number in an addition.
 * @param {number} bools The second number in an addition.
 * @returns {Array|Object} Returns the total.
 * @example
 *
 * assignElementDistinction("first",element,1)
 * // => {'as':2}
 */
function assignElementDistinction (dom, assn, bools) {

    const assn_splt=ifUndefined(assn, "").split("::");

    const glb=bools;

    if (assn_splt.length===1) {

        for (const td in dom) {

            glgFuncAssign(bools, glb, td, dom);

        }

        return bools;

    } else if (assn_splt.length==2) {

        const spl2=assn_splt[1];

        const fltr=[
            "first",
            "haschild",
            "hasChildNodes",
            "last",
            "even",
            "odd"
        ];
        let cnt=0;

        for (const td1 in dom) {

            if (dom.length>cnt) {

                if (indexOf(fltr, spl2)>=0) {

                    if (parentchild(spl2, dom, td1)) {

                        glgFuncAssign(bools, glb, td1, dom);

                    }

                }

            }
            let type_pos="";
            let index_pos="";

            if ((/([\w\-\_]{1,})(\(\d\))/g).test(spl2)) {

                const replc=spl2.replace(/([\w\-\_]{1,})\((\d)\)/g, function (g, g1, g2) {

                    type_pos=g1;
                    index_pos=g2;

                });


                if (type_pos=="eq") {

                    glb[index_pos]=dom;
                    glgFuncAssign(bools, glb, index_pos, dom);

                }
                if (type_pos=="noteq") {

                    if (td1!=index_pos) {

                        glgFuncAssign(bools, glb, td1, dom);

                    }

                }

            }

            cnt++;

        }

        return glb;

    }


    return {};

}

module.exports=assignElementDistinction
;
