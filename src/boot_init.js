 
	root.ct=function(d,f,f1){
	if(_ct.has(d)){

		return	bootstrap[d](f,f1);
	}};	

	for(var i in bootstrap){
		root.ct[i]=	bootstrap[i];
	}
	
	root.ct$=function(d){
		return bootstrap["dom"](d);
	};
	root.ct$$=function(d){
		return bootstrap["dom_all"](d);
	};

		 
	root.ct.version="1.3.5";

	