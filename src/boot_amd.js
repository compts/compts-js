var c=0;
	var amd_is_ready = false;
	function ps_amd(d,bol_clear_cache){
	var check_exist= (!_ct.has(d) || d==="" )?false:true;
	if(check_exist===true){
	
	ps_glbl.src.push(main_dom.checkurlvalid(d));
	var url = main_dom.checkurlvalid(d);
	
	this.dms=d;
	this.js_url=main_dom.checkurlvalid(main_dom.checkfile("js",d));
	var loadd=false;
	var caches_bol=!_ct.has(bol_clear_cache)?false:bol_clear_cache;

	var url_sep=/[\?]{1,}/.test(this.js_url);
	var url_sep1=/[\&]{1,}/.test(this.js_url);
	
	
	var caches=(caches_bol==true)?((url_sep==false?"?":(url_sep1==true?"&":""))+"jscache="+_ct.getUniq().substr(0,7)):"";
	var ps = document.createElement('script'); 
		ps.type = 'text/javascript';	
		ps.src=this.js_url+caches;
		ps.async = true;
		ps.onload=function(e){
		loadd=true;
	
		ps_glbl.report.loadjs.push(ps.src);
		};
		
		ps.onerror=function(e){
			loadd=true;
		
			ps_glbl.report.loadjs_error.push(ps.src);
			};
		(document.getElementsByTagName('head')[0]||document.getElementsByTagName('script')[0]).appendChild(ps);
		
this.bool_load=loadd;

		}
	
	
	this.checkloop=function(s){
	
	
	}
		
		
	}
ps_amd.prototype.ready=function(func){
var eroor=this.js_url;
var loadd=this.bool_load;

document.onreadystatechange=function(){

if(document.readyState == "complete"){
		
	load_js(func);
	amd_is_ready = true;
}
	};
	
if(amd_is_ready){
	load_js(func);
}

		return this;

};

function load_js(func){

	if(_ct.has(func)){
	try{
	if(typeof(func)==="function"){func();}
	else{

		
		var setds=setInterval(function(){
			
			if(_ct.indexOf(ps_glbl.report.loadjs,eroor)>-1 || _ct.indexOf(ps_glbl.report.loadjs_error,eroor)>-1){
					
	var ref_succsee=_ct.indexOf(ps_glbl.report.loadjs,eroor);
	var ref_error=_ct.indexOf(ps_glbl.report.loadjs_error,eroor);
	if(typeof(func.success)==="function"){
	
	if(ref_succsee>-1){func.success();clearInterval(setds);}
	}
	if(typeof(func.failed)==="function"){
	if(ref_error>-1){func.failed();clearInterval(setds);}
	}
	
	}
		},100);
	}}
	catch(e){
	
	}
	
	}
	
}