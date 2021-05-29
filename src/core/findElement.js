import {each, has, count, getKey, where, clone, getTypeof} from 'structkit';
import getDomAttr from './getDomAttr';

/**
 * Check if object or value
 *
 * @since 1.0.1
 * @category Seq
 * @param {string} tar_m_sub The first number in an addition.
 * @param {Object} ar The second number in an addition.
 * @param {Object} bool The second number in an addition.
 * @returns {Array|Object} Returns the total.
 * @example
 *
 * parentchild("first",element,1)
 * // => {'as':2}
 */
function findElement (tar_m_sub, ar, bool) {

    const tar_m_split=tar_m_sub.split("=>");
    const tar_m=(tar_m_split.length==0
        ?tar_m_sub
        :tar_m_split[0]).trim();

    if (bool) {

        var node=clone(ar);


	   ar.splice(0, ar.length);

    } else {

        var node=[];

        node.push(document);

    }

    const tar=tar_m.split(",");

    for (const ni in node) {

	   for (const ti in tar_m) {

       if ((/\[/g).test(tar[ti])) {

                var fl_m="";
                var fl_type="where";
                var fl_va=[];
                var fl_va_cntnt={};
                var fl_va_cntnt_all=[];
                var fl_va_attr_all=[];
                let replc_str=tar[ti].replace(/([a-zA-Z\-\_]{0,}|\*)\[([\w\s\d\=\_\-\[\]\'\"\;\:]{1,})\]/gm, function (m, m1, m2, m3) {


               const m2_split_count=m2.split(";");

               each(m2_split_count, function (sck, scv) {

                        const m2_split_cnt=scv.split("=");

                        if (count(m2_split_cnt)==1) {

                       fl_va_attr_all.push(m2_split_cnt[0].trim());

                   }
                        if (count(m2_split_cnt)>=2) {

                       fl_va.push(m2_split_cnt[0].trim());
                       if (has(m2_split_cnt[1].trim())) {

                                fl_va_cntnt[m2_split_cnt[0].trim()]=m2_split_cnt[1].trim().replace(/[\'\"]{0,}/g, "");

                            } else {

                                fl_va_cntnt_all.push(m2_split_cnt[1].trim());

                            }

                   }

                    });
               fl_type="where";

               fl_m=m1;

               return "asd";

           });


                let fl_m_tot=fl_m;


                if (has(node[ni].getElementsByTagName(fl_m_tot))) {

               const node_elem=node[ni].getElementsByTagName(fl_m_tot);

               for (var i=0, j=node_elem.length; i<j; i++) {

                        if (fl_type=="where") {

                       if (count(fl_va_cntnt)>0 || count(fl_va_cntnt_all)>0 || count(fl_va_attr_all)>0) {

                                var get_attr=getDomAttr(node_elem[i], fl_va);

                                if (count(fl_va_cntnt_all)>0) {

                               const get_attr_key=getKey(get_attr);

                               if (count(get_attr_key)==count(fl_va_cntnt_all) && count(where(get_attr, fl_va_cntnt))>0) {

                                        ar.push(node_elem[i]);

                                    }

                           } else {

                               if (count(where(get_attr, fl_va_cntnt))>0) {

                                        ar.push(node_elem[i]);

                                    }

                           }
                                if (count(fl_va_attr_all)>0) {

                               for (const kl in fl_va_attr_all) {

                                        var get_attr=getDomAttr(node_elem[i], fl_va_attr_all[kl]);

                                        if (has(get_attr, fl_va_attr_all[kl])) {

                                       ar.push(node_elem[i]);

                                   }

                                    }

                           }

                            }


                   }
                        if (fl_type=="all") {

                       ar.push(node_elem[i]);

                   }

                    }

           }

            } else if ((/#/g).test(tar[ti])) {

           const replce_dom=tar[ti].toString().replace(/^[#]/g, "");
           const idd_m=document.getElementById(replce_dom);

           if (has(idd_m)) {

                    ar.push(idd_m);

                }

       } else if ((/([a-zA-Z\-\_]{0,}\.[a-zA-Z0-9_\-]{1,})/g).test(tar[ti])) {


                let s_node =document;
                let match_dom=tar[ti].toString().match(/([a-zA-Z\-\_]{0,}\.[a-zA-Z0-9_\-]{1,})/g, "");


                if (match_dom.length==0) {

               return false;

           }

                let main_class = match_dom[0].split(".");


                if ((/\w/g).test(main_class[0])) {

               cls_name=main_class[1];
               cls_tag=main_class[0];

           } else {

               cls_name=main_class[1];
               cls_tag="*";

           }

                if (s_node.getElementsByTagName(cls_tag)!=null && s_node.getElementsByTagName(cls_tag)!=undefined) {

               var els = s_node.getElementsByTagName(cls_tag);

               for (var i=0, j=els.length; i<j; i++) {

                        let class_name_string = els[i].className;

                        if (getTypeof(class_name_string) == "object") {

                            // SVG classs interpreter
                       if (has(class_name_string, "animVal")) {

                                class_name_string = class_name_string.animVal;

                            }

                   }
                        const r = new RegExp("(?:^| )(" + cls_name + ")(?: |$)"),
			 m = (""+class_name_string).match(r);
			 const var_return = !!m;

			  if (var_return) {

      ar.push(els[i]);

  }

                    }

           }

            } else {

                if (has(node[ni].getElementsByTagName(tar[ti]))) {

               var els = node[ni].getElementsByTagName(tar[ti]);

               for (let i1=0, j1=els.length; i1<j1; i1++) {

                        ar.push(els[i1]);

                    }

           }

            }

   }

    }

    each(tar_m_split, function (cek, cev) {

        if (cek>0) {

            findElement(cev, ar, bool);

        }

    });

}

export default findElement;
