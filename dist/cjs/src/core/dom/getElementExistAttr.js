function getElementExistAttr (res) {

    const attr_elem={};

    for (var att, i = 0, atts = res.attributes, n = atts.length; i < n; i++) {

        att = atts[i];

        attr_elem[att.nodeName]=att.nodeValue;

    }

    return attr_elem;

}

exports.module=getElementExistAttr
;
