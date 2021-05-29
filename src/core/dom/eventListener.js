import {indexOf} from 'structkit';

const remove_list_action= [];

function eventListener (elthis, c1, c2, c3, func, act_bool) {

    let var_elthis = elthis;

	 elthis.each(function (elemm, td) {

		 var_elthis=elemm;
        if (act_bool) {

	 actionevent(elemm, c1, c2, c3, func);

	 return elthis;

     }


        remove_list_action.push(elemm);
        return elthis;

    });

    return var_elthis;

}

function actionevent (elems11, ch, ie, mo, func) {

    if (elems11.attachEvent) {

        (function (elems11, ff, mob) {

            elems11.attachEvent(ie, function (se) {

                if (indexOf(remove_list_action, elems11)==-1) {

                    ff.call(elems11, se);

                }

            }, true);

        }(elems11, func, ie));

    } else {

        if (elems11.addEventListener) {


            (function (elems11, ff, mob) {

                elems11.addEventListener(ch, function (e) {

                    if (typeof e.targetTouches!=="object" && indexOf(remove_list_action, elems11)==-1) {

                        ff.call(this, e);

                    }

                }, true);

            }(elems11, func, ch));

            if (mo!=="none") {

                (function (elems11, ff, mob) {

                    elems11.addEventListener(mo, function (e) {

                        if (indexOf(remove_list_action, elems11)==-1) {

                            ff.call(this, e);

                        }

                    }, true);

                }(elems11, func, mo));

            }

        }

    }

}

export default eventListener;
