function ps_config(d){
	
	}

	ps_config.prototype.setconfig=function(key,val){
		
		ps_glbl.config[key]=val
	}

	ps_config.prototype.getconfig=function(fnc){
		
		//fnc(ps_glbl.config);
		
		
	
	}
	bootstrap["config"] =function(d){
			
		return new ps_config(d);
	}