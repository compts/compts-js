var list_package_full_js =  [
  "src/window_open.js",
  "src/core.js",
  "src/boot_dom.js",
  "src/boot_config.js",
  "src/boot_ready.js",
  "src/boot_element.js",
  "src/boot_ajax.js",
  "src/boot_agenttype.js",
  "src/boot_amd.js",
  "src/boot_init.js",
  "src/boot_extension.js",
  "src/functional_helper.js",
  "src/functional_package_helper.js",
  "src/functional_extension.js",
  "src/functional.js",
  "src/mvc_controller_external_library.js",
  "src/mvc_library.js",
  "src/mvc_route.js",
  "src/mvc_controller.js",
  "src/mvc_model.js",    
  "src/mvc_init.js",


];

var list_package_utility_js =  [ 
    "src/window_open.js",
    "src/functional_helper.js",
    "src/functional_package_helper.js",
    "src/functional_extension.js",
    "src/functional.js",


];




exports.module=function(grassconf){   
var grass_concat = grassconf.require("grass_concat")
var grass_composer = grassconf.require("grass_composer");

grassconf.load("js_full_package",function(){
  
    return grassconf.src(list_package_full_js)
      .pipe(grass_composer( {
        "banner":{
            "header":"(function(window){ \n" +
            " /** \n" +
            " /* This program was writtern by pein freccs. \n" +
            " /* Please check my repository for more details and update \n" +
            " /* https://github.com/compts/compts \n"+
            " **/ \n",
        "footer":"\n })(window);"
        }
      } ) )
      .pipe(grass_concat(__dirname+"/dist/compt-full.js",{
        istruncate:true
      }) );
  

})

grassconf.load("js_utility",function(test){


return grassconf.src(list_package_utility_js)
  .pipe(grass_composer( {
    "banner":{
        "header":"(function(window){ \n" +
        " /** \n" +
        " /* This program was writtern by pein freccs. \n" +
        " /* Please check my repository for more details and update \n" +
        " /* https://github.com/compts/compts \n"+
        " **/ \n",
    "footer":"\n })(window);"
    }
  } ) )
  .pipe(grass_concat(__dirname+"/dist/compt-utility.js",{
    istruncate:true
  }) );


});
} 

exports.execute=function( lib ){   
lib.default=function(strm){
strm.series("js_full_package").series("js_utility");
}


return lib;    
}       
