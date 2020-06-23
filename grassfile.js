
    
exports.module=function(grassconf){   

       
  
      
        grassconf.load("js_full_package",function(grsm){
          var list_package =  [ 
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
            "src/mvc_model.js",    
            "src/mvc_controller.js",
            "src/mvc_init.js",
            
            ];
            grsm.setDirectory({
                "srcDir":list_package, 
                "destDir":__dirname+"/dist/"
              });
            grsm.pipe("grass_composer",{
                "banner":{
                    "header":"(function(window){ \n" +
                    " /** \n" +
                    " /* This program was writtern by pein freccs. \n" +
                    " /* Please check my repository for details and update \n" +
                    " /* https://github.com/codehyouka/compt \n"+
                    " **/ \n",
                    "footer":"})(window)"
                }
              })
            grsm.pipe("grass_concat",__dirname+"/dist/compt-full-package.js");
             
          })
         
          

          grassconf.load("js_utility",function(grsm){
            var list_package =  [ 
              "src/window_open.js",
              
              "src/functional_helper.js",
              "src/functional_package_helper.js",
              "src/functional_extension.js",
              "src/functional.js",
              
              
              ];
              grsm.setDirectory({
                  "srcDir":list_package,
                  "destDir":__dirname+"/dist/"
                });
              grsm.pipe("grass_composer",{
                  "banner":{
                      "header":"(function(window){ \n" +
                      " /** \n" +
                      " /* This program was writtern by pein freccs. \n" +
                      " /* Please check my repository for details and update \n" +
                      " /* https://github.com/codehyouka/compt \n"+
                      " **/ \n",
                      "footer":"})(window)"
                  }
                })
              grsm.pipe("grass_concat",__dirname+"/dist/compt-utility.js");
               
            })

          
      
          

    } 
      
exports.execute=function(){   
      
      
        return ['js_full_package','js_utility']
      }     
        
      