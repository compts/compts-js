var main_helper={
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
   
  } 