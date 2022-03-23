const {arrayConcat} =  require('structkit'); 
;
const dom =  require('../../module/dom/index'); 
;

function formGetValues (self) {

    const list_elem = [
        "input",
        "select",
        "textarea"
    ];
    let ret_value = [];

    self.each(function (html_form, td) {

        for (const key in list_elem) {

            if (list_elem[key] == "select") {

                dom(html_form).findElem(list_elem[key])
                    .each(function (k, v) {

                        const get_attr = dom(k).attr();

                        get_attr.value=dom(k).val();
                        get_attr.type="select";
                        ret_value =arrayConcat(ret_value, get_attr);

                    });

            } else {

                ret_value =arrayConcat(ret_value, dom(html_form).findElem(list_elem[key])
                    .attr());

            }

        }

    });

    return ret_value;

}

module.exports=formGetValues
;
