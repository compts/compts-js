(function(window){ 
 /** 
 /* This program was writtern by pein freccs. 
 /* Please check my repository for more details and update 
 /* https://github.com/compts/compts 
 **/ 
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
ps_glbl.extension_load_event={}; var main_helper={
		getTypeof:function(s){
			if(Object.prototype.toString.call(s)==="[object Object]"){
				return "json";
			}
			else if(Object.prototype.toString.call(s)==="[object Array]"){
				return "array";
			}

			else{
				return typeof(s);
			}
		},
		has:function(jsn,key){
			if(typeof(key)=="undefined")
			return jsn!=null && typeof(jsn)!="undefined" ;
			else
			return jsn!=null && typeof(jsn[key])!="undefined" ; 
		},
		count:function(jsn,bol){
				if(main_helper.has( jsn ) ==false){
					return 0;
				}
				var cnt=0;
				var bol_d=bol||false;
				var get_json=main_helper.getTypeof(jsn);
				if(get_json=="object" && main_helper.has(jsn,"style") && main_helper.has(jsn,"nodeType")  && main_helper.has(jsn,"ownerDocument")){
				for(var i in jsn){
					
					if(parseInt(i).toString()!="NaN"){
					cnt++;	
					}else{
						break;
					}
					
				}	

				}else{
				main_helper.for_loop(jsn,function(i,m){
					cnt++;
				});
					
				}

					if(get_json=="json" && bol_d==true){
					
						var jsn_parse= jsn;//_ct.parseString(jsn).match(/(:{)/gi);
						var cnts=0;
						main_helper.for_loop(jsn_parse,function(jk,jv){
							cnts+=1;
							});
						return cnts;
					}else{
					return cnt;
					}
		}, 
		indexOf:function(jsn,val){
			var jsn_type=main_helper.getTypeof(jsn);
			if(main_helper.getTypeof(jsn)=="array"){
					for(var i=0; i<main_helper.count(jsn); i++){
							if(jsn[i]==val)
								return i;          
						}
						return -1;
			}else
			return -1;	
		},
		
		for_loop:function(jsn,func){
			
				var re_loop=[];
				var typeofs = main_helper.getTypeof(jsn);
				if(typeofs ==="json" || typeofs ==="array" ){

				for(var ins in jsn){
					var bool_func = true;
				if( main_helper.getTypeof(jsn[ins])=="function"){
					
					if(/\b_/g.test(ins) ) { 
						bool_func= false
					}

				}	
					if(bool_func) {
					try{
						if(main_helper.has(func)){
								
								func(ins,jsn[ins]);
							
							}else{
							
							re_loop[ins]=jsn[ins];
								
							}
							}
							catch(e){
								console.log(e);
							}

					}
				}
				return re_loop
				}



		},

		random_key:function(){
			var d=new Date();
			var str_rand=  Math.random().toString(36).substr(2);
			var str_rand1=  Math.random().toString(36).substr(2)+Math.random().toString(36).substr(2);
			var gettme=d.getTime();
			
	
			return str_rand1;	
		}
		
		,datastring:function(str){
		
			var data_s="";

			if(typeof(str)=="string"){ 
			if(str.indexOf("'"))
			data_s='&quot;'+(str)+'&quot;';
			else if(str.indexOf('"'))
			data_s='&quot;'+(str)+'&quot;';
			else
			data_s=str;
			}else{
			data_s=str;

			}
			return data_s;
		},returnLoop:function(d,f,dl){
			var str="";
				str+="object";
			return f(d)+""+dl;
		},
		dateEventFormat:function(reg,ints,nm){
				var regp=reg;
				var intr=ints;
				
				if(regp.test(nm.toString())){
			intr=nm;
			}		
		if(!main_helper.has(nm) || nm.toString()=="NaN"){
		intr=ints;
		
		}

			return intr;
		},
		getKeyVal:function(jsn,typ){
			var typ_s=typ,ky=[],vl=[];
			var list_raw = [];
			main_helper.for_loop(jsn,function(kk,vv){
				ky.push(kk);vl.push(vv);
				list_raw.push({
					"key":kk,
					"value":vv
				});
			});
			if(main_helper.indexOf(["key","value"],typ )>-1 ){
				var ars=(typ=="key")?ky:vl;
				return (main_helper.count(ars)==1)?ars[0]:ars;		
			}
			if(typ =="first_index"){
				return main_helper.count(list_raw)>0?list_raw[0]:null;
			}
			if(typ =="last_index"){
				return main_helper.count(list_raw)>0?list_raw[ main_helper.count(list_raw)-1 ]:null;
			}
		//	else if(){

		//	}
		//	else{

		//	}
			

		},
		group:function(type,jsn,val){
			var jsn_val={};
                        var jsn_val_count={};
	
			main_helper.for_loop(jsn,function(kk,vv){
				
				if(main_helper.getTypeof(vv)==="json"){
				   if(main_helper.has(vv[val])){
			
					if(!main_helper.has(jsn_val[vv[val]])){
					  jsn_val[vv[val]]=[];
					  jsn_val_count[vv[val]]=[];
                                         
					}
					jsn_val[vv[val]].push(vv);
                                        jsn_val_count[vv[val]]=main_helper.count(jsn_val[vv[val]]);
				   } 		
				}
				else{
				  if(!main_helper.has(jsn_val[vv])){
				
				     jsn_val[vv]=[];
				      jsn_val_count[vv]=[];
				   }	
				    jsn_val[vv].push(vv);
                                     jsn_val_count[vv]=main_helper.count(jsn_val[vv]);		
				}
					
			});
			if(type=="count"){
			  return jsn_val_count;
			 }
			if(type=="content"){
			  return jsn_val;
			}
			

		},
		getdata:function(jsn,split_str){

			var spl_len=split_str.split(":");
			var spl=[];
			var jsn_total={};
			var jsn_cnt=0;

				if(!main_helper.has(jsn)){
					return "";
				}

				main_helper.for_loop(spl_len,function(i,v){
				
					spl.push(v);
				});
						
				main_helper.for_loop(spl,function(i,v){
					
						try{
					if(main_helper.has(jsn[v])){
					if(/^\s+$/.test(jsn[v])==false){
					
					jsn_total=jsn[v];
						jsn_cnt++; 
								}
					}else{
					
							if(main_helper.has(jsn_total)  ){
						if( main_helper.has(jsn_total[v])){
							
							jsn_total=jsn_total[v];
							jsn_cnt++;	

						}}else{

					
						}
					}
					}
					catch(e){ console.log(e);
				
					}
					});
				return (main_helper.count(spl)==jsn_cnt)?jsn_total:{};	
		},
		template_value:function(str_raw,reg){

				var str=str_raw;
				try{
				function queryJSString(txt,reg)
				{

				//var fnc_js=/[\r\t\n]{0,}<!([^-]{0})[\r\t\n\s](.*?)!>[\r\t\n]{0,}/g;
				//if(fnc_js.test(txt)){	
			
				//}else{
					return txt;
			//	}
				}	
				var strs=str;
				
			try{
				
					var regs=new RegExp("[\\r\\t\\n\\s]{0,}<![-]\\s{0,}(.*?)\\s{0,}!>[\\r\\t\\n\\s]{0,}","g");
						strs=strs.replace(regs,function(f,m,m1){
							var strs_perd=m.replace(".",":");
							var gtdata=main_helper.getdata(reg,strs_perd);
						
							return main_helper.getTypeof(gtdata)=="json"?"":gtdata;
						});		
			}catch(e){
				console.log(e);
			}		}catch(e){
					console.log(e);
				}
					var strs_finl=strs;//String(queryJSString(strs,reg));
			//strs_finl.replace(/f(!\s{0,}[A-Za-z0-9_]{0,}\s{0,}!)/gi,"");
						return 	strs_finl;//.replace(/<![-_=]{0,}\s{0,}(.*?)\s{0,}!>/gi,"");

			},
		repeat:function(strs,rpt){
					
		var nm_rpt=rpt||0;
		var nm_str=strs||"";
			if(nm_rpt>0)
			return new Array(nm_rpt+1).join(nm_str);
			else
			return "";
		},
		unserialize:function(data){

				//  discuss at: https://locutus.io/php/unserialize/
			// original by: Arpad Ray (mailto:arpad@php.net)
			// improved by: Pedro Tainha (https://www.pedrotainha.com)
			// improved by: Kevin van Zonneveld (https://kvz.io)
			// improved by: Kevin van Zonneveld (https://kvz.io)
			// improved by: Chris
			// improved by: James
			// improved by: Le Torbi
			// improved by: Eli Skeggs
			// bugfixed by: dptr1988
			// bugfixed by: Kevin van Zonneveld (https://kvz.io)
			// bugfixed by: Brett Zamir (https://brett-zamir.me)
			// bugfixed by: philippsimon (https://github.com/philippsimon/)
			//  revised by: d3x
			//    input by: Brett Zamir (https://brett-zamir.me)
			//    input by: Martin (https://www.erlenwiese.de/)
			//    input by: kilops
			//    input by: Jaroslaw Czarniak
			//    input by: lovasoa (https://github.com/lovasoa/)
			//      note 1: We feel the main purpose of this function should be
			//      note 1: to ease the transport of data between php & js
			//      note 1: Aiming for PHP-compatibility, we have to translate objects to arrays
			//   example 1: unserialize('a:3:{i:0;s:5:"Kevin";i:1;s:3:"van";i:2;s:9:"Zonneveld";}')
			//   returns 1: ['Kevin', 'van', 'Zonneveld']
			//   example 2: unserialize('a:2:{s:9:"firstName";s:5:"Kevin";s:7:"midName";s:3:"van";}')
			//   returns 2: {firstName: 'Kevin', midName: 'van'}
			//   example 3: unserialize('a:3:{s:2:"ü";s:2:"ü";s:3:"四";s:3:"四";s:4:"𠜎";s:4:"𠜎";}')
			//   returns 3: {'ü': 'ü', '四': '四', '𠜎': '𠜎'}

	
	
	var serial_ver=(data.slice(0, 0+ 1)).toLowerCase();
	var arry_type=['i','b','d','n','s','a'];
	if(!main_helper.has(data) || main_helper.indexOf(arry_type,serial_ver)<0){
		return {};
	}
 
		
			  var that = this,
				utf8Overhead = function(chr) {
				
				  var code = chr.charCodeAt(0);
				  if (code < 0x0080) {
					return 0;
				  }
				  if (code < 0x0800) {
					return 1;
				  }
				  return 2;
				};
			  error = function(type, msg, filename, line) {
				throw new that.window[type](msg, filename, line);
				return {};
			  };
			  read_until = function(data, offset, stopchr) {
				var i = 2,
				  buf = [],
				  chr = data.slice(offset, offset + 1);

				while (chr != stopchr) {
				  if ((i + offset) > data.length) {
					error('Error', 'Invalid');
				  }
				  buf.push(chr);
				  chr = data.slice(offset + (i - 1), offset + i);
				  i += 1;
				}
				return [buf.length, buf.join('')];
			  };
			  read_chrs = function(data, offset, length) {
				var i, chr, buf;

				buf = [];
				for (i = 0; i < length; i++) {
				  chr = data.slice(offset + (i - 1), offset + i);
				  buf.push(chr);
				  length -= utf8Overhead(chr);
				}
				return [buf.length, buf.join('')];
			  };
			  _unserialize = function(data, offset) {
				var dtype, dataoffset, keyandchrs, keys, contig,
				  length, array, readdata, readData, ccount,
				  stringlength, i, key, kprops, kchrs, vprops,
				  vchrs, value, chrs = 0,
				  typeconvert = function(x) {
					return x;
				  };

				if (!offset) {
				  offset = 0;
				}
				dtype = (data.slice(offset, offset + 1))
				  .toLowerCase();

				dataoffset = offset + 2;

				switch (dtype) {
				  case 'i':
					typeconvert = function(x) {
					  return parseInt(x, 10);
					};
					readData = read_until(data, dataoffset, ';');
					chrs = readData[0];
					readdata = readData[1];
					dataoffset += chrs + 1;
					break;
				  case 'b':
					typeconvert = function(x) {
					  return parseInt(x, 10) !== 0;
					};
					readData = read_until(data, dataoffset, ';');
					chrs = readData[0];
					readdata = readData[1];
					dataoffset += chrs + 1;
					break;
				  case 'd':
					typeconvert = function(x) {
					  return parseFloat(x);
					};
					readData = read_until(data, dataoffset, ';');
					chrs = readData[0];
					readdata = readData[1];
					dataoffset += chrs + 1;
					break;
				  case 'n':
					readdata = null;
					break;
				  case 's':
					ccount = read_until(data, dataoffset, ':');
					chrs = ccount[0];
					stringlength = ccount[1];
					dataoffset += chrs + 2;

					readData = read_chrs(data, dataoffset + 1, parseInt(stringlength, 10));
					chrs = readData[0];
					readdata = readData[1];
					dataoffset += chrs + 2;
					if (chrs != parseInt(stringlength, 10) && chrs != readdata.length) {
					  error('SyntaxError', 'String length mismatch');
					}
					break;
				  case 'a':
					readdata = {};

					keyandchrs = read_until(data, dataoffset, ':');
					chrs = keyandchrs[0];
					keys = keyandchrs[1];
					dataoffset += chrs + 2;

					length = parseInt(keys, 10);
					contig = true;

					for (i = 0; i < length; i++) {
					  kprops = _unserialize(data, dataoffset);
					  kchrs = kprops[1];
					  key = kprops[2];
					  dataoffset += kchrs;

					  vprops = _unserialize(data, dataoffset);
					  vchrs = vprops[1];
					  value = vprops[2];
					  dataoffset += vchrs;

					  if (key !== i)
						contig = false;

					  readdata[key] = value;
					}

					if (contig) {
					  array = new Array(length);
					  for (i = 0; i < length; i++)
						array[i] = readdata[i];
					  readdata = array;
					}

					dataoffset += 1;
					break;
				  default:
					error('SyntaxError', 'Unknown / Unhandled data type(s): ' + dtype);
					break;
				}
				return [dtype, dataoffset - offset, typeconvert(readdata)];
			  };

			  return _unserialize((data + ''), 0)[2];
		
		},
		//Word in number
		main_utility:function(dom){
			this.variable=dom;
			
			this.separate_decimal=function(){
				var dec_m={
					"number":0,
					"decimal":0,				
					}
				 var split_s=this.variable.toString().split(".");
				
					if(_ct.count(split_s)===1){
						dec_m['number']=parseInt(split_s[0]);
						
					}
					if(_ct.count(split_s)===2){
						   dec_m['number']=parseInt(split_s[0]);
						   dec_m['decimal']=parseInt(split_s[1]);		
					}
				   return dec_m;	
				}
			},
		
		round_by_thousands:function(nbm,lmt,dcml){
			var nmbr=nbm.toString();
			var nmbr_len=nmbr.split("").length;
			
			
			return parseInt(1+_ct.repeat(dcml,(Math.ceil(nmbr_len/lmt)-1)));
		},
		tenth_by:function(nbm,bool){
			var bools=_ct.has(bool)?bool:true;
			var var_jsn={
			//    0:'zero'     ,
					1:'one'      ,
				2:'two'      ,
				3:'three'    ,
				4:'four'     ,
				5:'five'     ,
				6:'six'      ,
				7:'seven'    ,
				8:'eight'    ,
				9:'nine'     ,
				10:'ten'     ,
				11:'eleven'  ,
				12:'twelve'   ,
				13:'thirteen'  ,
				14:'fourteen'  ,
				15:'fifteen'   ,
				16:'sixteen'   ,
				17:'seventeen' ,
				18:'eighteen'  ,
				19:'nineteen'  ,
				20:'twenty'   ,
				30:'thirty'   ,
				40:'forty'    ,
				50:'fifty'    ,
				60:'sixty'    ,
				70:'seventy'  ,
				80:'eighty'   ,
				90:'ninety'   ,
				100:'hundred' ,
				1000:'thousand',
				1000000:'million',
				1000000000:'billion' 										
				};
			if(_ct.has(var_jsn,nbm) & bools===true){
			return 	var_jsn[nbm];
			}else{
			return "";	
			}
		},
		in_number_hunders_specify:function(nmb){
			
			var nmb_str="";
			var hndr_flr=Math.floor(nmb/100);	
			var tnth_flr=nmb-(hndr_flr*100);
			if(hndr_flr>0){
			nmb_str+=main_helper.tenth_by(hndr_flr)+" "+main_helper.tenth_by(100);
			nmb_str+=" "+main_helper.in_number_specify(tnth_flr)
			}else{
				if(tnth_flr>0){
					if(tnth_flr>10 && tnth_flr<20){
				
					nmb_str+=main_helper.tenth_by(tnth_flr);
				}else{
					
					var tnth_v=main_helper.tenth_by(Math.floor(tnth_flr/10)*10);
					var ones_v=main_helper.tenth_by(tnth_flr-(Math.floor(tnth_flr/10)*10));
				
					
				nmb_str+=(tnth_v+" "+ones_v);
					
					
				}
					
				}
			}	
			



			return nmb_str;
		},
		in_number_specify:function(nmb){
			var nmbr_str="";
			var whl_nmbr=Math.floor(nmb/main_helper.round_by_thousands(nmb,3,"000"));
			var rmdr_nmbr=Math.floor(nmb%main_helper.round_by_thousands(nmb,3,"000"));
			var thnd_str=main_helper.tenth_by(main_helper.round_by_thousands(nmb,3,"000"),main_helper.round_by_thousands(nmb,3,"000")!=1);
		
			nmbr_str+=main_helper.in_number_hunders_specify(whl_nmbr)+" "+thnd_str;


			if(rmdr_nmbr>0){
				
				nmbr_str+=" "+main_helper.in_number_specify(rmdr_nmbr);
			}
			
			

		return nmbr_str;
		},
		in_decimal_specify:function(nmb,cnt){
			var nmbr_str="";
			var nbm_len=(parseInt(nmb.toString().split("").length));
			var hunrth_cnt=parseInt(1+_ct.repeat("0",(nbm_len==1?1:0)));
				nmbr_str+=main_helper.in_number_hunders_specify(nmb*hunrth_cnt);
			
		return nmbr_str;
		}			
			
		
}

if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      module.exports = main_helper;
    }
   
  } if (typeof exports !== 'undefined') {
   


  var main_helper =require("./functional_helper")
  } 

