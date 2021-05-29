import CoreElementInit from '../../../core/coreElementInit';
import getDomAttr from '../../../core/dom/getDomAttr';
import getElementExistAttr from '../../../core/dom/getElementExistAttr';
import {count, getTypeof, has} from 'structkit';

function attr (d,bol){

    const core = new CoreElementInit(this);

    var cnt=0;
	var globl={},globl_all=[];
	var var_bol=bol||false;

	var is_where_attr = has(d);
	
	var	attr_type=((getTypeof(d)=="array")?d:[d]);

	var typeofs = getTypeof(d) == "json"?false:true;
	
	core.each(function(meth,td){

			if(is_where_attr){

				if(typeofs){
					var get_attr=getDomAttr(meth,attr_type);
					if( var_bol==true){
					
					if(count(get_attr)>0 ){
						globl[cnt]={};
						globl[cnt]=get_attr;		
								cnt++;
					}
						}else{
						globl[cnt]={};
						globl[cnt]=get_attr;		
								cnt++;

						}
				}else{
					for(var v in d){
						var crte_elem=document.createAttribute(v);	
							crte_elem.value = d[v];

					if(meth.setAttribute)
						meth.setAttribute(v,d[v]);	
					else
						meth.setAttributeNode(crte_elem);
					}
				}		
			}else{
				globl_all.push(getElementExistAttr(meth));
			}
		});	
			if( is_where_attr==true){
				return typeofs==false ? this : ((cnt==1 || cnt==0)?((attr_type.length==1)?((typeof(globl[0])==="undefined")?"undefined":globl[0][d]):globl[0]):globl);
			}
			else{
				return count(globl_all)==0?-1:(count(globl_all)==1)?globl_all[0]:globl_all;
			}	

}

export default attr;
