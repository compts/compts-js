import {count, each, has} from 'structkit';
import getDomAttr from './getDomAttr';

function domCSS(id,d){
	var elem_str_class="";
	var get_attr=(has(getDomAttr(id,['style']).style))?getDomAttr(id,['style']).style:"";
	var split_style=get_attr.toString().split(";");

		each(split_style,function(spk,spv){ 
			var elem_d=spv.split(":");
			if(count(elem_d)>0 && has(spv)){
				if(!has(d,elem_d[0]) && has(elem_d[1])){
			var ele_key=elem_d[0].replace(/\s/,"");
			var ele_val=elem_d[1].replace(/\s/,"");
			if(!has(d[ele_key]))
				d[ele_key]=ele_val;
		
				}
			}
		});		

		for(var v in d){
			
		elem_str_class+=(v+":"+d[v]+";");
	if(has(id)){	
	try{

	if(has(id.style.setAttribute)){ id.style.setAttribute(v,d[v]); }	

	}catch(e){ console.log(e); }
	}
	}
	if(has(id) ){
	try{

	if(has(id.setAttributeNode)){
	var creat_elem=document.createAttribute("style");
	creat_elem.value=elem_str_class;
	id.setAttributeNode(creat_elem);	
	}
	}catch(e){ console.log(e); }
		}
}

export default domCSS;
