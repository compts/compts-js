(function(global){
global.dzw={}
;


var skylabelDetails = {
    "extension_execute":function(){},
   "position":"left",
   "pop_delay":"slow",
   "active":true,
   "add_class":"",
   "disable":false,
   "content":"Untitled",
                   
  // "delay_active":ct("agenttype").ismobile()
                                
};
    
function skylabel (config) {

    var mainDetails= _stk.varExtend(config,details);
    extension("skylabel",{});

}
dzw.skylabel=skylabel;
;


var support_skylabel = {
    "position_label":function(glb){
			
			if(glb.active == false)
				return false;
			var uniq = "main"+_stk.getUniq();
			glb.dom.prepend("<div class='"+glb.class+"' id='"+uniq+"'>"+glb.content+"</div>");
			dom("#"+uniq).css(glb['content_position']);
			
			support_skylabel.position_label_delay({refid:uniq,delay:glb.delay});
			
		},
		"position_label_delay":function(glb){
			
			dom("#"+glb.refid).fadeIn(glb.delay,function(){
				dom("#"+glb.refid).remove();
			});
		}
};  

var configVariable = {
    "extension_execute":function(){},
   "position":"left",
   "pop_delay":"slow",
   "active":true,
   "add_class":"",
   "disable":false,
   "content":"Untitled",
                   
   //"delay_active":ct("agenttype").ismobile()
                                
}
function skylabel (config) {

    var details=_stk.varExtend(configVariable,config);

    var appConfig = {};
    appConfig['dom']=dom("body");
	appConfig['active']=details.active;
	appConfig['disable']=details.disable;
	appConfig['delay']=details.pop_delay;
	appConfig['content']=details.content;

    appConfig['content_position']={};
    appConfig['class']='dcw-ext-default-skylabel-box'

    appConfig['post_tag']  = {
        "left":{"top":"20%","left":"90%"},
        "right":{"top":"20%","left":"0%"},
        "top":{"top":"10%","left":"50%"},
        "bottom":{"top":"90%","left":"50%"},
    };

    appConfig['content_position']=appConfig['post_tag'][details.position];
  //  this.config['class']+=" "+this.details.add_class;
  support_skylabel["position_label"](appConfig);

 

}
dzw.skylabel=skylabel;

})(typeof window !== "undefined" ? window : this);