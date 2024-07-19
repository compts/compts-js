const global=exports
var globalConfig = {};

;

global.globalConfig=globalConfig
var elementConfig = {};

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
    ],
    [
        "appendChild",
        "appendChild"
    ]
];

elementConfig.eventListener=[
    'scroll',
    'focus',
    'blur',
    'change',
    'abort',
    'error',
    'click',
    'dblclick',
    'mousemove',
    'mouseout',
    'mouseover',
    'mousedown',
    'mouseup',
    'mouseenter',
    'mouseleave',
    'resize',
    'keydown',
    'keyup',
    'keypress',
    'touchstart',
    'touchmove',
    'touchend',
    'contextmenu',
    'drag',
    'dragstart',
    'dragend',
    'dragover',
    'dragenter',
    'dragleave',
    'drop'
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

elementConfig.elemfade=[
    'fadeIn',
    'fadeOut',
    'fadeTo',
    'fadeToggle'
];

;

global.elementConfig=elementConfig
/**
 * Check if document is ready
 * @since 1.0.1
 * @category Seq
 * @param {Object} func The first number in an addition.
 * @example  documentReady(function(){})
 * @returns {Array|Object} Returns the total.
 * null
 */
function documentReady (func) {

    var root = window;

    var dom_rdy_ctt=0;

    if (dom_rdy_ctt===0) {

        if (root.attachEvent) {

            // DOMContentLoaded
            root.attachEvent("onload", dom_load_ready);
            root.attachEvent("onreadystatechange", dom_load_ready);

        } else if (root.addEventListener) {

            root.addEventListener("load", dom_load_ready, false);

        }

    }
    var fails=false;

    var dom_load_ready =function () {

        if (document.readyState==="complete" && fails === false) {

            func();
            dom_rdy_ctt+=1;
            fails=true;

        }

    };

    var set_intr=null;

    set_intr=setInterval(function () {

        if (document.readyState==="complete" && fails === false) {

            dom_rdy_ctt+=1;
            fails=true;
            clearInterval(set_intr);
            func();

        }

    }, 100);

    return null;

}

;
/**
 * Check if HTML is rendered completed
 *
 * @since 2.0.1
 * @category DOM
 * @param {function} func The second number in an addition.
 * @returns {Object} Returns the total.
 * @example
 *
 * control(function(){})
 * // => null
 */
function control (func) {

    return documentReady(func);

}
;

global.control=control

/**
 * Check if object or value
 *
 * @since 2.0.1
 * @category DOM
 * @returns {Object} Returns the total.
 * @example
 *
 * dom("body")
 * // => ElementTrigger{element: Array(1), parent_child: null}element: Array(1)0: div#idlength: 1__proto__: Array(0)parent_child: null__proto__: Object
 */
function element () {}
;

global.element=element
/**
 * Check if object or value
 *
 * @since 1.0.1
 * @category Seq
 * @param {string} child_prnt The first number in an addition.
 * @param {Object} de The second number in an addition.
 * @param {number} cnt The second number in an addition.
 * @returns {Array|Object} Returns the total.
 * @example
 *
 * parentchild("first",element,1)
 * // => {'as':2}
 */
function parentchild (child_prnt, de, cnt) {

    if (child_prnt===null) {

        return true;

    } else if (child_prnt==="first") {

        if (parseInt(cnt)===0) {

            return true;

        }

    } else if (child_prnt==="last") {

        if (de.length-1===parseInt(cnt)) {

            return true;

        }

        return false;

    } else if (child_prnt==="haschild") {

        if (de[cnt].children.length>0) {

            return true;

        }

    } else if (child_prnt==="hasChildNodes") {

        if (de[cnt].hasChildNodes()) {

            return true;

        }

    } else if (child_prnt==="odd" || child_prnt==="even") {

        var sel={
            "even": 0,
            "odd": 1
        };

        if (cnt%2===sel[child_prnt]) {

            return true;

        }

    } else if (child_prnt==="childNodes") {

        if (de.childNodes.length > 0) {

            return true;

        }

    }

    return false;

}

;
/**
 * Check if object or value
 *
 * @since 1.0.1
 * @category Seq
 * @param {string} bools The first number in an addition.
 * @param {string} glb The first number in an addition.
 * @param {Object} key The second number in an addition.
 * @param {number} valu The second number in an addition.
 * @returns {object} sad
 * @example
 *
 * assignElementDistinction("first",element,1)
 * // => {'as':2}
 */
function glgFuncAssign (bools, glb, key, valu) {

    if (_stk.getTypeof(bools)==="array") {

        glb.push(valu[key]);

    } else {

        glb[key]=valu;

    }

}

/**
 * Check if object or value
 *
 * @since 1.0.1
 * @category Seq
 * @param {string} dom The first number in an addition.
 * @param {Object} assn The second number in an addition.
 * @param {number} bools The second number in an addition.
 * @returns {Array|Object} Returns the total.
 * @example
 *
 * assignElementDistinction("first",element,1)
 * // => {'as':2}
 */
function assignElementDistinction (dom, assn, bools) {

    var assn_splt=_stk.ifUndefined(assn, "").split("::");

    var glb=bools;

    if (assn_splt.length===1) {

        for (var td in dom) {

            glgFuncAssign(bools, glb, td, dom);

        }

        return bools;

    } else if (assn_splt.length==2) {

        var spl2=assn_splt[1];

        var fltr=[
            "first",
            "haschild",
            "hasChildNodes",
            "last",
            "even",
            "odd"
        ];
        var cnt=0;

        for (var td1 in dom) {

            if (dom.length>cnt) {

                if (_stk.indexOf(fltr, spl2)>=0) {

                    if (parentchild(spl2, dom, td1)) {

                        glgFuncAssign(bools, glb, td1, dom);

                    }

                }

            }
            var type_pos="";
            var index_pos="";

            if ((/([\w\-\_]{1,})(\(\d\))/g).test(spl2)) {

                var replc=spl2.replace(/([\w\-\_]{1,})\((\d)\)/g, function (g, g1, g2) {

                    type_pos=g1;
                    index_pos=g2;

                });

                if (type_pos=="eq") {

                    glb[index_pos]=dom;
                    glgFuncAssign(bools, glb, index_pos, dom);

                }
                if (type_pos=="noteq") {

                    if (td1!=index_pos) {

                        glgFuncAssign(bools, glb, td1, dom);

                    }

                }

            }

            cnt++;

        }

        return glb;

    }

    return {};

}

;
/**
 * Check if object or value
 *
 * @since 2.0.1
 * @category Seq
 * @param {string} meth The first number in an addition.
 * @param {Object} domValue The second number in an addition.
 * @returns {Array|Object} Returns the total.
 * @example
 *
 * getDomAttr("first",element,1)
 * // => {'as':2}
 */
function getDomAttr (meth, domValue) {

    var attr_type=_stk.getTypeof(domValue)==="array"
        ?domValue
        :[domValue];
    var globl={};

    if (_stk.has(meth)) {

        if (_stk.has(meth.getAttributeNode)) {

            _stk.each(attr_type, function (ky, vl) {

                if (meth.getAttributeNode(vl)) {

                    globl[vl]=meth.getAttributeNode(vl).value;

                }

            });

        } else {

            _stk.each(attr_type, function (ky, vl) {

                if (meth.getAttribute) {

                    globl[vl]=meth.getAttribute(vl);

                }

            });

        }

    }

    return globl;

}

;
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

    var tar_m_split=tar_m_sub.split("=>");
    var tar_m=(tar_m_split.length === 0
        ?tar_m_sub
        :tar_m_split[0]).trim();

    var node=[];

    if (bool) {

        node=_stk.clone(ar);
        ar.splice(0, ar.length);

    } else {

        node.push(document);

    }

    var tar=tar_m.split(",");

    for (var ni in node) {

        if (_stk.has(node, ni)) {

            for (var ti in tar_m) {

                if (_stk.has(tar, ti)) {

                    searchElement(tar[ti], node[ni], ar);

                }

            }

        }

    }

    _stk.each(tar_m_split, function (cek, cev) {

        if (cek>0) {

            findElement(cev, ar, bool);

        }

    });

}

