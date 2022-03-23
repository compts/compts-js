const elemDelegateEvent =  require('../../../core/dom/elemDelegateEvent'); 
;
const dom =  require('../../dom/index'); 
;
const {has} =  require('structkit'); 
;


const comptsWindow = window;

if (has(comptsWindow, "comptsControl") ===false) {

    comptsWindow.comptsControl = {};
    comptsWindow.comptsControl.delegation_record_list=[];

}

/**
 * Get not Sub element
 *
 * @since 2.0.1
 * @category DOM
 * @param {String} evnt The second number in an addition.
 * @param {String} target_element The second number in an addition.
 * @param {String} func The second number in an addition.
 * @returns {Class} Returns the total.
 * @example
 *
 * dom("body")
 * // => ElementTrigger{element: Array(1), parent_child: null}element: Array(1)0: div#idlength: 1__proto__: Array(0)parent_child: null__proto__: Object
 */
function delegate (evnt, target_element, func) {


    this.on("click,touchstart", function () {

        comptsWindow.comptsControl.delegation_record_list=[];

        dom(target_element).each(function (ev) {

            elemDelegateEvent(ev, evnt, func, false);

        });

    });

    return this;

}

module.exports=delegate
;