var main_package_helper={

    "first_capital_char":function(str){

      if(/^\s{1,}$/g.test(str) == false){
        var str_split = str.split("");
        if( main_helper.has( str_split[0] )  )
        return str_split[0].toUpperCase()+str_split.splice(1,str_split.length-1).join("");
        else return str;
      }else{
        return str;
      }
     
    }

}

if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      module.exports = main_package_helper;
    }
   
  } if (typeof exports !== 'undefined') {
   
	var main_package_helper =require("./functional_package_helper")

  var main_helper =require("./functional_helper")
  } 


var functional_extension={
 "ucFirstString":function(str,types){
    var default_types =  main_helper.has(types)?types:"first_capital_character";
    if(default_types == "first_capital_character"){
        return main_package_helper['first_capital_char'](str);
    }
    if(default_types == "first_capital_character_every_whitespace"){
    
        var split_str = str.split(/(\s{1,})/);
        var ary_str = [];
        main_helper.for_loop(split_str,function(k,v){
          if(main_helper.has(v))
          ary_str.push( main_package_helper['first_capital_char'](v) )
          else
          ary_str.push( v )
        })
        return ary_str.join("")
  }
 }


}

if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      module.exports = functional_extension;
    }
   
  } var _ct=function(s){};

if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {

      exports = module.exports = _ct;
    }
	var main_helper =require("./functional_helper")
	var functional_extension =require("./functional_extension")
    exports._ct = _ct;
  } 

