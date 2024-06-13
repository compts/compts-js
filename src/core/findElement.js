import {each, has, isEmpty, isExact, indexOfExist, count, first, indexOf, clone} from 'structkit';
import getDomAttr from './getDomAttr';

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

    const tar_m_split=tar_m_sub.split("=>");
    const tar_m=(tar_m_split.length === 0
        ?tar_m_sub
        :tar_m_split[0]).trim();

    let node=[];

    if (bool) {

        node=clone(ar);
        ar.splice(0, ar.length);

    } else {

        node.push(document);

    }

    const tar=tar_m.split(",");

    for (const ni in node) {

        if (has(node, ni)) {

            for (const ti in tar_m) {

                if (has(tar, ti)) {

                    searchElement(tar[ti], node[ni], ar);

                }


            }

        }

    }

    each(tar_m_split, function (cek, cev) {

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

    const cls_list = [];
    const attr_list = [];
    let tag_name = "*";

    if ((/#/g).test(element)) {

        const replce_dom=element.toString().replace(/^[#]/g, "");
        const idd_m=node.getElementById(replce_dom);


        if (has(idd_m)) {

            ar.push(idd_m);

        }

    } else {

        const attrRet = element.replaceAll(/\[(.*?)\]/g, function (wrd, s1) {

            const listAttrToLook = s1.replace(/^(\[)/g, "")
                .replace(/(\])$/g, "")
                .split(",");

            each(listAttrToLook, function (__, val) {

                attr_list.push(val);

            });

            return "";

        });

        const classRet = attrRet.replaceAll(/\.([a-zA-Z0-9-]{1,})/g, function (wrd, s1) {

            cls_list.push(s1);

            return "";

        });

        if (!isEmpty(classRet)) {

            tag_name = classRet;

        }

        if (has(node.getElementsByTagName(tag_name))) {

            const listElementTags = node.getElementsByTagName(tag_name);

            for (let ii=0, jj=listElementTags.length; ii<jj;) {

                if (has(listElementTags, ii)) {

                    let isValidDom = false;

                    const elementTag = listElementTags[ii];

                    if (has(elementTag.className)) {

                        const elementClass = elementTag.className.split(/\s{1,}/);

                        if (isEmpty(elementClass) && isEmpty(cls_list)) {

                            isValidDom = true;

                        } else {

                            if (isExact(cls_list, elementClass)) {

                                isValidDom = true;

                            }

                        }

                    }

                    if (!isEmpty(attr_list)) {

                        const attrListCount = count(attr_list);
                        let counterValidType = 0;

                        each(attr_list, function (__, val) {

                            const getAttrAt = getAttrTypeValue(val);
                            const getAttrVal = getDomAttr(elementTag, getAttrAt.name);

                            if (!isEmpty(getAttrVal)) {

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

    const splitEq = value.split(/\b(=)\b/g);

    if (count(splitEq) === 3) {

        return {
            "name": splitEq[0],
            "type": "eq",
            "value": splitEq[2]
        };

    }

    const splitCongruent = value.split(/\b(~=)\b/g);

    if (count(splitCongruent) === 3) {

        return {
            "name": splitCongruent[0],
            "type": "congruent",
            "value": splitCongruent[2]
        };

    }

    const splitStart = value.split(/\b(\^=)\b/g);

    if (count(splitStart) === 3) {

        return {
            "name": splitStart[0],
            "type": "startWith",
            "value": splitStart[2]
        };

    }

    const splitEnd = value.split(/\b(\$=)\b/g);

    if (count(splitEnd) === 3) {

        return {
            "name": splitEnd[0],
            "type": "endWith",
            "value": splitEnd[2]
        };

    }

    const splitMatch = value.split(/\b(\*=)\b/g);

    if (count(splitMatch) === 3) {

        return {
            "name": splitMatch[0],
            "type": "match",
            "value": splitMatch[2]
        };

    }

    const splitStarting = value.split(/\b(\|=)\b/g);

    if (count(splitStarting) === 3) {

        return {
            "name": splitStarting[0],
            "type": "starting",
            "value": splitStarting[2]
        };

    }

    const splitNotIn = value.split(/\b(!=)\b/g);

    if (count(splitNotIn) === 3) {

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

        const regexp = new RegExp("^("+value+")", "g");

        return regexp.test(value1);

    }
    if (type === "endWith") {

        const regexp = new RegExp("("+value+")$", "g");

        return regexp.test(value1);

    }

    if (type === "match") {

        const regexp = new RegExp("("+value+")", "g");

        return regexp.test(value1);

    }

    if (type === "congruent") {

        const regexp = value.split(/[\s]{1,}/);

        return indexOfExist(regexp, value1);

    }

    if (type === "starting") {

        const regexp = value1.split(/[_-]/);

        return indexOf(regexp, value) === 0;

    }

    return false;

}
export default findElement;