/**
 * Check if object or value
 *
 * @since 2.0.1
 * @category Seq
 * @param {string} element The first number in an addition.
 * @param {any} node The first number in an addition.
 * @param {Object} ar The second number in an addition.
 * @returns {void} Returns the total.
 * @example
 *
 * parentchild("first",element,1)
 * // => {'as':2}
 */
function searchElement (element, node, ar) {

    var cls_list = [];
    var attr_list = [];
    var tag_name = "*";

    if ((/#/g).test(element)) {

        var replce_dom=element.toString().replace(/^[#]/g, "");
        var idd_m=node.getElementById(replce_dom);

        if (_stk.has(idd_m)) {

            ar.push(idd_m);

        }

    } else {

        var attrRet = element.replaceAll(/\[(.*?)\]/g, function (wrd, s1) {

            var listAttrToLook = s1.replace(/^(\[)/g, "")
                .replace(/(\])$/g, "")
                .split(",");

            _stk.each(listAttrToLook, function (__, val) {

                attr_list.push(val);

            });

            return "";

        });

        var classRet = attrRet.replaceAll(/\.([a-zA-Z0-9-]{1,})/g, function (wrd, s1) {

            cls_list.push(s1);

            return "";

        });

        if (!_stk.isEmpty(classRet)) {

            tag_name = classRet;

        }

        if (_stk.has(node.getElementsByTagName(tag_name))) {

            var listElementTags = node.getElementsByTagName(tag_name);

            for (var ii=0, jj=listElementTags.length; ii<jj;) {

                if (_stk.has(listElementTags, ii)) {

                    var isValidDom = false;

                    var elementTag = listElementTags[ii];

                    if (_stk.has(elementTag.className)) {

                        var elementClass = elementTag.className.split(/\s{1,}/);

                        if (_stk.isEmpty(elementClass) && _stk.isEmpty(cls_list)) {

                            isValidDom = true;

                        } else {

                            if (_stk.isExact(cls_list, elementClass)) {

                                isValidDom = true;

                            }

                        }

                    }

                    if (!_stk.isEmpty(attr_list)) {

                        var attrListCount = _stk.count(attr_list);
                        var counterValidType = 0;

                        _stk.each(attr_list, function (__, val) {

                            var getAttrAt = getAttrTypeValue(val);
                            var getAttrVal = getDomAttr(elementTag, getAttrAt.name);

                            if (!_stk.isEmpty(getAttrVal)) {

                                if (validateTypeValue(getAttrAt.value, getAttrVal[getAttrAt.name], getAttrAt.type)) {

                                    counterValidType += 1;

                                }

                            }

                        });

                        isValidDom = counterValidType === attrListCount;

                    }

                    if (isValidDom) {

                        ar.push(elementTag);

                    }

                }

                ii += 1;

            }

        }

    }

}

/**
 * Check if object or value
 *
 * @since 2.0.1
 * @category Seq
 * @param {string} value The first number in an addition.
 * @returns {any} Returns the total.
 * @example
 *
 * parentchild("first",element,1)
 * // => {'as':2}
 */
function getAttrTypeValue (value) {

    var splitEq = value.split(/\b(=)\b/g);

    if (_stk.count(splitEq) === 3) {

        return {
            "name": splitEq[0],
            "type": "eq",
            "value": splitEq[2]
        };

    }

    var splitCongruent = value.split(/\b(~=)\b/g);

    if (_stk.count(splitCongruent) === 3) {

        return {
            "name": splitCongruent[0],
            "type": "congruent",
            "value": splitCongruent[2]
        };

    }

    var splitStart = value.split(/\b(\^=)\b/g);

    if (_stk.count(splitStart) === 3) {

        return {
            "name": splitStart[0],
            "type": "startWith",
            "value": splitStart[2]
        };

    }

    var splitEnd = value.split(/\b(\$=)\b/g);

    if (_stk.count(splitEnd) === 3) {

        return {
            "name": splitEnd[0],
            "type": "endWith",
            "value": splitEnd[2]
        };

    }

    var splitMatch = value.split(/\b(\*=)\b/g);

    if (_stk.count(splitMatch) === 3) {

        return {
            "name": splitMatch[0],
            "type": "match",
            "value": splitMatch[2]
        };

    }

    var splitStarting = value.split(/\b(\|=)\b/g);

    if (_stk.count(splitStarting) === 3) {

        return {
            "name": splitStarting[0],
            "type": "starting",
            "value": splitStarting[2]
        };

    }

    var splitNotIn = value.split(/\b(!=)\b/g);

    if (_stk.count(splitNotIn) === 3) {

        return {
            "name": splitNotIn[0],
            "type": "notin",
            "value": splitNotIn[2]
        };

    }

    return {
        "name": "",
        "type": "invalid",
        "value": ""
    };

}

/**
 * Check if object or value
 *
 * @since 2.0.1
 * @category Seq
 * @param {string} value The first number in an addition.
 * @param {string} value1 The first number in an addition.
 * @param {string} type The first number in an addition.
 * @returns {any} Returns the total.
 * @example
 *
 * parentchild("first",element,1)
 * // => {'as':2}
 */
function validateTypeValue (value, value1, type) {

    if (type === "eq") {

        return value === value1;

    }
    if (type === "notin") {

        return value !== value1;

    }
    if (type === "startWith") {

        var regexp = new RegExp("^("+value+")", "g");

        return regexp.test(value1);

    }
    if (type === "endWith") {

        var regexp = new RegExp("("+value+")$", "g");

        return regexp.test(value1);

    }

    if (type === "match") {

        var regexp = new RegExp("("+value+")", "g");

        return regexp.test(value1);

    }

    if (type === "congruent") {

        var regexp = value.split(/[\s]{1,}/);

        return _stk.indexOfExist(regexp, value1);

    }

    if (type === "starting") {

        var regexp = value1.split(/[_-]/);

        return _stk.indexOf(regexp, value) === 0;

    }

    return false;

}
;
function CoreElementInit (dom) {

    this.element = dom.element;
    this.parent_child= dom.parent_child;

}

CoreElementInit.prototype.each = function (func) {

    var cnt=0;
    var ele_cnt=this.element;
    var prnt_chld=this.parent_child;

    var ass_elem=assignElementDistinction(this.element, prnt_chld, {});

    for (var td in ass_elem) {

        (function (func, d, m) {

            if (ele_cnt.length>cnt) {

                func(m[d], d);

            }
            cnt++;

        }(func, td, this.element));

    }

};

;
/**
 * Get or set css element
 *
 * @since 2.0.1
 * @category DOM
 * @param {any} meth The second number in an addition.
 * @param {any} dk The second number in an addition.
 * @returns {Class} Returns the total.
 * @example
 *
 * dom("body").css()
 * // => ElementTrigger{element: Array(1), parent_child: null}element: Array(1)0: div#idlength: 1__proto__: Array(0)parent_child: null__proto__: Object
 */
function getDomAttr (meth, dk) {

    var attr_type=_stk.getTypeof(dk)==="array"
        ?dk
        :[dk];
    var globl={};

    if (_stk.has(meth)) {

        if (_stk.has(meth.getAttributeNode)) {

            _stk.each(attr_type, function (ky, vl) {

                if (meth.getAttributeNode(vl)) {

                    globl[vl]=meth.getAttributeNode(vl).value;

                }

            });

        } else {

            _stk.each(attr_type, function (ky, vl) {

                if (meth.getAttribute) {

                    globl[vl]=meth.getAttribute(vl);

                }

            });

        }

    }

    return globl;

}

;
/**
 * Get or set css element
 *
 * @since 2.0.1
 * @category DOM
 * @param {any} res The second number in an addition.
 * @returns {Class} Returns the total.
 * @example
 *
 * dom("body").css()
 * // => ElementTrigger{element: Array(1), parent_child: null}element: Array(1)0: div#idlength: 1__proto__: Array(0)parent_child: null__proto__: Object
 */
function getElementExistAttr (res) {

    var attr_elem={};

    for (var att, i = 0, atts = res.attributes, n = atts.length; i < n; i++) {

        att = atts[i];

        attr_elem[att.nodeName]=att.nodeValue;

    }

    return attr_elem;

}

;
/**
 * Get the element attribute
 *
 * @since 2.0.1
 * @category DOM
 * @param {Object} dl The second number in an addition.
 * @param {number} bol The second number in an addition.
 * @returns {Class} Returns the total.
 * @example
 *
 * dom("body").css()
 * // => ElementTrigger{element: Array(1), parent_child: null}element: Array(1)0: div#idlength: 1__proto__: Array(0)parent_child: null__proto__: Object
 */
function attr (dl, bol) {

    var core = new CoreElementInit(this);

    var cnt=0;
    var globl={},
        globl_all=[];
    var var_bol=bol||false;

    var is_where_attr = _stk.has(dl);

    var attr_type=_stk.getTypeof(dl)==="array"
        ?dl
        :[dl];

    var typeofs = _stk.getTypeof(dl) !== "json";

    core.each(function (meth) {

        if (is_where_attr) {

            if (typeofs) {

                var get_attr=getDomAttr(meth, attr_type);

                if (var_bol===true) {

                    if (_stk.count(get_attr)>0) {

                        globl[cnt]={};
                        globl[cnt]=get_attr;
                        cnt+=1;

                    }

                } else {

                    globl[cnt]={};
                    globl[cnt]=get_attr;
                    cnt+=1;

                }

            } else {

                for (var vk in dl) {

                    if (_stk.has(dl, vk)) {

                        var crte_elem=document.createAttribute(vk);

                        crte_elem.value = dl[vk];

                        if (meth.setAttribute) {

                            meth.setAttribute(vk, dl[vk]);

                        } else {

                            meth.setAttributeNode(crte_elem);

                        }

                    }

                }

            }

        } else {

            globl_all.push(getElementExistAttr(meth));

        }

    });

    if (is_where_attr===true) {

        return typeofs==false ? this : ((cnt==1 || cnt==0)?((attr_type.length==1)?((typeof(globl[0])==="undefined")?"undefined":globl[0][dl]):globl[0]):globl);

    }
         else{
            return _stk.count(globl_all)==0?-1:(_stk.count(globl_all)==1)?globl_all[0]:globl_all;
         }   

}

;
/**
 * Get or set css element
 *
 * @since 2.0.1
 * @category DOM
 * @param {Object} dom The second number in an addition.
 * @param {number} style The second number in an addition.
 * @returns {Class} Returns the total.
 * @example
 *
 * dom("body").css()
 * // => ElementTrigger{element: Array(1), parent_child: null}element: Array(1)0: div#idlength: 1__proto__: Array(0)parent_child: null__proto__: Object
 */
function loopstyle (dom, style) {

    var golb={};
    var golb_st="";

    if (!window.getComputedStyle) {

        golb[style] = dom.currentStyle[style];
        golb_st= dom.currentStyle[style];

    } else {

        golb[style] = window.getComputedStyle(dom).getPropertyValue(style);
        golb_st= window.getComputedStyle(dom).getPropertyValue(style);

    }

    return golb_st;

}

/**
 * Get or set css element
 *
 * @since 2.0.1
 * @category DOM
 * @param {Object} ele The second number in an addition.
 * @param {Object} prop The second number in an addition.
 * @returns {Class} Returns the total.
 * @example
 *
 * dom("body").css()
 * // => ElementTrigger{element: Array(1), parent_child: null}element: Array(1)0: div#idlength: 1__proto__: Array(0)parent_child: null__proto__: Object
 */
function domGetCSS (ele, prop) {

    var golb_ret={};

    if (_stk.getTypeof(prop)==="array") {

        for (var fn in prop) {

            golb_ret[prop[fn]]=loopstyle(ele, prop[fn]);

        }

    } else if (_stk.getTypeof(prop)==="string") {

        golb_ret=loopstyle(ele, prop);

    }

    return golb_ret;

}

;
/**
 * Css core engine
 *
 * @since 2.0.1
 * @category DOM
 * @param {object} id The second number in an addition.
 * @param {object} dList The second number in an addition.
 * @returns {Class} Returns the total.
 * @example
 *
 * dom("body").findElem("div")
 * // => ElementTrigger{element: Array(1), parent_child: null}element: Array(1)0: div#idlength: 1__proto__: Array(0)parent_child: null__proto__: Object
 */
function domCSS (id, dList) {

    var elem_str_class="";
    var get_attr=_stk.has(getDomAttr(id, ['style']).style)
        ?getDomAttr(id, ['style']).style
        :"";
    var split_style=get_attr.toString().split(";");

    _stk.each(split_style, function (spk, spv) {

        var elem_d=spv.split(":");

        if (_stk.count(elem_d)>0 && _stk.has(spv)) {

            if (!_stk.has(dList, elem_d[0]) && _stk.has(elem_d[1])) {

                var ele_key=elem_d[0].replace(/\s/, "");
                var ele_val=elem_d[1].replace(/\s/, "");

                if (!_stk.has(dList[ele_key])) {

                    dList[ele_key]=ele_val;

                }

            }

        }

    });

    for (var vK in dList) {

        if (_stk.has(dList, vK)) {

            elem_str_class+=vK+":"+dList[vK]+";";

            if (_stk.has(id)) {

                try {

                    if (_stk.has(id.style.setAttribute)) {

                        id.style.setAttribute(vK, dList[vK]);

                    }

                } catch (err) {

                    console.log(err);

                }

            }

        }

    }
    if (_stk.has(id)) {

        try {

            if (_stk.has(id.setAttributeNode)) {

                var creat_elem=document.createAttribute("style");

                creat_elem.value=elem_str_class;
                id.setAttributeNode(creat_elem);

            }

        } catch (err) {

            console.log(err);

        }

    }

}

;
/**
 * Get or set css element
 *
 * @since 2.0.1
 * @category DOM
 * @param {Object} value The second number in an addition.
 * @param {number} countValue The second number in an addition.
 * @returns {Class} Returns the total.
 * @example
 *
 * dom("body").css()
 * // => ElementTrigger{element: Array(1), parent_child: null}element: Array(1)0: div#idlength: 1__proto__: Array(0)parent_child: null__proto__: Object
 */
function css (value, countValue) {

    var core = new CoreElementInit(this);

    var typeofs = _stk.getTypeof(value) === "json";

    var cntt=_stk.has(countValue) === false
        ?0
        :countValue-1;

    var val_g = {};

    core.each(function (meth, td) {

        if (typeofs) {

            domCSS(meth, value);

        } else {

            if (parseInt(td)<=cntt) {

                val_g[td]=domGetCSS(meth, value);

            }

        }

    });

    var returnValue = cntt===0
        ?val_g[0]
        :val_g;

    return typeofs
        ? this
        : returnValue;

}

;
/**
 * For loop for element
 *
 * @since 2.0.1
 * @category DOM
 * @param {function} func The second number in an addition.
 * @returns {Class} Returns the total.
 * @example
 *
 * dom("body")
 * // => ElementTrigger{element: Array(1), parent_child: null}element: Array(1)0: div#idlength: 1__proto__: Array(0)parent_child: null__proto__: Object
 */
function each (func) {

    var core = new CoreElementInit(this);

    core.each(func);

}

;
/**
 * Check if the element is empty or not
 *
 * @since 2.0.1
 * @category DOM
 * @param {Object} doms The second number in an addition.
 * @returns {Object} Returns the total.
 * @example
 *
 * dom("div").index()
 * // => 1
 */
function empty () {

    var core = new CoreElementInit(this);

    core.each(function (elemm) {

        while (elemm.firstChild) {

            elemm.removeChild(elemm.firstChild);

        }

    });

    return this;

}

;
/**
 * Get count of search element
 *
 * @since 2.0.1
 * @category DOM
 * @returns {Object} Returns the total.
 * @example
 *
 * dom("div").getLength()
 * // => 1
 */
function getLength () {

    var core = new CoreElementInit(this);

    var cnt_i=0;

    core.each(function (meth) {

        if (meth !== null) {

            if (_stk.getTypeof(meth) === "object") {

                cnt_i+=1;

            }

        }

    });

    return cnt_i;

}

;
/**
 * Get element in dom
 *
 * @since 2.0.1
 * @category DOM
 * @returns {Class} Returns the total.
 * @example
 *
 * dom("body").findElem("div")
 * // => ElementTrigger{element: Array(1), parent_child: null}element: Array(1)0: div#idlength: 1__proto__: Array(0)parent_child: null__proto__: Object
 */
function getDom () {

    var core = new CoreElementInit(this);

    var id_dm=[];

    core.each(function (meth) {

        id_dm.push(meth);

    });

    return id_dm;

}

;
/**
 * Get index attribute
 *
 * @since 2.0.1
 * @category DOM
 * @param {String} attr The second number in an addition.
 * @returns {Class} Returns the total.
 * @example
 *
 * dom("body")
 * // => ElementTrigger{element: Array(1), parent_child: null}element: Array(1)0: div#idlength: 1__proto__: Array(0)parent_child: null__proto__: Object
 */
function getIndexAttr (attr) {

    var core = new CoreElementInit(this);

    var cnt=0;
    var globl=[];

    if (_stk.getTypeof(attr)!=="json") {

        return -1;

    }

    var getkey=_stk.getKey(attr);

    core.each(function (meth) {

        var get_attr=getDomAttr(meth,getkey);

        var where_count=_stk.where(get_attr,attr);

        if (_stk.count(where_count)>0) {

            globl.push(cnt);

        }

        cnt+=1;

    });

    return _stk.count(globl)===0
	    ?-1:
	    _stk.count(globl)===1
            ?globl[0]
            :globl;

}

;
/**
 * Show Element in dom
 *
 * @since 2.0.1
 * @category DOM
 * @param {function} func The second number in an addition.
 * @returns {Object} Returns the total.
 * @example
 *
 * dom("div").show()
 * // => null
 */
function show () {

    var core = new CoreElementInit(this);

    core.each(function (meth) {

        domCSS(meth, {
            "display": ""
        });

    });

    return this;

}

;

/**
 * Set the index of children element
 *
 * @since 2.0.1
 * @category DOM
 * @param {String} value The second number in an addition.
 * @returns {Class} Returns the total.
 * @example
 *
 * dom("body")
 * // => ElementTrigger{element: Array(1), parent_child: null}element: Array(1)0: div#idlength: 1__proto__: Array(0)parent_child: null__proto__: Object
 */
function eq (value) {

    this.parent_child="node::eq("+value+")";

    return this;

}

;
/**
 * Hide Element in dom
 *
 * @since 2.0.1
 * @category DOM
 * @param {function} func The second number in an addition.
 * @returns {Object} Returns the total.
 * @example
 *
 * dom("div").hide()
 * // => null
 */
function hide () {

    var core = new CoreElementInit(this);

    core.each(function (meth) {

        domCSS(meth, {
            "display": "none"

        });

    });

    return this;

}

;
/**
 * Remove Dom attribute
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
function removeAttr (value) {

    var core = new CoreElementInit(this);

    var attr_type = _stk.getTypeof(value) === "array"
        ?value
        :new Array(value);

    core.each(function (td, meth) {

        if (meth.removeAttribute) {

            _stk.each(attr_type, function (ky, vl) {

                meth.removeAttribute(vl);

            });

        }

    });

}

;
/**
 * Remove the specific element
 *
 * @since 2.0.1
 * @category DOM
 * @param {Object} doms The second number in an addition.
 * @returns {Object} Returns the total.
 * @example
 *
 * dom("div").index()
 * // => 1
 */
function remove (doms) {

    var core = new CoreElementInit(this);

    core.each(function (elemm) {

        if (_stk.has(doms)===false) {

            if (elemm && elemm.parentNode) {

                elemm.parentNode.removeChild(document.querySelector(doms));

            }

        } else {

            if (elemm && elemm.parentNode) {

                elemm.parentNode.removeChild(elemm);

            }

        }

    });

    return this;

}

;
/**
 * Get tag name of element
 * @since 2.0.1
 * @category DOM
 * @returns {Class} Returns the total.
 * @example
 *
 * dom("body").tagName()
 * // => BODY
 */
function tagName () {

    var core = new CoreElementInit(this);

    var arry_pl=[];

    core.each(function (meth) {

        arry_pl.push(meth.tagName);

    });

    return _stk.count(arry_pl)=== 1 ?
        arry_pl[0]
        :arry_pl;

}

;
/**
 * Search for element in dom
 *
 * @since 2.0.1
 * @category DOM
 * @param {String|ElementDom} elem The second number in an addition.
 * @returns {Class} Returns the total.
 * @example
 *
 * dom("body").findElem("div")
 * // => ElementTrigger{element: Array(1), parent_child: null}element: Array(1)0: div#idlength: 1__proto__: Array(0)parent_child: null__proto__: Object
 */
function findElem (elem) {

    var core = new CoreElementInit(this);

    findElement(elem, core.element, true);

    return this;

}

;
/**
 * Get or set css element
 *
 * @since 2.0.1
 * @category DOM
 * @param {any} main The second number in an addition.
 * @param {any} bol The second number in an addition.
 * @param {any} type The second number in an addition.
 * @returns {Class} Returns the total.
 * @example
 *
 * dom("body").css()
 * // => ElementTrigger{element: Array(1), parent_child: null}element: Array(1)0: div#idlength: 1__proto__: Array(0)parent_child: null__proto__: Object
 */
function domSelectOption (main, bol, type) {

    var opt = null;
    var sel_opt='';
    var sel_opt_ar=[];
    var opt_cnt=0;
    var select_count=0;
    var booln=bol||false;

    main.each(function (td, meth) {

        if (_stk.has(meth[td])) {

            opt=meth[td].options;
            for (var i=0; i<opt.length; i++) {

                if (opt[i].selected==true) {

                    if ((/\b(value)\b/g).test(type)) {

                        sel_opt=opt[i].value;
                        sel_opt_ar.push(opt[i].value);

                    }
                    if ((/\b(text)\b/g).test(type)) {

                        sel_opt=opt[i].text;
                        sel_opt_ar.push(opt[i].text);

                    }
                    if ((/\b(count)\b/g).test(type)) {

                        select_count=i;

                    }
                    opt_cnt++;

                }

            }

        }

    });
    if ((/(value|text)/g).test(type)) {

        if (booln==false) {

            return opt_cnt>1
                ?sel_opt_ar
                :sel_opt;

        }

        return sel_opt_ar;

    }

    return select_count;

}

;
/**
 * Get the selected option in select element
 *
 * @since 2.0.1
 * @category DOM
 * @param {boolean} bol The second number in an addition.
 * @returns {Class} Returns the total.
 * @example
 *
 * dom("body")
 * // => ElementTrigger{element: Array(1), parent_child: null}element: Array(1)0: div#idlength: 1__proto__: Array(0)parent_child: null__proto__: Object
 */
function getSelected (bol) {

    var core = new CoreElementInit(this);

    return domSelectOption(core, bol, "value");

}

;
/**
 * Get or set css element
 *
 * @since 2.0.1
 * @category DOM
 * @param {any} self The second number in an addition.
 * @returns {Class} Returns the total.
 * @example
 *
 * dom("body").css()
 * // => ElementTrigger{element: Array(1), parent_child: null}element: Array(1)0: div#idlength: 1__proto__: Array(0)parent_child: null__proto__: Object
 */
function formGetValues (self) {

    var list_elem = [
        "input",
        "select",
        "textarea"
    ];
    var ret_value = [];

    self.each(function (html_form, td) {

        for (var key in list_elem) {

            if (list_elem[key] == "select") {

                dom(html_form).findElem(list_elem[key])
                    .each(function (k, v) {

                        var get_attr = dom(k).attr();

                        get_attr.value=dom(k).val();
                        get_attr.type="select";
                        ret_value =_stk.arrayConcat(ret_value, get_attr);

                    });

            } else {

                ret_value =_stk.arrayConcat(ret_value, dom(html_form).findElem(list_elem[key])
                    .attr());

            }

        }

    });

    return ret_value;

}

;
/**
 * Get the form attribute
 *
 * @since 2.0.1
 * @category DOM
 * @returns {Class} Returns the total.
 * @example
 *
 * dom("body").getFormAttr("div")
 * // => ElementTrigger{element: Array(1), parent_child: null}element: Array(1)0: div#idlength: 1__proto__: Array(0)parent_child: null__proto__: Object
 */
function getFormAttr () {

    var core = new CoreElementInit(this);

    return formGetValues(core);

}

;
/**
 * Get selected option in multiple selection
 *
 * @since 2.0.1
 * @category DOM
 * @param {boolean} bol The second number in an addition.
 * @returns {Class} Returns the total.
 * @example
 *
 * dom("body")
 * // => ElementTrigger{element: Array(1), parent_child: null}element: Array(1)0: div#idlength: 1__proto__: Array(0)parent_child: null__proto__: Object
 */
function getSelectedCount (bol) {

    var core = new CoreElementInit(this);

    return domSelectOption(core, bol, "count");

}

;
/**
 * Get the selected option in select element it text only
 *
 * @since 2.0.1
 * @category DOM
 * @param {boolean} bol The second number in an addition.
 * @returns {Class} Returns the total.
 * @example
 *
 * dom("body")
 * // => ElementTrigger{element: Array(1), parent_child: null}element: Array(1)0: div#idlength: 1__proto__: Array(0)parent_child: null__proto__: Object
 */
function getSelectedText (bol) {

    var core = new CoreElementInit(this);

    return domSelectOption(core, bol, "text");

}

;
/**
 * Set selected value in option
 *
 * @since 2.0.1
 * @category DOM
 * @param {string} val The second number in an addition.
 * @returns {Object} Returns the total.
 * @example
 *
 * dom("div").setSelected('test')
 * // => null
 */
function setSelected (val) {

    var core = new CoreElementInit(this);

    var opt = null;

    core.each(function (meth) {

        opt=meth.options;
        for (var inc =0; inc<opt.length;) {

            opt[inc].selected = opt[inc].value===val;

            inc+=1;

        }

    });

    return this;

}

;
/**
 * Toggle display show and hide
 *
 * @since 2.0.1
 * @category DOM
 * @param {String} display The second number in an addition.
 * @returns {Class} Returns the total.
 * @example
 *
 * dom("body").toggleDisplay()
 * // => ElementTrigger{element: Array(1), parent_child: null}element: Array(1)0: div#idlength: 1__proto__: Array(0)parent_child: null__proto__: Object
 */
function toggleDisplay (display) {

    var d_var=display||"";

    var core = new CoreElementInit(this);

    core.each(function (meth) {

        var elem=meth.style.display||domGetCSS(meth, "display");

        domCSS(meth, {
            "display": elem==="none"
                ?d_var
                :"none"

        });

    });

    return this;

}

;
/**
 * Get the parent element
 *
 * @since 2.0.1
 * @category DOM
 * @returns {Class} Returns the total.
 * @example
 *
 * dom("body").getParent("div")
 * // => ElementTrigger{element: Array(1), parent_child: null}element: Array(1)0: div#idlength: 1__proto__: Array(0)parent_child: null__proto__: Object
 */
function getParent () {

    var core = new CoreElementInit(this);

    var arry_pl=[];

    core.each(function (meth) {

        arry_pl.push(meth.parentElement);

    });

    return _stk.count(arry_pl)===1
        ?arry_pl[0]
        :arry_pl;

}

;
/**
 * Append element using insertAdjacentHTML
 *
 * @since 2.0.1
 * @category DOM
 * @param {Object} com The second number in an addition.
 * @param {Object} htm The second number in an addition.
 * @returns {Object} Returns the total.
 * @example
 *
 * dom("div").insertHtml()
 * // => 1
 */
function insertHtml (com, htm) {

    var lst_adj={
        "after": "afterend",
        "afterbegin": "afterbegin",
        "afterend": "afterend",
        "before": "beforebegin",
        "beforebegin": "beforebegin",
        "beforeend": "beforeend",
        "prepend": "afterbegin"
    };
    var core = new CoreElementInit(this);

    core.each(function (meth) {

        try {

            if (_stk.has(lst_adj, com) && _stk.has(meth)) {

                meth.insertAdjacentHTML(lst_adj[com], htm);

            } else {
                if (com === "beforeend"){
                    meth.append(htm);
                }
                if (com === "appendChild"){
                    meth.appendChild(htm);
                }
            }

        } catch (exception) {

            console.log(exception);

        }

    });

    return this;

}

;
/**
 * Get the index of Element
 *
 * @since 2.0.1
 * @category DOM
 * @param {Object} doms The second number in an addition.
 * @returns {Object} Returns the total.
 * @example
 *
 * dom("div").index()
 * // => 1
 */
function index (doms) {

    var core = new CoreElementInit(this);

    var arry_dm = [];

    core.each(function (elemm) {

        arry_dm.push(elemm);

    });

    return _stk.indexOf(arry_dm, doms);

}

;
/**
 * Is Dom null
 *
 * @since 2.0.1
 * @category DOM
 * @returns {Object} Returns the total.
 * @example
 *
 * dom("div").isDomNull()
 * // => false
 */
function isDomNull () {

    var core = new CoreElementInit(this);

    var bool=false;

    core.each(function (elemm) {

        if (elemm===null) {

            bool=true;

        }

    });

    return bool;

}

;
/**
 * Get child position index
 *
 * @since 2.0.1
 * @category DOM
 * @returns {Class} Returns the total.
 * @example
 *
 * dom("body").getChildPosition()
 * // => 1
 */
function getChildPosition () {

    var core = new CoreElementInit(this);

    var incrementi = 1;

    var node=_stk.has(core.element[0])===false
        ?core.element
        :core.element[0];

    while (node.previousSibling) {

        node = node.previousSibling;
        if (node.nodeType === 1) {

            incrementi+=1;

        }

    }

    return incrementi-1;

}

;
/**
 * Get or set css element
 *
 * @since 2.0.1
 * @category DOM
 * @param {any} type The second number in an addition.
 * @param {any} dom The second number in an addition.
 * @param {any} htmll The second number in an addition.
 * @returns {Class} Returns the total.
 * @example
 *
 * dom("body").css()
 * // => ElementTrigger{element: Array(1), parent_child: null}element: Array(1)0: div#idlength: 1__proto__: Array(0)parent_child: null__proto__: Object
 */
function domIOtype (type, dom, htmll) {

    if ((/\b(val)\b/g).test(type)) {

        var alt_val=this.get_attr(dom, "ps_alt_value");

        if (_stk.has(htmll)) {

            dom.value=htmll;

        }
        if (_stk.has(alt_val, "ps_alt_value") && dom.value.trim().length==0) {

            return alt_val.ps_alt_value;

        }

        return dom.value;

    }
    if ((/\b(html)\b/g).test(type)) {

        if (_stk.has(htmll)) {

            dom.innerHTML=htmll;

        }

        return dom.innerHTML;

    }
    if ((/\b(text)\b/g).test(type)) {

        if (_stk.has(htmll)) {

            !_stk.has(dom.innerText)
                ?dom.textContent
                :dom.innerText=htmll;

        }

        return !_stk.has(dom.innerText)
            ?dom.textContent
            :dom.innerText;

    } if ((/\b(outerhtml)\b/g).test(type)) {

        if (_stk.has(htmll)) {

            dom.outerHTML=htmll;

        }

        return dom.outerHTML;

    }

    return null;

}
;
/**
 * Search Sub element
 *
 * @since 2.0.1
 * @category DOM
 * @param {Object} dom The second number in an addition.
 * @param {number} htm The second number in an addition.
 * @returns {Class} Returns the total.
 * @example
 *
 * dom("body").css()
 * // => ElementTrigger{element: Array(1), parent_child: null}element: Array(1)0: div#idlength: 1__proto__: Array(0)parent_child: null__proto__: Object
 */
function domView (dom, htm) {

    var core = new CoreElementInit(this);

    var domee=this.getLength();
    var str=domee>1
        ?[]
        :"";

    core.each(function (meth) {

        var dom_type = _stk.indexOf([
            "checkbox",
            "radio"
        ], _stk.ifUndefined(meth.type, "-")) > -1
            ?meth.checked
            :true;

        if (dom_type) {

            if (domee>1) {

                str.push(domIOtype(dom, meth, htm));

            } else {

                str=domIOtype(dom, meth, htm)+"";

            }

            domIOtype(dom, meth, htm);

        }

    });

    if (_stk.has(htm)) {

        return this;

    }

    if (_stk.getTypeof(str)==="array") {

        return _stk.count(str)===1
            ?str[0]
            :str;

    }

    return str;

}

;
var getWindowFunction = function () {

    if (typeof window !== 'undefined') {

        return window;

    }

    return {};

};

;
// Const remove_list_action= [];

var comptsWindow = getWindowFunction();

if (_stk.has(comptsWindow, "comptsControl") ===false) {

    comptsWindow.comptsControl = {};
    comptsWindow.comptsControl.remove_list_action=[];

}

/**
 * Get or set css element
 *
 * @since 2.0.1
 * @category DOM
 * @param {any} elthis The second number in an addition.
 * @param {any} c1 The second number in an addition.
 * @param {any} c2 The second number in an addition.
 * @param {any} c3 The second number in an addition.
 * @param {any} func The second number in an addition.
 * @param {any} act_bool The second number in an addition.
 * @returns {Class} Returns the total.
 * @example
 *
 * dom("body").css()
 * // => ElementTrigger{element: Array(1), parent_child: null}element: Array(1)0: div#idlength: 1__proto__: Array(0)parent_child: null__proto__: Object
 */
function eventListener (elthis, c1, c2, c3, func, act_bool) {

    var var_elthis = elthis;

	 elthis.each(function (elemm, td) {

		 var_elthis=elemm;
        if (act_bool) {

	 actionevent(elemm, c1, c2, c3, func);

	 return elthis;

     }

     comptsWindow.comptsControl.remove_list_action.push(elemm);
        return elthis;

    });

    return var_elthis;

}

/**
 * Get or set css element
 *
 * @since 2.0.1
 * @category DOM
 * @param {any} elems11 The second number in an addition.
 * @param {any} ch The second number in an addition.
 * @param {any} ie The second number in an addition.
 * @param {any} mo The second number in an addition.
 * @param {any} func The second number in an addition.
 * @returns {Class} Returns the total.
 * @example
 *
 * dom("body").css()
 * // => ElementTrigger{element: Array(1), parent_child: null}element: Array(1)0: div#idlength: 1__proto__: Array(0)parent_child: null__proto__: Object
 */
function actionevent (elems11, ch, ie, mo, func) {

    if (elems11.attachEvent) {

        (function (elems11, ff, mob) {

            elems11.attachEvent(ie, function (se) {

                if (_stk.indexOf(comptsWindow.comptsControl.remove_list_action, elems11)==-1) {

                    ff.call(elems11, se);

                }

            }, true);

        }(elems11, func, ie));

    } else {

        if (elems11.addEventListener) {

            (function (elems11, ff, mob) {

                elems11.addEventListener(ch, function (e) {

                    if (typeof e.targetTouches!=="object" && _stk.indexOf(comptsWindow.comptsControl.remove_list_action, elems11)==-1) {

                        ff.call(this, e);

                    }

                }, true);

            }(elems11, func, ch));

            if (mo!=="none") {

                (function (elems11, ff, mob) {

                    elems11.addEventListener(mo, function (e) {

                        if (_stk.indexOf(comptsWindow.comptsControl.remove_list_action, elems11)==-1) {

                            ff.call(this, e);

                        }

                    }, true);

                }(elems11, func, mo));

            }

        }

    }

}

;
/**
 * Search Sub element
 *
 * @since 2.0.1
 * @category DOM
 * @param {function} meth The second number in an addition.
 * @param {function} fade The second number in an addition.
 * @returns {Class} Returns the total.
 * @example
 *
 * dom("body").findElem("div")
 * // => ElementTrigger{element: Array(1), parent_child: null}element: Array(1)0: div#idlength: 1__proto__: Array(0)parent_child: null__proto__: Object
 */
function fadefun (meth, fade) {

    domCSS(meth, {"opacity": fade/100});

}

/**
 * Search Sub element
 *
 * @since 2.0.1
 * @category DOM
 * @param {function} meth The second number in an addition.
 * @param {function} typ_s The second number in an addition.
 * @param {function} intrvl_s The second number in an addition.
 * @param {function} func The second number in an addition.
 * @returns {Class} Returns the total.
 * @example
 *
 * dom("body").findElem("div")
 * // => ElementTrigger{element: Array(1), parent_child: null}element: Array(1)0: div#idlength: 1__proto__: Array(0)parent_child: null__proto__: Object
 */
function initFadeElement (meth, typ_s, intrvl_s, func) {

    var ot={"fadein": 100,
        "fadeout": 0,
        "fadeto": 100};
    var timetofade={"fadein": "ot-20",
        "fadeout": "ot+20",
        "fadeto": "100"};
    var timetoequal={"fadein": "ot<10",
        "fadeout": "ot>90",
        "fadeto": "ot==100"};

    if ((/(fadeout)/g).test(typ_s)) {

        domCSS(meth, {"display": ""});

    }
    if ((/(fadeto)/g).test(typ_s)) {

        domCSS(meth, {"display": ""});
        fadefun(meth, intrvl_s.time/10);
        if (_stk.has(func) && intrvl_s.time/10===1) {

            func();

        }

    } else {

        var intval=setInterval(function () {

            var func_check=new Function("ot", "return "+timetoequal[typ_s]);

            if (func_check(ot[typ_s])) {

                clearInterval(intval);

                if ((/(fadein)/g).test(typ_s)) {

                    domCSS(meth, {"display": "none"});
                    if (_stk.has(func)) {

                        func();

                    }

                }

            }

            if ((/(fadein|fadeout)/g).test(typ_s)) {

                fadefun(meth, ot[typ_s]);

            }
            var func_ot=new Function("ot", "return "+timetofade[typ_s]);

            ot[typ_s]=func_ot(ot[typ_s]);

        }, intrvl_s.time);

    }

}
;
/**
 * Set element fade
 *
 * @since 2.0.1
 * @category DOM
 * @param {function} typ The second number in an addition.
 * @param {function} intrvl The second number in an addition.
 * @param {function} func The second number in an addition.
 * @returns {Class} Returns the total.
 * @example
 *
 * dom("body").findElem("div")
 * // => ElementTrigger{element: Array(1), parent_child: null}element: Array(1)0: div#idlength: 1__proto__: Array(0)parent_child: null__proto__: Object
 */
function fade (typ, intrvl, func) {

    var core = new CoreElementInit(this);

    var typ_s="";

    var intrvl_s={};

    if (_stk.getTypeof(intrvl)==="json") {

        if (_stk.has(intrvl.time)) {

            intrvl_s.time=intrvl.time;

        }

    } else {

        if (_stk.getTypeof(intrvl)==="number") {

            intrvl_s.time=intrvl;

        }
        if (_stk.getTypeof(intrvl) === "string") {

            var jsn_spd_type=
                {
                    "fast": 200,
                    "faster": 100,
                    "slow": 400,
                    "slower": 500
                };

            if (_stk.has(jsn_spd_type, intrvl)) {

                intrvl_s.time=jsn_spd_type[intrvl];

            } else {

                intrvl_s.time=400;

            }

        }

    }

    core.each(function (meth) {

        if ((/(fadetoggle)/g).test(typ)) {

            typ_s=domGetCSS(meth, "display")==="none"
                ?"fadeout"
                :"fadein";

        } else {

            typ_s=typ;

        }
        initFadeElement(meth, typ_s, intrvl_s, func);

    });

    return this;

}

;
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

    var core = new CoreElementInit(this);

    var arryElem=[];

    core.each(function (element) {

        var rect = element.getBoundingClientRect();
        var scrollTop = getScrollPosition().top;

        var scrollLeft = getScrollPosition().left;
        var elementTop = rect.top+scrollTop;
        var elementLeft = rect.left+scrollLeft;

        arryElem.push({"left": elementLeft,
            "top": elementTop});

    });

    return _stk.count(arryElem)===1
        ? arryElem[0]
        : arryElem;

}

;
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

    var gleft = 0,
        gtop = 0,
        rect = {};
    var target = _el,
        target_height = target.offsetHeight,
        target_width = target.offsetWidth;

    var lcwps = function (_parent) {

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

;
/**
 * Get the offset of element
 *
 * @since 2.0.1
 * @category DOM
 * @returns {Object} Returns the total.
 * @example
 *
 * dom("div").getElementOffSet()
 * // => false
 */
function getElementOffSet () {

    var core = new CoreElementInit(this);

    var arryElem=[];

    core.each(function (elemm) {

        arryElem.push(domOffset(elemm));

    });

    return _stk.count(arryElem)===1
        ?arryElem[0]
        :arryElem;

}

;
/**
 * Get the dimension of element
 *
 * @since 2.0.1
 * @category DOM
 * @returns {Object} Returns the total.
 * @example
 *
 * dom("div").isDomNull()
 * // => false
 */
function getElementDimension () {

    var core = new CoreElementInit(this);

    var arryElem=[];

    core.each(function (elemm) {

        if (_stk.has(elemm.getBoundingClientRect())) {

            var gtrect=elemm.getBoundingClientRect();

            arryElem.push({
                "bottom": gtrect.bottom,
                "height": gtrect.height,
                "left": gtrect.left,
                "right": gtrect.right,
                "top": gtrect.top,
                "width": gtrect.width
            });

        }

    });

    return _stk.count(arryElem)===1
        ?_stk.first(arryElem)
        :arryElem;

}

;

/**
 * Get or set css element
 *
 * @since 2.0.1
 * @category DOM
 * @param {any} main The second number in an addition.
 * @param {any} spltt The second number in an addition.
 * @param {any} fn The second number in an addition.
 * @param {any} bools The second number in an addition.
 * @returns {Class} Returns the total.
 * @example
 *
 * dom("body").css()
 * // => ElementTrigger{element: Array(1), parent_child: null}element: Array(1)0: div#idlength: 1__proto__: Array(0)parent_child: null__proto__: Object
 */
function domEventIniate (main, spltt, fn, bools) {

    for (var vk=0; vk<spltt.length; vk++) {

        (function (main_sub, m1, m2, m3, func) {

            eventListener(main_sub, m1, m2, m3, func, bools);

        }(main, spltt[vk]+'', 'on'+spltt[vk]+'', 'none', fn));

    }

    return main;

}

;
/**
 * Set event action is on
 *
 * @since 2.0.1
 * @category DOM
 * @param {String} event The second number in an addition.
 * @param {String} fn The second number in an addition.
 * @returns {Class} Returns the total.
 * @example
 *
 * dom("body")
 * // => ElementTrigger{element: Array(1), parent_child: null}element: Array(1)0: div#idlength: 1__proto__: Array(0)parent_child: null__proto__: Object
 */
function on (event, fn) {

    domEventIniate(this, event.split(","), fn, true);

    return this;

}

;
/**
 * Get Sub element
 *
 * @since 2.0.1
 * @category DOM
 * @param {String} event The second number in an addition.
 * @param {String} fn The second number in an addition.
 * @returns {Class} Returns the total.
 * @example
 *
 * dom("body")
 * // => ElementTrigger{element: Array(1), parent_child: null}element: Array(1)0: div#idlength: 1__proto__: Array(0)parent_child: null__proto__: Object
 */
function off (event, fn) {

    domEventIniate(this, event.split(","), fn, false);

    return this;

}

;
var comptsWindow = getWindowFunction();

if (_stk.has(comptsWindow, "comptsControl") ===false) {

    comptsWindow.comptsControl = {};
    comptsWindow.comptsControl.delegation_record_list=[];

}

/**
 * Get or set css element
 *
 * @since 2.0.1
 * @category DOM
 * @param {any} elem The second number in an addition.
 * @param {any} evnt The second number in an addition.
 * @param {any} func The second number in an addition.
 * @returns {Class} Returns the total.
 * @example
 *
 * dom("body").css()
 * // => ElementTrigger{element: Array(1), parent_child: null}element: Array(1)0: div#idlength: 1__proto__: Array(0)parent_child: null__proto__: Object
 */
function elemDelegateEvent (elem, evnt, func) {

    dom(elem).on(evnt, function (err) {

        var main = this;

        if (err.target) {

            var elem_index = _stk.indexOf(comptsWindow.comptsControl.delegation_record_list, main);

            if (elem_index===-1) {

                func.call(this, err);
                comptsWindow.comptsControl.delegation_record_list.push(main);

            }

        }

    });

}

;
var comptsWindow = getWindowFunction();

if (_stk.has(comptsWindow, "comptsControl") ===false) {

    comptsWindow.comptsControl = {};
    comptsWindow.comptsControl.delegation_record_list=[];

}

/**
 * Set delegate event action
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

;
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
ElementTrigger.prototype.eq = eq;
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

for (var f1 in elementConfig.eventListener) {

    if (_stk.has(elementConfig.eventListener[f1])) {

        var check_mobile=(/(touchstart|touchmove|touchend)/).test(elementConfig.eventListener[f1])
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

for (var f2 in elementConfig.child) {

    if (_stk.has(elementConfig.child[f2])) {

        (function (m1, m2) {

            ElementTrigger.prototype[m1]=function () {

                this.parent_child="node::"+m2;

                return this;

            };

        }(elementConfig.child[f2][0], elementConfig.child[f2][1]));

    }

}

for (var f3 in elementConfig.appendhtml) {

    if (_stk.has(elementConfig.appendhtml[f3])) {

        (function (m1, m2) {

            ElementTrigger.prototype[m1]=function (html) {

                this.insertHtml(m2, html);

                return this;

            };

        }(elementConfig.appendhtml[f3][0], elementConfig.appendhtml[f3][1]));

    }

}

for (var f4 in elementConfig.styletype) {

    if (_stk.has(elementConfig.styletype[f4])) {

        (function (meth) {

            ElementTrigger.prototype["get"+meth]=function (cnt) {

                return this.css(meth, cnt);

            };

        }(elementConfig.styletype[f4]));

    }

}

for (var f5 in elementConfig.domview) {

    if (_stk.has(elementConfig.domview[f5])) {

        (function (meth) {

            ElementTrigger.prototype[meth] = function (value) {

                return this.domView(meth, value);

            };

        }(elementConfig.domview[f5]));

    }

}

for (var f6 in elementConfig.elemfade) {

    if (_stk.has(elementConfig.elemfade[f6])) {

        (function (meth) {

            ElementTrigger.prototype[meth]=function (intrvl, fncmthd) {

                return this.fade(meth.toLowerCase(), intrvl, fncmthd);

            };

        }(elementConfig.elemfade[f6]));

    }

}

;
/**
 * Check if object or value
 *
 * @since 1.0.1
 * @category Seq
 * @returns {Array|Object} Returns the total.
 * @example
 *
 * parentchild("first",element,1)
 * // => {'as':2}
 */
function PsExtender () {

    // Dead code

}

PsExtender.prototype.extendElement= function (id) {

    var ps_ob=new ElementTrigger(id);

    return ps_ob;

};

PsExtender.prototype.tag_value= function (tar, ar) {

    var tar_sub=tar.split("=>");

    _stk.each(tar_sub, function (eck, ecv) {

        findElement(ecv, ar, eck>0);

    });

};

PsExtender.prototype.init= function (str, ar) {

    var ar_s=[];

    var chd_dom=str.toString().match(/^[#.\w]{0,1}/g);

    if (chd_dom===null) {

        return document;

    }

    this.tag_value(str, ar_s);

    return assignElementDistinction(ar_s, str, ar);

};

;
var domCoreAssign=function (id) {

    var doc_set=function (idss) {

        var domm=[];
        var ps_ext=new PsExtender();

        try {

            if (_stk.getTypeof(idss)==="object") {

                if (_stk.count(idss) === 0) {

                    domm.push(idss);

                } else {

                    _stk.each(idss, function (__, val) {

                        domm.push(val);

                    });

                }

            } else if (_stk.getTypeof(idss)==="array") {

                _stk.each(idss, function (key, val) {

                    if (_stk.getTypeof(val)==="object") {

                        domm.push(val);

                    } else if (_stk.getTypeof(val)==="string") {

                        ps_ext.init(val, domm);

                    }

                });

            } else {

                var doc_loop=_stk.toString(idss).split(",");

                for (var tKey in doc_loop) {

                    if (_stk.has(doc_loop[tKey])) {

                        ps_ext.init(doc_loop[tKey], domm);

                    }

                }

            }

        } catch (error) {

            console.log(error);

        }

        return ps_ext.extendElement(domm);

    };

    return doc_set(id);

};

;
/**
 * Check if object or value
 *
 * @since 2.0.1
 * @category DOM
 * @param {Object|String} element The second number in an addition.
 * @returns {Object} Returns the total.
 * @example
 *
 * dom("body")
 * // => ElementTrigger{element: Array(1), parent_child: null}element: Array(1)0: div#idlength: 1__proto__: Array(0)parent_child: null__proto__: Object
 */
function dom (element) {

    return domCoreAssign(element);

}
;

global.dom=dom

