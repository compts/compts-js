import {arrayConcat} from 'structkit'
import dom from '../../module/dom/index';

function formGetValues( self ){
    var list_elem = ["input","select","textarea"];
	var ret_value = [];	
	self.each(function(html_form,td){
		for(var key in list_elem){
			if(list_elem[key] == "select"){
				dom(html_form).findElem(list_elem[key]).each(function(k,v){
					var get_attr = dom(k).attr();
					get_attr["value"]=dom(k).val();
					get_attr["type"]="select";
					ret_value =arrayConcat(ret_value,get_attr);
				});
			}else{
				
				ret_value =arrayConcat(ret_value,dom(html_form).findElem(list_elem[key]).attr());
			}
		}
	});
	return ret_value; 
}

export default formGetValues;