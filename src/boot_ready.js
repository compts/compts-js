var ps_core;
		ps_core=(function(){
			
			doc_set=function(idss){
			var domm=[];	
			
			try{
				var ps_ext=new ps_extender();
			if(_ct.getTypeof(idss)==="object"){
			domm.push(idss);
			}
			else if(_ct.getTypeof(idss)==="array"){
		
			_ct.each(idss,function(k,v){
				if(_ct.getTypeof(v)==="object"){

				domm.push(v);
				}
				else if(_ct.getTypeof(v)==="string"){
			ps_ext.dom.init(v,domm);
				
				}
				
				});
			}	
			else{
			
			var doc_loop=idss.toString().split(",");
			
			for (var t in doc_loop) {
			
					ps_ext.dom.init(doc_loop[t],domm);
				
				
			}
			
			}
			}catch(e){}	
		return ps_ext.extend.obj_extnd(domm);
		
			
			}
			doc_set_docall=function(idss){
			var domm=[];	
			
			try{
				var ps_ext=new ps_extender();
			if(_ct.getTypeof(idss)==="object"){
			domm.push(idss);
			}
			else if(_ct.getTypeof(idss)==="array"){
			_ct.each(idss,function(k,v){
				if(_ct.getTypeof(v)==="object"){

				domm.push(v);
				}else if(_ct.getTypeof(v)==="string"){
			ps_ext.dom.init(v,domm);
				
				}
				
				});
			}
			else{
			var doc_loop=idss.toString().split(",");
			if(doc_loop.length===0){
			domm.push(document.body.querySelectorAll(idss));
			}else{
		for(var itnd in doc_loop){
			domm.push(document.body.querySelectorAll(doc_loop[itnd]));
			}
			
			}
			}
			}catch(e){}	
		return ps_ext.extend.obj_extnd(domm[0]);
		
			
			}
			document_ready_exist=function(func){
				document_ready(func);

			}
			
			
			return {
				
				doc:function(id){
				return doc_set(id);
					},
				docall:function(id){
				return doc_set_docall(id);
					},
				dom_ready:function(func){	
				return document_ready_exist(func);	
						}
			
								
				};				
				})();	

				 
			
			
	bootstrap["dom"] = function(d){		
					
		return ps_core.doc(d);
				
	};
	bootstrap["dom_all"] = function(d){		
		return ps_core.docall(d);
				
	};
					
	bootstrap["ready"] = function(func){
		return ps_core.dom_ready(func);
	};
				