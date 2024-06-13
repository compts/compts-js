import {each, has} from 'structkit';
import assignElementDistinction from './assignElementDistinction';
import findElement from './findElement';
import ElementTrigger from '../lib/dom/index';

/**
 * Check if object or value
 *
 * @since 1.0.1
 * @category Seq
 * @returns {Array|Object} Returns the total.
 * @example
 *
 * parentchild("first",element,1)
 * // => {'as':2}
 */
function PsExtender () {

    // Dead code

}

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

export default PsExtender;
