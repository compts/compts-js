import {indexOf, has} from 'structkit';
import dom from '../../module/dom/index';
import {getWindowFunction} from '../browserFunction';

const comptsWindow = getWindowFunction();

if (has(comptsWindow, "comptsControl") ===false) {

    comptsWindow.comptsControl = {};
    comptsWindow.comptsControl.delegation_record_list=[];

}
function elemDelegateEvent (elem, evnt, func) {

    dom(elem).on(evnt, function (e) {

        const self = this;

        if (e.target) {

            const elem_index = indexOf(comptsWindow.comptsControl.delegation_record_list, self);

            if (elem_index===-1) {

                func.call(this, e);
                comptsWindow.comptsControl.delegation_record_list.push(self);

            }

        }

    });

}

export default elemDelegateEvent;