else{
	root._ct=_ct
}

if(main_helper.has(ps_glbl) == false){
	if (typeof exports !== 'undefined') {
				var root = Object; 	
	  
	   }
	 else{
		 var root = window;
		
	 }
	var ps_glbl=root[Math.random().toString(36).replace(/[^a-z]+/g, '')]={};

	
}







_ct.has=function(jsn,key){
	return main_helper.has(jsn,key)
}
_ct.ifUndefined=function(jsn,nval,nval1){
	
	if(!_ct.has(nval1)){ 
		if(_ct.has(jsn)) return jsn;
		else return nval;
	}else{
		if(_ct.has(jsn,nval)) return jsn[nval];
		else return nval1;
	}
		
}

var list_datatype_of = ['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error'];





_ct.getTypeof=function(s){

	return main_helper.getTypeof(s)
}

_ct.indexOf=function(jsn,val){

	
	return main_helper.indexOf(jsn,val)
	
}

_ct.each=function(jsn,func){
	return main_helper.for_loop(jsn,func)
}

_ct.each(list_datatype_of, function(key,value) {
	
    _ct['is' + value] = function(obj) {
      return toString.call(obj) === '[object ' + value + ']';
    };
  });

 // _ct.each(functional_extension, function(key,value) {
	for(var key in functional_extension){ 
			//console.log(key,value,"---");
		   _ct[key] = functional_extension[key]; 
	}	   
