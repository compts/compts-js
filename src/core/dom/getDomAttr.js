import {each, getTypeof, has} from 'structkit';

function getDomAttr(meth,d){
	var	attr_type=((getTypeof(d)=="array")?d:[d]);
	var globl={};
    if(has(meth)){
        if(has(meth.getAttributeNode)){
        
            each(attr_type,function(ky,vl){
                
                if(meth.getAttributeNode(vl))
                globl[vl]=meth.getAttributeNode(vl).value;		
            });
            
        }else{
            
            each(attr_type,function(ky,vl){
                if(meth.getAttribute)
                globl[vl]=meth.getAttribute(vl);
            });
        }
	}
	return globl; 
}

export default getDomAttr;