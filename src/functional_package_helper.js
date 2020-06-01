if (typeof exports !== 'undefined') {
   


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
   
  } 