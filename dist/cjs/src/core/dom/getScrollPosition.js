/**
 * Search Sub element
 *
 * @since 2.0.1
 * @category DOM
 * @returns {Class} Returns the total.
 * @example
 *
 * dom("body").findElem("div")
 * // => ElementTrigger{element: Array(1), parent_child: null}element: Array(1)0: div#idlength: 1__proto__: Array(0)parent_child: null__proto__: Object
 */
function getScrollPosition () {

    return {
        "left": document.documentElement.scrollLeft
            ?document.documentElement.scrollLeft
            :document.body.scrollLeft,
        "top": document.documentElement.scrollTop
            ?document.documentElement.scrollTop
            :document.body.scrollTop
    };

}

module.exports=getScrollPosition
;
