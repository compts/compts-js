/**
 * Search Sub element
 *
 * @since 2.0.1
 * @category DOM
 * @param {object} _el The second number in an addition.
 * @returns {Class} Returns the total.
 * @example
 *
 * dom("body").findElem("div")
 * // => ElementTrigger{element: Array(1), parent_child: null}element: Array(1)0: div#idlength: 1__proto__: Array(0)parent_child: null__proto__: Object
 */
function domOffset (_el) {

    let gleft = 0,
        gtop = 0,
        rect = {};
    const target = _el,
        target_height = target.offsetHeight,
        target_width = target.offsetWidth;


    const lcwps = function (_parent) {

        if (_parent===false) {

            gleft += _parent.offsetLeft;
            gtop += _parent.offsetTop;
            lcwps(_parent.offsetParent);

        } else {

            rect = {

                "bottom": target.offsetTop + gtop + target_height,
                "left": target.offsetLeft + gleft,
                "right": target.offsetLeft + gleft + target_width,
                "top": target.offsetTop + gtop

            };

        }

    };

    lcwps(target.offsetParent);

    return rect;

}

export default domOffset;