//	});

_ct.varExtend=function(jsn,jsn_rpl){
	
	if(_ct.getTypeof(jsn)=="json" && _ct.getTypeof(jsn_rpl)=="json"){
		var jsn_s={};
		for (var k in jsn ){
				if(_ct.indexOf(['true','false'],jsn[k].toString().toLowerCase())>-1){
						var jsn_bool={"true":true,"false":false};
					
					jsn_s[k]=jsn_bool[jsn[k].toString().toLowerCase()];
				}else{
					jsn_s[k]=jsn[k];
				}
		}
		for (var k in jsn_rpl ){
		
			if(_ct.has(jsn_s,k) ){
				
					jsn_s[k]=jsn_rpl[k];
				
				
			}
		};
		return jsn_s;
	}else{
		return jsn;
	}
}
_ct.repeat=function(strs,rpt){
	return main_helper.repeat(strs,rpt);
}	


_ct.numberFormat=function(val,zrl,zr2){
	var arry=[];
	var val_zro=zr2||0;
	var ssd_va=val.toString();
	var splt_dec=ssd_va.split(".");

	var reg_exp=new RegExp("(\\d)(?=(\\d{"+(zrl||3)+"})+(?:\\.\\d+)?$)","g");

	var num_deli=splt_dec[0].replace(reg_exp, "$1,");	

	var ssd_va=num_deli+(_ct.count(splt_dec)>1?("."+splt_dec[1]):"");
	if(val_zro>0){
	
		var str_dec=ssd_va.split(".");
		if(_ct.count(str_dec)==1){
			ssd_va=ssd_va+"."+_ct.repeat("0",val_zro);
		}else{
		
			var dec_num=str_dec[1];
			if(dec_num.length>=val_zro){ 
				ssd_va=str_dec[0]+"."+(dec_num.substr(0,val_zro));
			}else{
				ssd_va=str_dec[0]+"."+dec_num+_ct.repeat("0",dec_num.length-val_zro);
			}
		} 
	}	

	return ssd_va;
}
_ct.getUniq=function(){
	return main_helper.random_key();
}
_ct.parseString=function(s){

var str="";
var str_strt="";
var str_end="";
var inc=0;
var inc_main; 
 if(_ct.has(s)){
if(_ct.getTypeof(s)==="json"){
	str_strt="{";
	str_end="}";
	
	

	_ct.each(s,function(i,m){
	
inc_main=((inc<_ct.count(s)-1)?",":"");
	if(typeof(m)==="object" && m!=null){
	str+=main_helper.datastring(i)+":"+main_helper.returnLoop(m,_ct.parseString,inc_main);

	}else{
	str+=main_helper.datastring(i)+":"+main_helper.datastring(m)+""+inc_main;
	}
	inc++;
	});
	
}
else if(_ct.getTypeof(s)==="array"){

		str_strt="[";
		str_end="]";
		
	_ct.each(s,function(i,m){
		inc_main=((inc<_ct.count(s)-1)?",":"");
		if(typeof(m)==="object"){

		str+=main_helper.returnLoop(m,_ct.parseString,inc_main);
		}else{
		str+=main_helper.datastring(m)+""+inc_main;
		}
	inc++;
		});
}
}

return (str_strt+str+str_end).replace(/[\r\t\n\s]{1,}/g, "&nbsp;").replace(/(&quot;)/gi,'"');
};



