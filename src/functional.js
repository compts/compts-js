var _ct=function(s){};

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
