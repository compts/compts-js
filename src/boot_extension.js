root.ct.extension = function(name,cb){
     
     if(_ct.isFunction(cb)){
         var glb_meth = {}
         cb(glb_meth)

         if(!_ct.has(ps_glbl.extension_load_event,name)){

             //var    
             ps_glbl.extension_load_event[name]=glb_meth;
         }
     }
 };
 function ps_extension(dom){
     this.element = dom.element
 }
extension_loader = (function(dom){
   
    
    var load_event = ps_glbl.extension_load_event;
     var var_cls = new ps_extension(dom);

    load_extend_module = function(name){
           _ct.each(load_event,function(k,v){

                if(_ct.has(v,name)){
                 
                    ps_extension.prototype[k]=v[name]
                }
                
            });
    }


    return{
        extend_ext_module:function(){
            
             load_extend_module("module")
            return var_cls
        },
        load_controller_module:function(){
             load_extend_module("dom_control")
        }

    }
    





 })