_ct.parseJson=function(s_val){
var s=s_val.replace(/(&quot;)/gi,'"',s_val).replace(/(&nbsp;)/gi,' ',s_val);
var str_len=s.length;
var sub_str=s.substring(1,str_len-1);
var sub_str_split=sub_str.split(",");
var j;

if (/^[\],:{}\s]*$/.test(s.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@')
                        .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
                        .replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
					
					if(s.length>0 && !/^\s*$/.test(s)) j = eval('(' + s + ')');
						
						}
				return j;		
};
_ct.insert=function(jsn,val){
	
	if(_ct.has(jsn)){
	var jsn_type=_ct.getTypeof(val);
	if(jsn_type=="json"){
		_ct.each(val,function(k,v){
			jsn[k]=v;	
		});
	}else{
		jsn.push(val);
	}
}
}

_ct.getKey=function(jsn){
	return main_helper.getKeyVal(jsn,"key");

}
_ct.getValue=function(jsn){
	return main_helper.getKeyVal(jsn,"value");

}
_ct.update=function(jsn,where,val){
	if(_ct.has(jsn)){
	
		
	}
}	

_ct.getJSONVariable=function(s){
		
	if(_ct.getTypeof(s)==="json"){
		
		return {};
	}
	else if(_ct.getTypeof(s)==="array"){
	
		return [];
	}else{
		return s;
	}
	
}





