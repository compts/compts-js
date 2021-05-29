import {has} from 'structkit';
import attr from './lib/attr';
import css from './lib/css';
import each from './lib/each';
import getLength from './lib/getLength';
import getDom from './lib/getDom';
import getIndexAttr from './lib/getIndexAttr';
import show from './lib/show';
import hide from './lib/hide';
import removeAttr from './lib/removeAttr';
import tagName from './lib/tagName';
import findElem from './lib/findElem';
import getSelected from './lib/getSelected';
import getFormAttr from './lib/getFormAttr';
import getSelectedCount from './lib/getSelectedCount';
import getSelectedText from './lib/getSelectedText';
import setSelected from './lib/setSelected';
import toggleDisplay from './lib/toggleDisplay';
import getParent from './lib/getParent';
import insertHtml from './lib/insertHtml';
import index from './lib/index';
import isDomNull from './lib/isDomNull';
import getChildPosition from './lib/getChildPosition';
import domView from './lib/domView';

const elementConfig = {};

elementConfig.appendhtml=[
    [
        "after",
        "afterend"
    ],
    [
        "before",
        "beforebegin"
    ],
    [
        "prepend",
        "afterbegin"
    ],
    [
        "append",
        "beforeend"
    ]
];
elementConfig.styletype= [
    'width',
    'display',
    'height',
    'visible'
];
elementConfig.domview=[
    'val',
    'html',
    'text',
    'outerhtml'
];

elementConfig.child= [
    [
        "firstChild",
        "first"
    ],
    [
        "haschild",
        "haschild"
    ],
    [
        "hasChildNodes",
        "hasChildNodes"
    ],
    [
        "childNodes",
        "hasChildNodes"
    ],
    [
        "lastChild",
        "last"
    ],
    [
        "even",
        "even"
    ],
    [
        "odd",
        "odd"
    ]
];

elementConfig.styletype=[
    'width',
    'display',
    'height',
    'visible'
];

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
ElementTrigger.prototype.each = each;
ElementTrigger.prototype.show = show;
ElementTrigger.prototype.hide = hide;
ElementTrigger.prototype.getIndexAttr = getIndexAttr;
ElementTrigger.prototype.getDom = getDom;
ElementTrigger.prototype.getLength = getLength;
ElementTrigger.prototype.removeAttr = removeAttr;
ElementTrigger.prototype.tagName = tagName;
ElementTrigger.prototype.findElem = findElem;
ElementTrigger.prototype.getSelected = getSelected;
ElementTrigger.prototype.index = index;
ElementTrigger.prototype.getSelectedText = getSelectedCount;
ElementTrigger.prototype.getSelectedText = getSelectedText;
ElementTrigger.prototype.setSelected = setSelected;
ElementTrigger.prototype.toggleDisplay = toggleDisplay;
ElementTrigger.prototype.getParent = getParent;
ElementTrigger.prototype.getFormAttr = getFormAttr;
ElementTrigger.prototype.insertHtml = insertHtml;
ElementTrigger.prototype.isDomNull = isDomNull;
ElementTrigger.prototype.getChildPosition = getChildPosition;
ElementTrigger.prototype.domView = domView;

for (const f2 in elementConfig.child) {

    if (has(elementConfig.child[f2])) {

        (function(m1, m2) {

            ElementTrigger.prototype[m1]=function(){
            this.parent_child="node::"+m2;
            return this;

        }

    })(elementConfig.child[f2][0],elementConfig.child[f2][1]);

    }

}

for (const f3 in elementConfig.appendhtml) {

    if (has(elementConfig.appendhtml[f3])) {

        (function(m1,m2){

            ElementTrigger.prototype[m1]=function(html){

            this.insertHtml(m2,html);
            return this;
            }
        })(elementConfig.appendhtml[f3][0],elementConfig.appendhtml[f3][1]);

    }

}


for (const f4 in elementConfig.styletype) {

    if (has(elementConfig.styletype[f4])) {

        (function(m){
        
            ElementTrigger.prototype["get"+m]=function(cnt){
            
            return this.css(m,cnt);
            }
            
        })(elementConfig.styletype[f4]);

    }

}

for (const f5 in elementConfig.domview) {

    if (has(elementConfig.domview[f5])) {

        (function(m){
        
            ElementTrigger.prototype[m]=function(value){
            
            return this.domView(m,value);
            }
            
        })(elementConfig.domview[f5]);

    }

}

export default ElementTrigger;
