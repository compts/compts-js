var devnt_controller_event = [];

for (var i in devnt){
    var val_evnt = devnt[i];
    devnt_controller_event.push("ct_events:"+val_evnt)
}




init_controller = (function(inits,options){

function extend_controller(){
   this.main_init = inits;
   this.is_amd = false
    this.main_option = {};
    this.main_option['require']=[];
    this.main_option['events']={};
    this.main_option['data']={};

    this.main_option['config']={
            evaluate:"<![^\=\-]([\\s\\S]+?)!>",
            interpolate:"<!\=([\\s\\S]+?)!>",
            escape:"<!\-([\\s\\S]+?)!>",
        };
    this.default_options = function(option_var) {
        
        if(_ct.has(option_var) && _ct.getTypeof(option_var) == "json"){
      
            if(_ct.has(option_var,"require")){
                this.main_option['require'] = _ct.getTypeof(option_var['require']) == "array"?option_var['require']:[];

            }
            
            if(_ct.has(option_var,"data")){
                this.main_option['data'] = option_var['data'];
            }

            if(_ct.has(option_var,"config")){
                this.main_option['config'] = option_var['config'];
            }
        }
    }


    this.$scope = {}
    this.uniq_controller = _ct.getUniq();
    //this.uni_scope = $scope[uniq_controller]={}
    this.$scope['event'] = {};
    this.$scope['render'] = {};

    this.$internal = {}
    this.$internal['key_render'] = [];
    this.$internal['render'] = [];


   

    this.contoller_value = ps_glbl.controller_value[this.uniq_controller];
}

extend_controller.prototype.reload_module = function() {
    var main = this;
    for(var i in main.$internal['render']){
        var val_render = main.$internal['render'][i];
        val_render['event'].call(val_render['main_element']);
        var local_template_value = _ct.templateValue(  controller_utitlities.dom_template_cleanup(val_render['template']) ,this.main_option['data'],this.main_option['config'] );
        
        
        ct$(val_render['main_element']).html(local_template_value )

        //console.log(val_render,"val_render")
        //console.log(local_template_value,"local_template_value")
    }

}
extend_controller.prototype.get_view = function(params,value) {
    var main = this;
    var dom_list_view =  ct("dom","*[ct_controller= "+this.main_init+"] => *[ct_views]");
    //extension_loader(dom_list_view).load_controller_module()
    dom_list_view.each(function(htm){
        var attr_view = ct("dom",htm);
        var attr_view_attr = attr_view.attr("ct_views");
        if(_ct.has(params,attr_view_attr)){
          //  console.log(attr_view_attr, " :attr_view_attr");
            params[attr_view_attr].call(htm);

            if(_ct.indexOf( main.$internal['key_render'] , attr_view_attr ) ==-1){


                var arg_element = {
                    "main_element":htm,
                    "element":attr_view,
                    "template":attr_view.html(),
                    "event":params[attr_view_attr]
                }
                main.$internal['render'].push(arg_element)
                main.$internal['key_render'].push( attr_view_attr );
            }
            

           
        }
    })
    main.reload_module();
}
extend_controller.prototype.get_event = function(params,value) {
    
    var main = this;
    var dom_list_events =  ct("dom","*[ct_controller= "+this.main_init+"] => *["+devnt_controller_event.join(";")+"]"); 
    var main_init_controller = this.main_init;
    var list_event_dom = [];
    dom_list_events.each(function(htm){
      
        if(_ct.indexOf(list_event_dom,htm)==-1){

             var attr_events = ct("dom",htm).attr(devnt_controller_event);


        _ct.each(attr_events,function(kk,vv){

            var events_key = kk.split(":")
            var events_val = vv
            
                        ct("dom","*[ct_controller= "+main_init_controller+"]").delegate(events_key[1],htm,function(e){
                           //? extension_loader(this).load_controller_module()
                            if(_ct.has(params,events_val)){
                                params[events_val].call(htm,e);
                                main.reload_module();
                            } 
                            
                        });
                

        })

          list_event_dom.push(htm);
        }
       
      
        
        
    
    })


}

extend_controller.prototype.get_even_dom = function(params,value) {
    
var main = this;
   
for(var i in this.$scope['render']){
 
    var val_func = this.$scope['render'][i];

    if(_ct.getTypeof(val_func) == "json"){

        if(_ct.has(val_func,"event") && _ct.has(val_func,"action")){
            ct("dom","body").delegate(val_func["event"],i,function(e){
               //? extension_loader(this).load_controller_module()
           
                if(_ct.getTypeof(val_func["action"]) == "function"){
                    val_func["action"].call(this,e);
                    main.reload_module();
                }else{
                    if(_ct.has(params , val_func["action"])){
                        params[val_func["action"]].call(this,e);
                        main.reload_module();
                    }
                }
            });
        }
    }
}

}
extend_controller.prototype.amd = function() {
    if(this.is_amd == false){
        for(var i in this.main_option['require']){
            ct("require",this.main_option['require'][i],true);
        }
    }
    this.is_amd = true;

}
extend_controller.prototype.Load=  function(func){

    ps_core.dom_ready(function(){     
       func();
   });
}



function controller(inits){
  //  uni_scope['events']
  var main = this;
  this.cls_extend_controller = new extend_controller(inits);
    main.cls_extend_controller.default_options(options);

    main.dom_controller =  ct("dom","*[ct_controller= "+inits+"]");
   
    main.main_init = inits;
    
    this.cls_extend_controller.amd();
    main.cls_extend_controller.Load(function() {


        main.cls_extend_controller.get_view(main.cls_extend_controller.$scope['event'],main.cls_extend_controller.contoller_value);
        main.cls_extend_controller.get_event(main.cls_extend_controller.$scope['event'],main.cls_extend_controller.contoller_value);
        main.cls_extend_controller.get_even_dom(main.cls_extend_controller.$scope['event'],main.cls_extend_controller.contoller_value);
        //main.cls_extend_controller.reload_module();
    });
}
controller.prototype.Model=  function(scop){
    var raw_data = this.cls_extend_controller.main_option['data'];

    scop(raw_data)
}
controller.prototype.Render=  function(scop){
  

   var main = this;
   $scope = {}
   var uniq_controller = _ct.getUniq();
//   var uni_scope =  {}
//   uni_scope['events'] ={}
   var contoller_value = ps_glbl.controller_value[uniq_controller];
   var library = controller_library_external_api(this)
    scop( main.cls_extend_controller.$scope['render'] ,library);



   
};

controller.prototype.Method=  function(scop){
    
    var main = this;
   var library = controller_library_external_api(this)
    scop(this.cls_extend_controller.$scope['event'],library);
    
   
};



if(ct("dom","*[ct_controller= "+inits+"]").getlength()>0){
init = new controller(inits);
 return init; 
}
else{
    console.log("controller does not exist");
    return null;
}
});