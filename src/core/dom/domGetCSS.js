import {getTypeof} from 'structkit';

function domGetCSS(ele,prop){
		
		

	this.loopstyle=function(dom,style,intt){
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
		};
		
		
		if(getTypeof(prop)==="array"){
		var golb_ret={};
			for(var fn in prop){
			
		golb_ret[prop[fn]]=this.loopstyle(ele,prop[fn],"array");
			}
			
			}
		else if(getTypeof(prop)==="string"){
			golb_ret=this.loopstyle(ele,prop,"str");
		
				}
			 
			return golb_ret;
}

export default domGetCSS;