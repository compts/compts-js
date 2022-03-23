const {indexOf, has} =  require('structkit'); 
;
const dom =  require('../../module/dom/index'); 
;

const comptsWindow = window;

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

module.exports=elemDelegateEvent
;
