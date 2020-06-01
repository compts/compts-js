var bootstrap={
			
			
			dom:function(d){		
			
			return ps_core.doc(d);
		
			},
			dom_all:function(d){		
			return ps_core.docall(d);
		
			},
            
			ready:function(func){
					return ps_core.dom_ready(func);
			},
			element:function(){
					return new ps_element();			
			},
			ajax:function(d){
			return new ps_ajax(d);
			
			},
			agenttype:function(d){
				
			        return new ps_agenttype(d);				
			},
			
			require:function(d,bol){
			
				return new ps_amd(d,bol);
				
			},
			config:function(d){
			
				return new ps_config(d);
			}
			,
			ext:function(d){
				
				var dom = ps_core.doc(d);
			
				var cls_ext_return = extension_loader(dom).extend_ext_module()

				return cls_ext_return;
			}
			
			
			
			
			};
	root.ct=function(d,f,f1){
	if(_ct.has(d)){

	return	bootstrap[d](f,f1);
}};	


	
	root.ct$=function(d){
		return bootstrap["dom"](d);
	};
	root.ct$$=function(d){
		return bootstrap["dom_all"](d);
	};

		 
	root.ct.version="1.0.0.0";

	