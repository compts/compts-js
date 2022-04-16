const assignElementDistinction =  require('./assignElementDistinction'); 
;

function CoreElementInit (dom) {

    this.element = dom.element;
    this.parent_child= dom.parent_child;

}

CoreElementInit.prototype.each = function (func) {

    let cnt=0;
    const ele_cnt=this.element;
    const prnt_chld=this.parent_child;

    const ass_elem=assignElementDistinction(this.element, prnt_chld, {});

    for (const td in ass_elem) {

        (function (func, d, m) {

            if (ele_cnt.length>cnt) {

                func(m[d], d);

            }
            cnt++;

        }(func, td, this.element));

    }

};

exports.module=CoreElementInit
;