_ct.templateValue=function(str_raw,reg,option){
str_raw = main_helper.template_value(str_raw,reg)
var default_option=_ct.varExtend({
                        evaluate:"<![^\=\-]([\\s\\S]+?)!>",
						interpolate:"<!\=([\\s\\S]+?)!>",
						escape:"<!\-([\\s\\S]+?)!>",
                         
                             },option);

var regexp = new RegExp(
	[
		default_option.evaluate,
		default_option.interpolate,
		default_option.escape
	].join("|")+"|$","g"
)
	

var source = "__p+='";
var index = 0;

var escapes = {
    "'":      "'",
    '\\':     '\\',
    '\r':     'r',
    '\n':     'n',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  var escaper = /\\|'|\r|\n|\u2028|\u2029/g;

  var escapeChar = function(match) {
    return '\\' + escapes[match];
  };


str_raw.replace(regexp,function(match,evaluate,interpolate,escape,offset){
source+=str_raw.slice(index,offset).replace(escaper, escapeChar);

index = offset+match.length;

	if(evaluate){
		source+="';\n"+evaluate+"\n__p+='";
	}
	else if(interpolate){
		source+="'+\n((__t=("+interpolate+"))==null?'':__t)+\n'";
	}
	else if(escape){
		source+="'+\n((__t=("+interpolate+"))==null?'':__t)+\n'";
	}

	return match;
});
source+="';\n";



  //- source = "var __t,__p='',__j=Array.prototype.join," +
   source = "var __t,__p='',__j=[].join," +
      "print=function(){__p+=__j.call(arguments,'');};\n" +
      source + " return __p;\n";

    try {
		var val_source = "";

	 if(_ct.getTypeof(reg) == "json"){
		 for(var i in reg){
			 val_source+='var '+i+' = '+(_ct.indexOf(['array','json'],_ct.getTypeof(reg[i]))>-1? _ct.parseString(reg[i]):'"'+reg[i]+'"')+';';
		
	 }
	
	 }

      var render = new Function('obj', '_', val_source+source);
    } catch (e) {
		console.log(e );
      e.source = source;
      throw e;
    }
	return render.call(this, reg, _ct);

}
_ct.JsonToArray=function(jsn,val){
	var arry=[];
	_ct.each(jsn,function(k,v){
		if(!_ct.has(val)){
			arry.push(v);
		}else{
		if(_ct.has(v,val)){
		arry.push(v[val]);
		}
		}
		
	});
	return arry;
}
_ct.round_decimal=function(jsns,dmin,dmax){
	var jsn=jsns||0;
	var str_dec=jsn.toString().split(".");
	var s_dmin=dmin||1;
	var s_dmax=dmax||2;
	if(_ct.count(str_dec)==2){
	var p_cnts=_ct.count(str_dec[1].toString().split(""));
	var delmts=p_cnts<=s_dmin?s_dmin:s_dmax;
		
		var dec_s=Math.pow(10,delmts);
		return Math.round(parseFloat(jsn*dec_s))/dec_s;
	}else{
		return jsn;
	}
}

_ct.random=function(jsn,min,max){
var ran_var=[];
var ran_ctt=0;
var ran_min=(!_ct.has(min))?0:min;
var ran_max=(!_ct.has(max))?_ct.count(jsn):max+ran_min;

var jsn_var=_ct.getJSONVariable(jsn);
var math_random = Math.round(Math.random()*ran_max)
	_ct.each(jsn,function(k,v){	
			if( math_random ==k)
			ran_var = v ;	
		});
		return ran_var
}



_ct.delimiter=function(jsn,dlmtr,sprt){
var str="";
var cnt=0;
var sprt_r=((!_ct.has(sprt))?"":sprt);
var d_cnt=_ct.count(jsn);


		_ct.each(jsn,function(i,m){
		str+=(i+dlmtr+m);
		cnt++;	
	if(cnt<d_cnt)
	str+=sprt_r;	
		});
		
	return str;
	}

_ct.sort=function(jsn,index,ascs){
	var jsonn=jsn;
	var asc=(!_ct.has(ascs))?true:ascs;
	var pjsn=[];
		
	var js_m=(_ct.getTypeof(jsonn)=="json")?_ct.each(jsonn):jsonn;
	 jsonn=js_m.sort(function(a,b){
			if (asc) return (a[index] > b[index]);
        else return (b[index] > a[index]);
	
		});
		return jsonn;
}	
_ct.map=function(jsn,func){
	var value_arry=[];
	var cnt=0;
	console.log(jsn);
	var jsn_var=_ct.getJSONVariable(jsn);
	var jsn_type=_ct.getTypeof(jsn);
	_ct.each(jsn,function(k,v){
		if(_ct.has(func)){
		value_arry.push(func(v,k,cnt));
		cnt++;
		}
		
	});
	return value_arry;
}

_ct.first=function(jsn){
	return main_helper.getKeyVal(jsn,"first_index");
}	
_ct.last=function(jsn){
	return main_helper.getKeyVal(jsn,"last_index");
}
_ct.filter=function(jsn,func){


	var jsn_var=_ct.getJSONVariable(jsn);
	var jsn_type=_ct.getTypeof(jsn);
	
	_ct.each(jsn,function(k,v){
		
		if(_ct.has(func)){
			if(func(k,v)==true){
				if(/(json|array)/g.test(jsn_type)){
				_ct.append(jsn_var,v,k);
				}else{
					jsn_var=v;
				}
			}
		}
	});
	return jsn_var;
}


_ct.clone=function(jsn){
	var typeofs=_ct.getTypeof(jsn);
	var variable=_ct.getJSONVariable(jsn);
			_ct.each(jsn,function(k,v){
				_ct.append(variable,v,k);
			});
			
			return variable;	
}
_ct.append=function(jsn,val,key){
	var typeofs=_ct.getTypeof(jsn);
	var variable=_ct.getJSONVariable(jsn);
	
	if(typeofs=="json"){
		jsn[key]=val;
	}else if(typeofs=="array"){
		jsn.push(val);
	
	}
	return jsn;
}

_ct.append_isArrayExist=function(key,val){
	var outpt=[];
	var ary_type=_ct.getTypeof(key);
	var ary_type1=_ct.getTypeof(val);
	if(/(array)/g.test(ary_type) && /(array)/g.test(ary_type1)){
	_ct.each(val,function(k,v){
		if(_ct.indexOf(key,v)===-1){
		key.push(v);
		}
	});
	return key;
	}
	else{
		return [];
	}
	
}
_ct.isExact=function(key,val ,is_exist ){
	if (val==null) return false;
	var get_key=_ct.getValue(key);

	var local_is_exist = _ct.has(is_exist) & _ct.getTypeof(is_exist) =="boolean" ?is_exist:true;
	var val_s=/(json|array)/g.test(_ct.getTypeof(val))?val:[val];
	var key_s=/(json|array)/g.test(_ct.getTypeof(key))?key:[key];
		
	var obj = key;
	var cnt=0;

	_ct.each(key_s,function(kk,kv){

	
		if(_ct.getTypeof(val)=="json"){ 

			if(_ct.has(val_s[kk])){  
				var local_is_valid = local_is_exist?val_s[kk]==kv:val_s[kk]!=kv;
			   if(local_is_valid){
				cnt++;
				}	
			}
		}
		if(_ct.getTypeof(val)=="array"){ 
			var local_is_valid = local_is_exist? _ct.indexOf(val_s,kv)>-1 : _ct.indexOf(val_s,kv)==-1;
			if( local_is_valid ){
				cnt++;
			}
		}
	});


if (cnt==0)
return false;
else
return cnt==_ct.count(val);
}
function where_loop_execution( jsn,whr,func,is_where ){
	var jsn_val={};

		var jsn_s=(_ct.count(jsn,true)==0)?((_ct.getTypeof(jsn)=="array")?jsn:[jsn]):jsn;
		var whr_s=whr||{};
		var variable=_ct.getJSONVariable(jsn);
		
		_ct.each(jsn_s,function(jk,jv){
		
			if(_ct.getTypeof(jsn)=="array"){
				filter = [jv];
			}else{
				var filter = {};
				filter[jk]=jv;
			}

			if(_ct.isExact(filter,whr_s,is_where)){
			
				_ct.append(variable,jv,jk);
				if(_ct.has(func)){
					func(jv,jk);
				}

			}
		});

		return variable;
}

_ct.where=function(jsn,whr,func){
	return where_loop_execution(jsn,whr,func,true);
};

_ct.where_not=function(jsn,whr,func){
	return where_loop_execution(jsn,whr,func,false);	  
};

_ct.group_count=function(jsn,val){

return main_helper.group("count",jsn,val);
}
_ct.group_content=function(jsn,val){

return main_helper.group("content",jsn,val);
}
_ct.count=function(jsn,bol){
	return main_helper.count(jsn,bol)
};	
	
_ct.getdata=function(jsn,split_str){

	return main_helper.getdata(jsn,split_str);
}
_ct.unserialize=function(data){
	return main_helper.unserialize(data);
}
_ct.limit=function(jsn,s1,s2,func){
	var cnt=0;
	var glo_jsn={};
	var glo_indtfd;
var s1_m=((!_ct.has(s1))?0:s1);
var s2_m=((!_ct.has(s2))?_ct.count(jsn):s2);
	_ct.each(jsn,function(i,m){
	if(cnt>=s1_m && cnt<=s2_m){
	glo_jsn[i]=m;
		if(_ct.has(func)){
		glo_indtfd=func(i,m);
		if(_ct.has(glo_indtfd))
		glo_jsn[i]=glo_indtfd;		
		};		
	}
	cnt++;
	});
	return glo_jsn;
}
_ct.to_array=function(nm){
	var return_val = nm;
	if(_ct.getTypeof(return_val) !="array"){ 
		return_val = [nm]

	}
	return return_val;

}

_ct.arrayConcat=function(nm,nmval){
	var return_val = nm;
	if(_ct.getTypeof(return_val) =="array"){ 
		 return return_val.concat(nmval)

	}else{
		return []
	}
 

}
_ct.to_double=function(nm){

			return parseFloat(main_helper.dateEventFormat(/(\d\.)/g,0.00,(nm==null)?0:nm));

}
_ct.to_integer=function(nm){
		
		return parseInt(main_helper.dateEventFormat(/(\d)/g,0,(nm==null)?0:nm));

}
_ct.array_sum=function(arry,dlmtr){
		var sum=0;
		var arry_s=arry||[];
		var dlmtrs=dlmtr||3;
		_ct.each(arry_s,function(ak,av){
			if(_ct.has(av))
			sum+=parseFloat(av);
		});
	return sum.toFixed(dlmtrs);
}
_ct.remove=function(arry,kys){
	var type_js=_ct.getTypeof(arry);
	
	if(type_js==="array"){
		var reslt=[];
		_ct.each(arry,function(ak,av){
			if(_ct.indexOf(arry,kys)<0){
				reslt.push(av);	
			}
		});
		return reslt;	
	}else if(type_js==="json"){
		var reslt={};
		var jsn_vw=[];
		_ct.each(arry,function(ak,av){
			_ct.where(arry,kys,function(jk,jv){
				jsn_vw.push(jk);
			});
		});

		_ct.each(arry,function(ak,av){
			if(_ct.indexOf(jsn_vw,ak)<0){
				reslt[ak]=av;
			}
		});
		return reslt;
	}
}
_ct.shuffle=function(jsn){
			var output=jsn;
			if (_ct.indexOf(["array","json"],_ct.getTypeof(jsn))>-1) {
			var counts=_ct.count(jsn)-1;
			var randomIndex;
			var temporaryValue;
		
				for (var currentIndex=counts;currentIndex>0;currentIndex--) {
                    //code               
						randomIndex = Math.floor(Math.random() * currentIndex);						
					if(_ct.getTypeof(jsn)=="array"){
					
						temporaryValue = output[currentIndex];
						output[currentIndex]=output[randomIndex];
						output[randomIndex] = temporaryValue;			
				}
				}
            }
		return output;
}
_ct.range=function(max,min){
			var min_s=_ct.has(min)?min:0;
			var max_s=_ct.has(max)?max:10;
			var output=[];
			
			for (var i=min_s;i<=max_s;i++) {
              output.push(i);
            }
			return output;
}

_ct.money_in_words=function(nmb){
	if(!_ct.has(nmb) && _ct.getTypeof(nmb)!=="number")
	  return "zero";
				
	var main =new main_helper.main_utility(nmb);		
	var number_assign=main.separate_decimal()
	var number_s=number_assign.number;	
	var decimal_s=number_assign.decimal;	

	if (nmb===0)
	return "zero";

	if(decimal_s>0){
	return main_helper.in_number_specify(number_s)+" and "+main_helper.in_decimal_specify(decimal_s,0);
	}
	else{
	return main_helper.in_number_specify(number_s);
	}

}

 })(window);
