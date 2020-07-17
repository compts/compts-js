function ps_extender(){
	
	}
	ps_extender.prototype.extend={
	class_extnd:function(clas,id){
		
		for ( var key in clas ){
		 id[key] = clas[key]; 
			}
		return id;	
	        },
		
		obj_extnd:function(id){
			var ps_ob=new ps_observer(id);
			return ps_ob;
	        }

	}
	
	ps_extender.prototype.dom={
		
		html:{
		hasClass: function(s, klass) {
  			var r = new RegExp("(?:^| )(" + klass + ")(?: |$)")
    				, m = (""+s).match(r);
			  return (m) ? m[1] : null;
			},
		tag_value:function(tar,ar){
		
			var tar_sub=tar.split("=>");

			_ct.each(tar_sub,function(eck,ecv){
				find_element(ecv,ar,eck>0);
			
			});
			
			
			}
		
				
	
		},
	
		init:function(s,ar){
		var ar_s=[];
	
		
		
		var chd_dom=s.toString().match(/^[#.\w]{0,1}/g);
		
		var replce_dom=s.toString().replace(/^[#.]/g,"");
			
			if(chd_dom===null)
			return document;
			else{
				
				this.html.tag_value(s,ar_s);
				
		
		}
		
		return assignElementDistinction(ar_s,s,ar); 
	
		}
	}

	

	
	
	
	
	function ps_observer(d){
	this.element=d;	

	this.parent_child=null;
	

	this.element_function=function(d){
		this.element=d;
	}
	this.addclass=function(d){
		var d_ary=_ct.getTypeof(d)=="array"?d:[d];
		this.each(function(meth,td){ 
		var clasd=meth.className.replace(/(\s)$/,"");
		meth.className=clasd+" "+d_ary.join(" ");
		});
			return this;
		}
	this.removeclass=function(d){
		var d_ary=_ct.getTypeof(d)=="array"?d:[d];
		this.each(function(meth,td){

		var clasd=meth.className.replace(/(\s)$/,"");

		var clasd_d=new RegExp("(" + d_ary.join(" ") + ")");
  
		var clasd_rpl=clasd.replace(clasd_d,"");
		meth.className=clasd_rpl;
		});
			return this;
	}
	this.is=function(elem){
		isWhereElement(elem,this.element);
		return this;	
	}
	this.findElem=function(elem){
		find_element(elem,this.element,true);
		return this;
	}
	this.get_template_html=function(reg){
		var dom_main="";
			var domm = this.element;
		
			this.each(function(meth,td){
				if(_ct.has(meth.innerHTML)){
					dom_main+=meth.innerHTML;
				}
				//dom_main=ct("dom",domm).html();
			})	
			
			
			return _ct.templateValue(dom_main,reg);	
		
	}
	this.checked=function(d){
		var val_arry=[];	
		var cnt=0;
		
		this.each(function(meth,td){

			if(!_ct.has(d)){
			val_arry.push(meth.checked);

			}else{
		
			meth.checked=d;
			
			}
			cnt++;
		});
		
			if(!_ct.has(d)){
				return (cnt==1)?val_arry[0]:val_arry;
			}else{
				return this;
			}
	}
	
	this.remove=function(d){
var dom=((!_ct.has(d))?"none":document.querySelector(d));

		this.each(function(meth,td){
			if(dom!="none"){
	
				meth && meth.parentNode && meth.parentNode.removeChild(dom);
			}
			else{
		
				
				meth && meth.parentNode && meth.parentNode.removeChild(meth);
			}
			});
		
		return this;
	};
this.empty=function(){
		
		this.each(function(meth,td){
			
			while (meth.firstChild) meth.removeChild(meth.firstChild);
		});
		
		return this;
		
	}
this.fade=function(typ,intrvl,func){

var typ_s="";

var intrvl_s={};
	if(_ct.getTypeof(intrvl)=="json"){
		if(_ct.has(intrvl.time)){
			intrvl_s.time=intrvl.time;
			}	
		
	}else{
		if(_ct.getTypeof(intrvl)=="number"){
			intrvl_s.time=intrvl;
		}
		if(_ct.getTypeof(intrvl)=="string"){
			var jsn_spd_type={"slow":400,"fast":200,"faster":100,"slower":500};
			if(_ct.has(jsn_spd_type,intrvl)){
			intrvl_s.time=jsn_spd_type[intrvl];
			}else{
			intrvl_s.time=400;

			}

		}
	}
	
	this.each(function(meth,td){
		if(/(fadetoggle)/g.test(typ)){
		typ_s=(domGetCSS(meth,"display")=="none")?"fadeout":"fadein";
		
	}else{
		typ_s=typ;
	}
		initFadeElement(meth,typ_s,intrvl_s,func);
	});
	return this;
}

this.css=function(d,c){
	var typeofs = _ct.getTypeof(d) == "json"?true:false;

	var cntt=((!_ct.has(c))?0:c-1);
	var val_g={};


	this.each(function(meth,td){
		if (typeofs)
		domCSS(meth,d);
		else{
		if(parseInt(td)<=cntt){
		
		val_g[td]=domGetCSS(meth,d);

			}
		}
	});
		
			return typeofs ? this : ((cntt===0)?val_g[0]:val_g);
		};
	this.show_hide=function(d){
		var d_var=d||"";
		this.each(function(meth,td){

	var elem=meth.style.display||domGetCSS(meth,"display");
		domCSS(meth,{display:((elem=="none")?d_var:"none")});

		});
		return this;
	}

	this.hide=function(){
	
		this.each(function(meth,td){

			domCSS(meth,{display:"none"});
		});
		return this;
	};
	this.show=function(){
	
		this.each(function(meth,td){

			domCSS(meth,{display:""});
		});
		return this;
	}
	this.attr=function(d,bol){
		var cnt=0;
		var globl={},globl_all=[];
		var var_bol=bol||false;
		

		var is_where_attr = _ct.has(d);
	
	var	attr_type=((_ct.getTypeof(d)=="array")?d:[d]);

	var typeofs = _ct.getTypeof(d) == "json"?false:true;
	
		this.each(function(meth,td){

			if(is_where_attr){

				if(typeofs){
					var get_attr=getDomAttr(meth,attr_type);
					if( var_bol==true){
					
					if(_ct.count(get_attr)>0 ){
						globl[cnt]={};
						globl[cnt]=get_attr;		
								cnt++;
					}
						}else{
						globl[cnt]={};
						globl[cnt]=get_attr;		
								cnt++;

						}
				}else{
					for(var v in d){
						var crte_elem=document.createAttribute(v);	
							crte_elem.value = d[v];

					if(meth.setAttribute)
						meth.setAttribute(v,d[v]);	
					else
						meth.setAttributeNode(crte_elem);
					}
				}		
			}else{
				globl_all.push(get_element_exist_attr(meth));
			}	
		});	
			if( is_where_attr==true){
				return typeofs==false ? this : ((cnt==1 || cnt==0)?((attr_type.length==1)?((typeof(globl[0])==="undefined")?"undefined":globl[0][d]):globl[0]):globl);
			}
			else{
				return _ct.count(globl_all)==0?-1:(_ct.count(globl_all)==1)?globl_all[0]:globl_all;
			}	
	}

	
	this.getindexattr=function(d){
		var cnt=0;
		var globl=[];
	
		if(_ct.getTypeof(d)!="json"){ return -1};
		var getkey=_ct.getKey(d);
		this.each(function(meth,td){
			var get_attr=getDomAttr(meth,getkey);	
			var where_count=_ct.where(get_attr,d);
			
			if(_ct.count(where_count)>0){
			globl.push(cnt);	
			}
			cnt++;
		});
		
			return _ct.count(globl)==0?-1:(_ct.count(globl)==1)?globl[0]:globl;
		}
	
	this.removeattr=function(d){
		var attr_type=((_ct.getTypeof(d)=="array")?d:new Array(d));
		this.each(function(td,meth){
			if(meth.removeAttribute){
				_ct.each(attr_type,function(ky,vl){
				meth.removeAttribute(vl);
				});
			} 
		});

		}
	
	this.inserthtml=function(com,htm){
		var lst_adj={"after":"afterend","before":"beforebegin","prepend":"afterbegin","append":"beforeend",
				"afterend":"afterend","beforebegin":"beforebegin","afterbegin":"afterbegin","beforeend":"beforeend"			
				};
		this.each(function(meth,td){
                     try{
			if(_ct.has(lst_adj,com) && _ct.has(meth))
			meth.insertAdjacentHTML(lst_adj[com],htm);
			}catch(e){

			}
			});
			
	
		return this;
		}
	this.getdom=function(com,htm){
		var id_dm=[];
		this.each(function(meth,td){
	
			id_dm.push(meth);
		});
	return id_dm;
	}
	
	
    this.tagName=function(){
			var arry_pl=[];
			this.each(function(meth,td){
				
				arry_pl.push(meth.tagName);
			});
			return _ct.count(arry_pl)==1?arry_pl[0]:arry_pl;
		}
	
	this.setselected=function(val){
		var opt;
		
		this.each(function(meth,td){
			opt=meth.options;
		
			for(var i=0;i<opt.length;i++){

					opt[i].selected=(opt[i].value==val);			
				
			}
		});
		return this;
	}
	this.getselected=function(bol){
		return domSelectOption(this,bol,"value");
	}
	this.getselectedtext=function(bol){
		return domSelectOption(this,bol,"text");
	}
	this.getselectedcount=function(bol){
		return domSelectOption(this,bol,"count");
	} 
	this.getparent=function(){
	
		var arry_pl=[];
			this.each(function(meth,td){
				
				arry_pl.push(meth.parentElement);
			});
			return _ct.count(arry_pl)==1?arry_pl[0]:arry_pl;

	} 
	this.getFormAttr=function(){
		return formGetValues(this)
	}
	this.eq=function(d){


		this.parent_child="node::eq("+d+")";

		return this;
		};
	this.noteq=function(d){


		this.parent_child="node::noteq("+d+")";

		return this;
		};
	this.on=function(f,fn){
	
		DomEventIniate(this,f.split(","),fn,true);
		return this;
	};
	this.off=function(f,fn){
	
		DomEventIniate(this,f.split(","),fn,false);
		return this;
	};
		
	

	this.delegate=function(evnt,target_element,func){
		var evnt_splt=evnt.split(",");
		var main=this;
		var agentype = ct("agenttype").useragent({browser:'msie'});
		var agen_version = ct("agenttype").checkversion('msie');
		
				main.on("click,touchstart",function(e){
			
			
			ct("dom",target_element).each(function(ev,ek){
				elemDelegateEvent(agentype,agen_version,ev,evnt,func,false);
			


				});
		
			});

		

			return this;
	}	
	this.index=function(doms){
		var arry_dm=[];
		this.each(function(elemm,td){
			
			arry_dm.push(elemm);
			});
		
	
		 return _ct.indexOf(arry_dm,doms)	
	}
	this.isDomNull=function(){
		var bool=false;
		this.each(function(elemm,td){
			
			if(elemm==null){
				bool=true;
			}
		});
		return bool;
	}
	this.childposition=function(){
		 var i=1;
		
		 var node=((!_ct.has(this.element[0]))?this.element:this.element[0]);
			console.log(this.element)
		    while(node.previousSibling){
		        node = node.previousSibling;
		        if(node.nodeType === 1){
		            i++;
		        }
		    }
		    return i-1;
	};
	this.getElementDimension=function(){
		var arry_elem=[];
			
		this.each(function(elemm,td){
	
			if(_ct.has(elemm.getBoundingClientRect())){
		
			var gtrect=elemm.getBoundingClientRect();
			arry_elem.push({
				"bottom":gtrect.bottom,
				"height":gtrect.height,
				"left":gtrect.left,
				"right":gtrect.right,
				"top":gtrect.top,
				"width":gtrect.width
				});
			}
		});
		
		return _ct.count(arry_elem)==1?arry_elem[0]:arry_elem;
	}
	this.getElementOffSet=function(){

		var arry_elem=[];
			
		this.each(function(td,elemm){
			var gtelem=elemm[td];
			arry_elem.push(dom_offset(gtelem));

		
		});
		return _ct.count(arry_elem)==1?arry_elem[0]:arry_elem;
	}
	this.getScrollPositon=function(){

		var arry_elem=[];
			
		this.each(function(element,td){
		
		
		var rect = element.getBoundingClientRect();
		var elementLeft,elementTop; //x and y
		var scrollTop =  get_scroll_position().top;

		var scrollLeft = get_scroll_position().left;
			elementTop = rect.top+scrollTop;
			elementLeft = rect.left+scrollLeft;
			arry_elem.push({"top":elementTop,"left":elementLeft  });

		
		});
		return _ct.count(arry_elem)==1?arry_elem[0]:arry_elem;

	}
	this.domview=function(dom,htm){
		var domee=this.getlength();
			var str=((domee)>1?[]:"");
			this.each(function(meth,td){
			var dom_type=_ct.indexOf(["checkbox","radio"],_ct.ifUndefined(meth.type,"-"))>-1?meth.checked:true;
				if(dom_type){
				if(domee>1){	
					str.push(domIOtype(dom,meth,htm));
				}else{
					str=domIOtype(dom,meth,htm)+"";
				}
				
				domIOtype(dom,meth,htm);
				}
				});
			if(_ct.has(htm)){	
				return this;
				}else{
					if(_ct.getTypeof(str)=="array")
					return _ct.count(str)==1?str[0]:str;	
					else
					return str;
				}

	}
	this.getlength=function(){
	var cnt_i=0;
	
	this.each(function(td,elemm){

	cnt_i++;
	});
	return cnt_i;
	};
	
	this.each=function(func){
	
	var cnt=0;
	var ele_cnt=this.element;
	var prnt_chld=this.parent_child;
	

		var ass_elem=assignElementDistinction(this.element,prnt_chld,{});
			for (var td in ass_elem) {
				(function(func,d,m){
				if(ele_cnt.length>cnt){	
					
						func(m[d],d);
			
					}
					cnt++;
				})(func,td,this.element);	
		
			}


		}
		};	
		


var devnt=['scroll','focus','blur','change','abort','error','click','dblclick','mousemove','mouseout','mouseover','mousedown','mouseup','mouseenter','mouseleave','resize','keydown','keyup','keypress','touchstart','touchmove','touchend','contextmenu',
			'drag','dragstart','dragend','dragover','dragenter','dragleave','drop',
			'd_focus','d_blur','d_change','d_abort','d_error','d_click','d_dblclick','d_mousemove','d_mouseout','d_mouseover','d_mousedown','d_mouseup','d_resize','d_keydown','d_keyup','d_keypress','d_touchstart','d_touchmove','d_touchend','d_contextmenu'];		
var child={0:["firstChild","first"],1:["haschild","haschild"],2:["hasChildNodes","hasChildNodes"],3:["childNodes","hasChildNodes"],4:["lastChild","last"],5:["even","even"],6:["odd","odd"]};		
var appendhtml={0:["after","afterend"],1:["before","beforebegin"],2:["prepend","afterbegin"],3:["append","beforeend"]};
var styletype=['width','display','height','visible'];
var domview=['val','html','text','outerhtml'];
var elemfade=['fadein','fadeout','fadeto','fadetoggle'];

for(var f1 in devnt){
		var check_mobile=(/(touchstart|touchmove|touchend)/.test(devnt[f1]))?devnt[f1]:"none";
		  (function(m,m1,m2,m3){		
		
		ps_observer.prototype[m]=function(func){
		
			eventLoop(this,m1,m2,m3,func,true);
			return	this
		}	
		 })(devnt[f1]+'',devnt[f1]+'','on'+devnt[f1]+'',check_mobile);
	}	




for(var f2 in child){
	
	(function(m1,m2){
	ps_observer.prototype[m1]=function(){
		this.parent_child="node::"+m2;
				return this;
					}
	})(child[f2][0],child[f2][1]);
		}
		
for(var f3 in appendhtml){	
		
		(function(m1,m2){	
		ps_observer.prototype[m1]=function(html){
			
				this.inserthtml(m2,html);
			return this;
				}
		})(appendhtml[f3][0],appendhtml[f3][1]);			
		}
		
for(var f4 in styletype){
			
			(function(m){
			
				ps_observer.prototype["get"+m]=function(cnt){
			
			return this.css(m,cnt);
				}
			
			})(styletype[f4]);
			}
for(var f5 in domview){
			
			(function(m){
			
				ps_observer.prototype[m]=function(cnt){
			
			return this.domview(m,cnt);
				}
			
			})(domview[f5]);
			}

for(var f6 in elemfade){
			
			(function(m){
			
				ps_observer.prototype[m]=function(intrvl,fncmthd){			
			return this.fade(m,intrvl,fncmthd);
				}
			
			})(elemfade[f6]);
			}