const CoreElementInit =  require('../../../core/coreElementInit'); 
;
const getScrollPosition =  require('../../../core/dom/getScrollPosition'); 
;
const {count} =  require('structkit'); 
;


/**
 * Get scrolll position
 *
 * @since 2.0.1
 * @category DOM
 * @returns {Object} Returns the total.
 * @example
 *
 * dom("div").getScrollPositon()
 * // => false
 */
function getScrollPositon () {

    const core = new CoreElementInit(this);

    const arryElem=[];

    core.each(function (element) {

        const rect = element.getBoundingClientRect();
        const scrollTop = getScrollPosition().top;

        const scrollLeft = getScrollPosition().left;
        const elementTop = rect.top+scrollTop;
        const elementLeft = rect.left+scrollLeft;

        arryElem.push({"left": elementLeft,
            "top": elementTop});


    });

    return count(arryElem)===1
        ? arryElem[0]
        : arryElem;

}

module.exports=getScrollPositon
;
