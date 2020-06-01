if (typeof exports !== 'undefined') {
   var root = Object; 
   if (typeof window !== 'undefined' && typeof module !== 'undefined' && module.exports) {
   // var document = Object;
   }	
 
  }
else{
	var root = window;
   
} 


var ps_glbl=root[Math.random().toString(36).replace(/[^a-z]+/g, '')]={};


ps_glbl.src=[];	
ps_glbl.remove_list_action=[]

ps_glbl.report={};
ps_glbl.report.loadjs=[];
ps_glbl.report.loadjs_error=[];
ps_glbl.control={};

ps_glbl.global_setting={};
ps_glbl.controller_value={};
ps_glbl.control.delegation_record_list=[]; 



ps_glbl.config={};





ps_glbl.extension_load_element=[]; 
ps_glbl.extension_load_event={}; 