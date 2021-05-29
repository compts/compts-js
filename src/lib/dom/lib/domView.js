import CoreElementInit from '../../../core/coreElementInit';
import domIOtype from '../../../core/dom/domIOtype';
import {indexOf, has, getTypeof, count ,ifUndefined} from 'structkit';

function domView (dom,htm){

    const core = new CoreElementInit(this);

    
		var domee=this.getLength();
		var str=((domee)>1?[]:"");
		core.each(function(meth,td){
		var dom_type=indexOf(["checkbox","radio"],ifUndefined(meth.type,"-"))>-1?meth.checked:true;
			if(dom_type){
			if(domee>1){	
				str.push(domIOtype(dom,meth,htm));
			}else{
				str=domIOtype(dom,meth,htm)+"";
			}
			
			domIOtype(dom,meth,htm);
			}
			});
		if(has(htm)){	
			return this;
			}else{
				if(getTypeof(str)=="array")
				return count(str)==1?str[0]:str;	
				else
				return str;
			}

}

export default domView;
