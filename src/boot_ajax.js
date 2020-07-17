function ps_ajax(d){
	

	this.dataform;
	this.data=d;
	this.setcnnt={};
	this.iecross=false;
	this.ajx=ajax_controller(this.iecross);
	this.is_abort=false;		 
	this.set_type="none";
	this.time=0;
	this.jsones="false";	
	this.request_header={};
	}
	ps_ajax.prototype.setcontenttype=function(val){
		var main_jsn=this;
		_ct.each(val,function(k,v){
			main_jsn.request_header[k]=v;
		
		});
		return this;
	}
	ps_ajax.prototype.setRequestHeader=function(jsn){
		var req_hdr=this.request_header;
		_ct.each(jsn,function(kk,vv){

			req_hdr[kk]=vv;
		});
		return this;
	}
	ps_ajax.prototype.json=function(){
		this.jsones="true";
		return this;
	}
	ps_ajax.prototype.setFormData=function(formda,bols){
		var boolsdata=bols||false;

		
			if(formda instanceof Object){
				
				this.dataform=formda;		
			

		}else{
			
			this.dataform= new FormData(ct("dom",formda).element[0]);
		}
		return this;
	}
	
	ps_ajax.prototype.timeout=function(v){
		this.set_type="timeout";
		this.time=parseInt(v);
		return this;
	}
	ps_ajax.prototype.interval=function(v){
		this.set_type="interval";
		this.time=parseInt(v);
	return this;
	}
	ps_ajax.prototype.iecrosssite=function(){
		this.iecross=true;
		this.ajx=ajax_controller(this.iecross);
		return this;
	}
	ps_ajax.prototype.abort=function(bools){

		
		this.ajx.xdr.abort();
		ps_glbl.is_ajax_abort=true;
		var loc_bools=bools||true;
		if (loc_bools==true)
		this.ajx=ajax_controller(this.iecross);
		return this;
	}
	ps_ajax.prototype.ajax=function(config){ 
		var method=((!_ct.has(config.method))?"get":config.method);
		var jsons=this.jsones; 
		var main_ajx=this;
		var ajx=this.ajx;
		
		try{
			if(typeof(config.value)=="function"){
			var js_event=js_event_type(ajx.xdr,ajx.xhr_type,config.value,jsons,config);
				js_event[ajx.xhr_type].load;
				
				}else if(typeof(config.value)=="object"){
			
				_ct.each(config.value,function(i,v){
				
				var js_event=js_event_type(ajx.xdr,ajx.xhr_type,v,jsons,config);
			js_event[ajx.xhr_type][i];
				});
				}
				if(typeof(config.functions)=="function"){
				var js_event=js_event_type(ajx.xdr,ajx.xhr_type,config.functions,jsons,config);
			js_event[ajx.xhr_type].load;
			
				}else if(typeof(config.functions)=="object"){
				
				for (var i in config.functions){ 
				var v=config.functions[i];
				var js_event=js_event_type(ajx.xdr,ajx.xhr_type,v,jsons,config.functions);
			js_event[ajx.xhr_type][i];
				
				}
				}
		}catch(e){
		}
		var s_type=this.set_type;
		var s_time=this.time;
		var s_ajax=ajaxHttpLoader;
		var s_data=this.data;
		var s_dataform=this.dataform;
		
		if (s_dataform instanceof Object) {
			
			if (_ct.getTypeof(config.value)==="json") {
						
					_ct.each(config.value,function(frmk,frmv){
						s_dataform.append(frmk,frmv);	
					});
			}
			
		}
	 
		if(s_type==="timeout"){
		setTimeout(function(){
	s_ajax(main_ajx,ajx.xdr,method,s_data,js_json_delimiters(((typeof(config.value)=="function")?"":config.value)),s_dataform);
			},s_time);
	}
		else if(s_type==="interval"){
		setInterval(function(){
	s_ajax(main_ajx,ajx.xdr,method,s_data,js_json_delimiters(((typeof(config.value)=="function")?"":config.value)),s_dataform);
			},s_time);
	}else{
	s_ajax(main_ajx,ajx.xdr,method,s_data,js_json_delimiters(((typeof(config.value)=="function")?"":config.value)),s_dataform);
	
	}
	
	}
	var ajax_type = ['put','get','post',"delete","insert"];
	for(var f1 in ajax_type){
		(function(m,ps_ajax){
			ps_ajax.prototype[m]=function(value,func,bool){
				var jsn_fn={};
				jsn_fn["method"]=m;
				jsn_fn["value"]=value||{};
				jsn_fn["is_success"]=bool||false;
				if(typeof(func)=="function"){

				jsn_fn["functions"]=func;	
				}	
				this.ajax(jsn_fn);
				return this;
			}

		})(ajax_type[f1],ps_ajax)
	}
ps_ajax.prototype.returnvalue=function(value_s,func,bool){
		var main_arr={};
		var val;
		var value =value_s||{};
		
		main_arr['method']=(_ct.has(value,"method"))?"get":value["method"];
		main_arr['value']=(_ct.has(value,"value"))?{}:value["value"];
		jsn_fn["is_success"]=bool||false;
		main_arr['functions']=function(res){
			val=res;
		}
		this.ajax(main_arr);
		return val;
	}
	ps_ajax.prototype.error=function(){
	
	
	
	}
	
	bootstrap["ajax"] = function(d){
				
		return new ps_ajax(d);				
	};
