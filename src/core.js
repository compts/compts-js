var main_dom={
  
	document_ready:function(func){

				
				var dom_rdy_ctt=0;

		if(dom_rdy_ctt===0){
		 if(root.attachEvent){
			 //DOMContentLoaded
		root.attachEvent("onload",dom_load_ready);	
		root.attachEvent("onreadystatechange",dom_load_ready);	
		}
		else if(root.addEventListener){
		root.addEventListener("load", dom_load_ready, false);

		}

		}
		var fails=false;

		function dom_load_ready(){

					if(document.readyState==="complete" && fails == false ){
					 func();
					 dom_rdy_ctt++;
					 fails=true;
						}
			}

		var set_intr=null;
		
		set_intr=setInterval(function(){

			if(document.readyState==="complete" && fails == false){
					 
					 dom_rdy_ctt++;
					 fails=true;
					 clearInterval(set_intr);
					 func();
						}
		},100);		
		
	},
	
	parentchild:function(pt_cld,de,cnt){
		var child_prnt=pt_cld;
	
	if(child_prnt===null){
		return true;
	}	
	else if(child_prnt==="first"){
		
		if(parseInt(cnt)===0)
			return true;
		else
			return false;	
	}
	else if(child_prnt==="last"){
		
		if((de.length-1)===parseInt(cnt))
			return true;
		else
			return false;	
	}
	else if(child_prnt==="haschild"){
		if(de[cnt].children.length>0)
			return true;
		else
			return false;	
	}
	else if(child_prnt==="hasChildNodes"){
		if(de[cnt].hasChildNodes())
			return true;
		else
			return false;	
	}
	else if(child_prnt==="odd" || child_prnt==="even"){
		var sel={"odd":1,"even":0};
		if(cnt%2==sel[child_prnt])
			return true;
		else
			return false;	
	}
	else if(child_prnt==="childNodes"){
		if(de.childNodes.length > 0)
			return true;
		else
			return false;	
	}
	},
		css:function(id,d){
		var elem_str_class="";
		var get_attr=(_ct.has(main_dom.get_attr(id,['style']).style))?main_dom.get_attr(id,['style']).style:"";
		var split_style=get_attr.toString().split(";");
	
		_ct.each(split_style,function(spk,spv){ 
			var elem_d=spv.split(":");
			if(_ct.count(elem_d)>0 && _ct.has(spv)){
				if(!_ct.has(d,elem_d[0]) && _ct.has(elem_d[1])){
			var ele_key=elem_d[0].replace(/\s/,"");
			var ele_val=elem_d[1].replace(/\s/,"");
			if(!_ct.has(d[ele_key]))
				d[ele_key]=ele_val;
		
				}
			}
		});		
	
		for(var v in d){
			
		elem_str_class+=(v+":"+d[v]+";");
	if(_ct.has(id)){	
try{
	
	if(_ct.has(id.style.setAttribute)){ id.style.setAttribute(v,d[v]); }	
	
}catch(e){ console.log(e); }
}
}
if(_ct.has(id) ){
	try{
	
	if(_ct.has(id.setAttributeNode)){
var creat_elem=document.createAttribute("style");
	creat_elem.value=elem_str_class;
	id.setAttributeNode(creat_elem);	
	}
	}catch(e){ console.log(e); }
		}
		},
		getcss:function(ele,prop){
		
		

	this.loopstyle=function(dom,style,intt){
		var golb={};
		var golb_st="";
	
		
				if (!root.getComputedStyle) {
				golb[style] = dom.currentStyle[style];
				golb_st= dom.currentStyle[style];
				} else {
			golb[style] = root.getComputedStyle(dom).getPropertyValue(style);
			golb_st= root.getComputedStyle(dom).getPropertyValue(style);
			}
			return golb_st;
		};
		
		
		if(_ct.getTypeof(prop)==="array"){
		var golb_ret={};
			for(var fn in prop){
			
		golb_ret[prop[fn]]=this.loopstyle(ele,prop[fn],"array");
			}
			
			}
		else if(_ct.getTypeof(prop)==="string"){
			golb_ret=this.loopstyle(ele,prop,"str");
		
				}
			 
			return golb_ret;
		},
		checkfile:function(s,s1){
			
		var r = new RegExp("(."+s+")$");
			if(r.test(s1)){
			return s1;
			}else{
				var bool_url=/[?]/gi.test(s1);
		
				var splt=s1.split("?");
		
				var url_site_rep=splt[0].replace(/[\/]$/i,"");
				
			return (bool_url===false)?(s1+"."+s):(url_site_rep+"."+s+"?"+splt[1]);
			}
		
		},
		checkurlvalid:function(s){
		if(/^(HTTP|HTTPS|SFTP|FTP|TCP|\/{2})/.test(s.toUpperCase())){
		
				return main_dom.url_filter_restriction(s);
			}
		else{
		//var proto=window.location.protocol;
		//var url=window.location.host;
	
			return s;//main_dom.url_filter_restriction(proto+"//"+url+"/"+s);
			}
		
		},
		checkurlvalid_ajax:function(s){
			if(/^(http|https|sftp|ftp|tcp|\/{2}){1,4}/.test(s.toLocaleLowerCase())){
				
				return main_dom.url_filter_restriction(s);
				}
			else{
				
				if(!_ct.has(ps_glbl.config)){
			
			var proto=root.location.protocol;
			var url=root.location.host;
				return main_dom.url_filter_restriction(proto+"//"+url+"/"+s);
				}else{
					var url_m=ps_glbl.config.url;

					return main_dom.url_filter_restriction(url_m+""+s);
				}	
				}
			
			},
		dom_offset:function(_el){
			var target = _el,
      			 target_width = target.offsetWidth,
      			 target_height = target.offsetHeight,
      			 target_left = target.offsetLeft,
       		target_top = target.offsetTop,
      			 gleft = 0,
   			    gtop = 0,
    			   rect = {};

       var lcwps = function( _parent ) {
        if (!!_parent) {
        	gleft += _parent.offsetLeft;
        	gtop += _parent.offsetTop;
        	lcwps( _parent.offsetParent );
        } else {
        	return rect = {
        	top: target.offsetTop + gtop,
        	left: target.offsetLeft + gleft,
        	bottom: (target.offsetTop + gtop) + target_height,
        	right: (target.offsetLeft + gleft) + target_width
        	};
        }
    };
        lcwps( target.offsetParent );
        return rect;
		},
		
		get_scroll_position:function(){

			return {
				"top":document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop,
				"left":document.documentElement.scrollLeft?document.documentElement.scrollLeft:document.body.scrollLeft
				};
		},
		ajax_controller:function(boo){
		var xdr;
		var xhr_type;
		if (root.XDomainRequest && boo===true)
      {
			xdr = new XDomainRequest();
			xhr_type="ie";
		}else{
		xhr_type="noneie";
			
			if(root.XMLHttpRequest){
			xdr=new XMLHttpRequest();
			}else{
			try{
			xdr=new ActiveXObject("Microsoft.XMLHTTP");
			}catch(err){
				try{
			xdr=new ActiveXObject("Msxml2.XMLHTTP.6.0");
			}catch(err){
			
			}
			}
			}
	
	
		}

		return {"xdr":xdr,"xhr_type":xhr_type};
		
		},
		js_event_type:function(xhr,htype,func,jsons,func_type){
		var retrn={};
			
		if(htype==="ie"){
		var ie=["error","timeout","progress","load"];
		 retrn.ie={};
		for(var i in ie){
		retrn.ie[ie[i]]=(function(fnc){
	
						 xhr[fnc]=function(res){
						
						 	
						if(typeof(func)==="function"){
								
							
		if(xhr.status>=200 && xhr.status<300){
							
if(_ct.has(func_type,"success")){
func_type["success"](((jsons==="false")?xhr.responseText:_ct.parseJson(xhr.responseText)),xhr);
}
if(!_ct.has(func_type,"success") && !_ct.has(func_type,"error")){
func(((jsons==="false")?xhr.responseText:_ct.parseJson(xhr.responseText)),xhr);
}
}else{

if(_ct.has(func_type,"error")){

func_type["error"](((jsons==="false")?xhr.responseText:_ct.parseJson(xhr.responseText)),xhr);
}
}							}
						 }
							})("on"+ie[i]);
		}
		}
		else if(htype==="noneie"){
		retrn.noneie={};
			xhr.onreadystatechange=function(){
				
								
								if(xhr.readyState==4){ 
							if(typeof(func)==="function"){
								if(xhr.status>=200 && xhr.status<300){
								
								
if(_ct.has(func_type,"success")){
func_type["success"](((jsons==="false")?xhr.responseText:_ct.parseJson(xhr.responseText)),xhr);
}
if(!_ct.has(func_type,"success") && !_ct.has(func_type,"error")){
retrn.noneie["load"]=func(((jsons==="false")?xhr.responseText:_ct.parseJson(xhr.responseText)),xhr);
}
								}else{
								
								
if(_ct.has(func_type,"error")){

func_type["error"](((jsons==="false")?xhr.responseText:_ct.parseJson(xhr.responseText)),xhr);
}

								}
								}
								}
							}
		}
		return retrn;
		
		
		},
			js_json_delimiters:function(jsn){
					
					if(_ct.getTypeof(jsn)=="json"){
						return _ct.delimiter(jsn,"=","&");
						}
					else if(_ct.getTypeof(jsn)=="array"){
						var arry_cth=[];
						_ct.each(jsn,function(ck,cv){
						
								arry_cth.push(_ct.getKey(cv)+"="+_ct.getValue(cv).toString());
						});
						
						return arry_cth.join("&");
					}else{
						return jsn;
					}
					
					}
		,setLibrary:function(mth,d){
			if(_ct.indexOf(ps_internal_libry.config,mth)>=0){
				if(_ct.has(ps_internal_libry.logic,mth)){
				ps_internal_libry.logic[mth](d);
				}
			}
		},get_element_exist_attr:function(res){
				var attr_elem={};
			for (var att, i = 0, atts = res.attributes, n = atts.length; i < n; i++){
			    att = atts[i];
    			
				attr_elem[att.nodeName]=att.nodeValue;
			}
			return attr_elem;
		}
		,get_attr:function(meth,d){
			var	attr_type=((_ct.getTypeof(d)=="array")?d:[d]);
			var globl={};
	 	if(_ct.has(meth)){
			if(_ct.has(meth.getAttributeNode)){
			
				_ct.each(attr_type,function(ky,vl){
					
					if(meth.getAttributeNode(vl))
					globl[vl]=meth.getAttributeNode(vl).value;		
				});
				
			}else{
				
				_ct.each(attr_type,function(ky,vl){
					if(meth.getAttribute)
					globl[vl]=meth.getAttribute(vl);
				});
			}
              }
			return globl; 
			},
			url_filter_restriction:function(url){
				var ur1=url.toLowerCase().replace(/^(https:)/g,"");
				return ur1;
			},
			domio_type:function(type,dom,htmll){

			var main_dom=null;
				
				if(/\b(val)\b/g.test(type)){ 
					var alt_val=this.get_attr(dom,"ps_alt_value");
					if(_ct.has(htmll)){  
						dom.value=htmll;
					}
					if(_ct.has(alt_val,"ps_alt_value") && dom.value.trim().length==0){
					return alt_val.ps_alt_value;
					}else{
					return dom.value;
					}
					 
					
				}
				if(/\b(html)\b/g.test(type)){
					if(_ct.has(htmll)){ 
						dom.innerHTML=htmll;
					} return dom.innerHTML;
						}
				if(/\b(text)\b/g.test(type)){
					if(_ct.has(htmll)){ 
						(!_ct.has(dom.innerText))?dom.textContent:dom.innerText=htmll;
					} return (!_ct.has(dom.innerText))?dom.textContent:dom.innerText;		
					
				}if(/\b(outerhtml)\b/g.test(type)){
					if(_ct.has(htmll)){ 
						dom.outerHTML=htmll;
					} return dom.outerHTML;					
				}		
			},
			initFadeElement:function(meth,typ_s,intrvl_s,func){
				var ot={"fadein":100,"fadeout":0,"fadeto":100};
				var timetofade={"fadein":"ot-20","fadeout":"ot+20","fadeto":"100"};
				var timetoequal={"fadein":"ot<10","fadeout":"ot>90","fadeto":"ot==100"};

				if(/(fadeout)/g.test(typ_s) ){
						
						main_dom.css(meth,{"display":""});
						
						}
		if(/(fadeto)/g.test(typ_s)){
						main_dom.css(meth,{"display":""});
						fadefun(meth,intrvl_s.time/10);
						if(_ct.has(func) && (intrvl_s.time/10)==1) func();
						}
		else{
		var intval=setInterval(function(){
				var func_check=new Function("ot","return "+timetoequal[typ_s]);
					if(func_check(ot[typ_s])){
						clearInterval(intval);

						if(/(fadein)/g.test(typ_s)){
						main_dom.css(meth,{"display":"none"});
							if(_ct.has(func) ) func();
						}
																		
					}
			
					if(/(fadein|fadeout)/g.test(typ_s)){
							fadefun(meth,ot[typ_s]);

					}
				var func_ot=new Function("ot","return "+timetofade[typ_s]);
				ot[typ_s]=func_ot(ot[typ_s]);
				},intrvl_s.time);
		}
					function fadefun(meth,fade){
						var agenttype=new ps_agenttype();
						if(agenttype.useragent().browser.msie){
					main_dom.css(meth,{"filter":("alpha(opacity=" + (fade) + ")")});
						}else{ 
					main_dom.css(meth,{"opacity":(fade/100)});
						}
					}
			},
			dom_select_option:function(main,bol,type){
				var opt;
				var sel_opt='';
				var sel_opt_ar=[];
				var opt_cnt=0;
				var select_count=0;
				var booln=bol||false;
				main.each(function(td,meth){
					opt=meth[td].options;
			if(_ct.has(opt)){
			    for(var i=0;i<opt.length;i++){
				
				if(opt[i].selected==true){
					if(/\b(value)\b/g.test(type)){
						sel_opt=opt[i].value;
						sel_opt_ar.push(opt[i].value);
					}
					if(/\b(text)\b/g.test(type)){
						sel_opt=opt[i].text;
						sel_opt_ar.push(opt[i].text);
					}
					if(/\b(count)\b/g.test(type)){
						select_count=i;
					}
					opt_cnt++;
				}
			}
			}
			});
    		 if(/(value|text)/g.test(type)){
			if(booln==false)
			return (opt_cnt>1)?sel_opt_ar:sel_opt;
			else return sel_opt_ar;
		}else{
		return select_count;
			}
		},
		assign_element_distinction:function(dom,assn,bools){
			
			var assn_splt=_ct.ifUndefined(assn,"").split("::");
			
			function glg_func(bools,glb,key,valu){ 
				if(_ct.getTypeof(bools)=="array"){
					glb.push(valu[key]);
				}else{
					glb[key]=valu;
				}
			}
			var glb=bools;
			if(assn_splt.length==1){
				
				for (var td in dom) {
					
					glg_func(bools,glb,td,dom);
				}
				
			return bools;	
			}else if(assn_splt.length==2){
				
				var spl2=assn_splt[1];
		
				var fltr=["first","haschild","hasChildNodes","last","even","odd"];
					var cnt=0;
					for (var td1 in dom) {
						if(dom.length>cnt){	
							
						if(_ct.indexOf(fltr,spl2)>=0){
							if(main_dom.parentchild(spl2,dom,td1)){
							
							glg_func(bools,glb,td1,dom);
							}		
					
						}
						}
						var type_pos="";
						var index_pos="";
						if(/([\w\-\_]{1,})(\(\d\))/g.test(spl2)){
							var replc=spl2.replace(/([\w\-\_]{1,})\((\d)\)/g,function(g,g1,g2){
							
								type_pos=g1;
								index_pos=g2;
							});
							
							
							if(type_pos=="eq"){
								glb[index_pos]=dom;
								glg_func(bools,glb,index_pos,dom);
							}
							if(type_pos=="noteq"){
									if(td1!=index_pos){ 
									glg_func(bools,glb,td1,dom);
										}
							}
						}
						
						cnt++;
					}
				return glb;
			}
			else{
				
				return {};
			}
		},
		ajax_http_loader:function(main_jsn,xdr,method,url,parameter,dataform){

			

		try{
				var js_url=main_dom.checkurlvalid_ajax(url);
				try{
		if(_ct.indexOf(["get"],method)>=0){
			xdr.open(method,js_url+"?"+parameter,false);
			xdr.send(dataform); 
			}
		else if(_ct.indexOf(["post"],method)>=0){
			xdr.open(method,js_url,false);

			
			var arr_ref=[];
			if(_ct.has(xdr.setRequestHeader)){
			
			
				if(_ct.count(main_jsn.request_header)>0){
					_ct.each(main_jsn.request_header,function(rk,rv){
						xdr.setRequestHeader(rk,rv);
						arr_ref.push(rk);	
					});
				}
			}
			if(_ct.count(main_jsn.request_header)>0){
				if(_ct.has(xdr.setRequestHeader)){
				
				
					_ct.each(main_jsn.request_header,function(rk,rv){
						if(_ct.indexOf(arr_ref,rk)==-1){
							xdr.setRequestHeader(rk,rv);
						}
						

					});
				}
			}	
			if(!_ct.has(dataform)){
				if(_ct.indexOf(arr_ref,"Content-type")==-1){
					xdr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
				}
				xdr.send(parameter); 
			}else{ 
			
				xdr.send(dataform);
			}
			
		}	
		else{ 
			xdr.open(method,js_url+"?"+parameter,false);
			xdr.send(dataform);
			}
			}catch(e){ console.log(xdr);
				
				console.log(e);
			}
		}catch(e){ console.log(xdr);
		
			console.log(e);
		}
	
		},
		is_where_element:function(tar_m,ar){
			var node=[];
			 var node=_ct.clone(ar);
			 var	attr_type=((_ct.getTypeof(tar_m)=="array")?tar_m:[tar_m]);
			 
			 ar.splice(0,ar.length);
			 for (var i in node) {
         
				var ct=0;
				_ct.each(attr_type,function(tk,tv){
						if (_ct.has(node[i],tv)) {
                           
							if (node[i][tv]) {
                                ct++;
                            }
                        }
						});
				if (ct===_ct.count(attr_type)) {
                    
					ar.push(node[i]);
				}
				
             }
		},
	event_iniate:function(main,spltt,fn,bools){

	

		for(var v=0;v<spltt.length;v++){
		
			(function(main,m1,m2,m3,func){
			
				 main_dom.event_loop(main,m1,m2,m3,func,bools);
			
			
			})(main,spltt[v]+'','on'+spltt[v]+'','none',fn);
		}
		return main;
	},
	event_loop:function(elthis,c1,c2,c3,func,act_bool){
		
		var var_elthis = elthis;
		 elthis.each(function(elemm,td){
		 	var_elthis=elemm;
		if(act_bool){
		 main_dom.actionevent(elemm,c1,c2,c3,func);

		 return elthis;
		}
		else{

			 ps_glbl.remove_list_action.push(elemm);
			 return elthis;
		}
		});
			return var_elthis;
		},	
	elem_delegate_event:function(agentype,agentversion,elem,evnt,func,bools){
		
				
						
						var cnt_e=0;
						ct("dom",elem).on(evnt,function(e){
							
				
									
							if (e.target){
								var elem_index = _ct.indexOf(ps_glbl.control.delegation_record_list,e.target);
								
								if(elem_index==-1){
										func.call(this,e);
										ps_glbl.control.delegation_record_list.push(e.target);
								}
								
									
							}
								
						
							cnt_e+=1
						});

						
				
			},
	actionevent:function(elems11,ch,ie,mo,func){		
		
		
		
		if (elems11.attachEvent)
		{ 
		(function(elems11,ff,mob){elems11.attachEvent(ie,function(se){
			if ( _ct.indexOf(ps_glbl.remove_list_action,elems11)==-1)
			ff.call(elems11,se)},true)})(elems11,func,ie);  
		}else{

		if(elems11.addEventListener){	
		
	
			(function(elems11,ff,mob){elems11.addEventListener(ch,(function(e){
		if(typeof(e.targetTouches)!=="object" && _ct.indexOf(ps_glbl.remove_list_action,elems11)==-1){
				
				ff.call(this,e);
			}
			
			}),true)})(elems11,func,ch);
	
			if(mo!=="none"){
			(function(elems11,ff,mob){elems11.addEventListener(mo,(function(e){	
				if ( _ct.indexOf(ps_glbl.remove_list_action,elems11)==-1)
				ff.call(this,e);
			}),true)})(elems11,func,mo);
			}
			}
		}

		},

		find_element:function(tar_m_sub,ar,bool){
		
			var tar_m_split=tar_m_sub.split("=>");			
			var tar_m=(tar_m_split.length==0?tar_m_sub:tar_m_split[0]).trim();
			if (bool) {
			var node=_ct.clone(ar);
		
            
			   ar.splice(0,ar.length);
				
            }else{
				var node=[];		
						
					node.push(document);	
			}

			var tar=tar_m.split(",");
		
			for( var ni in node ){
			   for( var ti in tar_m ){
						if(/\[/g.test(tar[ti])){
							
				var fl_m="";
				var fl_type="where";
				var fl_va=[];
				var fl_va_cntnt={};
				var fl_va_cntnt_all=[];
				var fl_va_attr_all=[];
						var replc_str=tar[ti].replace(/([a-zA-Z\-\_]{0,}|\*)\[([\w\s\d\=\_\-\[\]\'\"\;\:]{1,})\]/gm,function(m,m1,m2,m3){
						
							
					
						   var m2_split_count=m2.split(";");
						   
							_ct.each(m2_split_count,function(sck,scv){
							  var m2_split_cnt=scv.split("=");
				
								if(_ct.count(m2_split_cnt)==1){
									fl_va_attr_all.push(m2_split_cnt[0].trim());
								}
							if(_ct.count(m2_split_cnt)>=2){
							
								fl_va.push(m2_split_cnt[0].trim());
								if(_ct.has(m2_split_cnt[1].trim())){
									
									fl_va_cntnt[m2_split_cnt[0].trim()]=m2_split_cnt[1].trim().replace(/[\'\"]{0,}/g,"");
								}
								else{
									
									fl_va_cntnt_all.push(m2_split_cnt[1].trim());

								}
							}
						}); 
						fl_type="where";
						
							fl_m=m1;
						
						return "asd";
					});
					
					
					var fl_m_tot=fl_m;
					
						
				if(_ct.has(node[ni].getElementsByTagName(fl_m_tot))){
							
					var node_elem=node[ni].getElementsByTagName(fl_m_tot);
					 for(var i=0,j=node_elem.length; i<j; i++){
						
							if(fl_type=="where"){
								if(_ct.count(fl_va_cntnt)>0 || _ct.count(fl_va_cntnt_all)>0 || _ct.count(fl_va_attr_all)>0 ){
							var get_attr=main_dom.get_attr(node_elem[i],fl_va);
							
								if(_ct.count(fl_va_cntnt_all)>0){
									
									var get_attr_key=_ct.getKey(get_attr);
									if(_ct.count(get_attr_key)==_ct.count(fl_va_cntnt_all) && _ct.count(_ct.where(get_attr,fl_va_cntnt))>0){
										
											ar.push(node_elem[i]);
									}
								
								}else{
									
								if(_ct.count(_ct.where(get_attr,fl_va_cntnt))>0  ){
									ar.push(node_elem[i]);
									}
								}
								if(_ct.count(fl_va_attr_all)>0){
									for(var kl in fl_va_attr_all){
									var get_attr=main_dom.get_attr(node_elem[i],fl_va_attr_all[kl]);
									
									if(_ct.has(get_attr,fl_va_attr_all[kl])){
									
										ar.push(node_elem[i]);
									}
									}
								
								}
								}	


							}
								if( fl_type=="all"){ 
									ar.push(node_elem[i]);
								}			
						}
				}
	
			}
			else if(/#/g.test(tar[ti])){
		
							var replce_dom=tar[ti].toString().replace(/^[#]/g,"");
							var idd_m=document.getElementById(replce_dom);
					if(_ct.has(idd_m)){
					
						ar.push(idd_m);
							}		
			}
			else if(/([a-zA-Z\-\_]{0,}\.[a-zA-Z0-9_\-]{1,})/g.test(tar[ti])){
			
				
				var s_node =document;
				var match_dom=tar[ti].toString().match(/([a-zA-Z\-\_]{0,}\.[a-zA-Z0-9_\-]{1,})/g,"");
		

					if (match_dom.length==0)
						return false;

					var main_class = match_dom[0].split(".")	
			

					if(/\w/g.test(main_class[0])){	
						cls_name=main_class[1];
						cls_tag=main_class[0];
					
					}else{
						cls_name=main_class[1];
						cls_tag="*";
					
					}
					
					if(s_node.getElementsByTagName(cls_tag)!=null && s_node.getElementsByTagName(cls_tag)!=undefined){ 
					var els = s_node.getElementsByTagName(cls_tag);
					
					for(var i=0,j=els.length; i<j; i++){
					
					var class_name_string = els[i].className;		
					if(_ct.getTypeof(class_name_string ) == "object"){
						//SVG classs interpreter
						if(_ct.has(class_name_string,"animVal")){
							class_name_string = class_name_string.animVal;
						}
					}
					var r = new RegExp("(?:^| )(" + cls_name + ")(?: |$)")
					, m = (""+class_name_string ).match(r);
					 var var_return = (m) ? true : false;
					 
					  if(var_return)
					  ar.push(els[i]);
						}	
						
					}
				
			}
			else{
			
			if(_ct.has(node[ni].getElementsByTagName(tar[ti]))){ 
				
				var els = node[ni].getElementsByTagName(tar[ti]);
	
     for(var i1=0,j1=els.length; i1<j1; i1++){


		
	
				ar.push(els[i1]);
			
		}
				}
			}
			      }	
			}
			
 		_ct.each(tar_m_split,function(cek,cev){
		
		if(cek>0) main_dom.find_element(cev,ar,bool);
		});
		
		}
		

	};	
