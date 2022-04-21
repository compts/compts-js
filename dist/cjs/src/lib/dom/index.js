const {has} = require('structkit');

const attr = require('./lib/attr');

const css = require('./lib/css');

const each = require('./lib/each');

const empty = require('./lib/empty');

const getLength = require('./lib/getLength');

const getDom = require('./lib/getDom');

const getIndexAttr = require('./lib/getIndexAttr');

const show = require('./lib/show');

const hide = require('./lib/hide');

const removeAttr = require('./lib/removeAttr');

const remove = require('./lib/remove');

const tagName = require('./lib/tagName');

const findElem = require('./lib/findElem');

const getSelected = require('./lib/getSelected');

const getFormAttr = require('./lib/getFormAttr');

const getSelectedCount = require('./lib/getSelectedCount');

const getSelectedText = require('./lib/getSelectedText');

const setSelected = require('./lib/setSelected');

const toggleDisplay = require('./lib/toggleDisplay');

const getParent = require('./lib/getParent');

const insertHtml = require('./lib/insertHtml');

const index = require('./lib/index');

const isDomNull = require('./lib/isDomNull');

const getChildPosition = require('./lib/getChildPosition');

const domView = require('./lib/domView');

const eventListener = require('../../core/dom/eventListener');

const fade = require('./lib/fade');

const getScrollPositon = require('./lib/getScrollPositon');

const getElementOffSet = require('./lib/getElementOffSet');

const getElementDimension = require('./lib/getElementDimension');

const on = require('./lib/on');

const off = require('./lib//off');

const delegate = require('./lib//delegate');

const elementConfig = require('../../variable/internalConfig');

/**
 * Class for dom
 *
 * @since 2.0.1
 * @category DOM
 * @param {Object} value The second number in an addition.
 * @returns {Class} Returns the total.
 * @example
 *
 * dom("body")
 * // => ElementTrigger{element: Array(1), parent_child: null}element: Array(1)0: div#idlength: 1__proto__: Array(0)parent_child: null__proto__: Object
 */
function ElementTrigger (value) {

    this.element=value;

    this.parent_child=null;

}

ElementTrigger.prototype.attr = attr;
ElementTrigger.prototype.css = css;
ElementTrigger.prototype.fade = fade;
ElementTrigger.prototype.each = each;
ElementTrigger.prototype.empty = empty;
ElementTrigger.prototype.show = show;
ElementTrigger.prototype.hide = hide;
ElementTrigger.prototype.getIndexAttr = getIndexAttr;
ElementTrigger.prototype.getDom = getDom;
ElementTrigger.prototype.getLength = getLength;
ElementTrigger.prototype.remove = remove;
ElementTrigger.prototype.removeAttr = removeAttr;
ElementTrigger.prototype.tagName = tagName;
ElementTrigger.prototype.findElem = findElem;
ElementTrigger.prototype.getSelected = getSelected;
ElementTrigger.prototype.index = index;
ElementTrigger.prototype.getScrollPositon = getScrollPositon;
ElementTrigger.prototype.getElementOffSet = getElementOffSet;
ElementTrigger.prototype.getElementDimension = getElementDimension;
ElementTrigger.prototype.getSelectedCount = getSelectedCount;
ElementTrigger.prototype.getSelectedText = getSelectedText;
ElementTrigger.prototype.setSelected = setSelected;
ElementTrigger.prototype.toggleDisplay = toggleDisplay;
ElementTrigger.prototype.getParent = getParent;
ElementTrigger.prototype.getFormAttr = getFormAttr;
ElementTrigger.prototype.insertHtml = insertHtml;
ElementTrigger.prototype.isDomNull = isDomNull;
ElementTrigger.prototype.getChildPosition = getChildPosition;
ElementTrigger.prototype.domView = domView;
ElementTrigger.prototype.on = on;
ElementTrigger.prototype.off = off;
ElementTrigger.prototype.delegate = delegate;

for (const f1 in elementConfig.eventListener) {

    if (has(elementConfig.eventListener[f1])) {

        const check_mobile=(/(touchstart|touchmove|touchend)/).test(elementConfig.eventListener[f1])
            ?elementConfig.eventListener[f1]
            :"none";

        (function (meth, m1, m2, m3) {

            ElementTrigger.prototype[meth]=function (func) {

                eventListener(this, m1, m2, m3, func, true);

                return this;

            };

        }(elementConfig.eventListener[f1]+'', elementConfig.eventListener[f1]+'', 'on'+elementConfig.eventListener[f1]+'', check_mobile));

    }

}

for (const f2 in elementConfig.child) {

    if (has(elementConfig.child[f2])) {

        (function (m1, m2) {

            ElementTrigger.prototype[m1]=function () {

                this.parent_child="node::"+m2;

                return this;

            };

        }(elementConfig.child[f2][0], elementConfig.child[f2][1]));

    }

}

for (const f3 in elementConfig.appendhtml) {

    if (has(elementConfig.appendhtml[f3])) {

        (function (m1, m2) {

            ElementTrigger.prototype[m1]=function (html) {

                this.insertHtml(m2, html);

                return this;

            };

        }(elementConfig.appendhtml[f3][0], elementConfig.appendhtml[f3][1]));

    }

}

for (const f4 in elementConfig.styletype) {

    if (has(elementConfig.styletype[f4])) {

        (function (meth) {

            ElementTrigger.prototype["get"+meth]=function (cnt) {

                return this.css(meth, cnt);

            };

        }(elementConfig.styletype[f4]));

    }

}

for (const f5 in elementConfig.domview) {

    if (has(elementConfig.domview[f5])) {

        (function (meth) {

            ElementTrigger.prototype[meth] = function (value) {

                return this.domView(meth, value);

            };

        }(elementConfig.domview[f5]));

    }

}

for (const f6 in elementConfig.elemfade) {

    if (has(elementConfig.elemfade[f6])) {

        (function (meth) {

            ElementTrigger.prototype[meth]=function (intrvl, fncmthd) {

                return this.fade(meth.toLowerCase(), intrvl, fncmthd);

            };

        }(elementConfig.elemfade[f6]));

    }

}

module.exports=ElementTrigger
;
