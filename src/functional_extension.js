if (typeof exports !== 'undefined') {
   
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
   
  } 