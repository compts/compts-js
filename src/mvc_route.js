function extend_route(){
    var var_location = location;

    this.get_protocol = function(){
        return var_location.protocol.replace(/(\:)/,"");

    }

    this.each = function(data,func){
     
        for(var i in data){
           
          
               var value = data[i];
             
                if(_ct.has(value,"route") && _ct.has(value,"function")){
                    func(value['route'],value['function']);
                }
           
        }

    }
     this.get_url_search=function(){

				var var_sn={};
				var glbl_vsn=var_location.search.substring(1,var_location.search.length).split("&");
				for(var f in glbl_vsn){
					
			if(typeof(glbl_vsn[f])!="function" && _ct.has(glbl_vsn[f])){
				try{
					var f1 = glbl_vsn[f].split("=");

				var_sn[f1[0]]=(typeof(f1[1])!="undefined")?f1[1]:"-";
			
				}catch(e){
					console.log(e)
				}}}
				return var_sn;

		}
        this.get_routes = function(){
			var val={};
				val['url']=var_location.protocol+"//"+var_location.host;
				val['protocol_noregexp']=var_location.protocol
				val['protocol']=this.get_protocol();

				val['search']=this.get_url_search();
				var oc=0;
				var modd=var_location.protocol+"//"+var_location.host+var_location.pathname;
				val['host_pathname']=modd;
                val['pathname']=modd;
				
			return val;
		}
}

var cls_extend_route = new extend_route();
init_route={
    Segment:function(config){
        if(_ct.getTypeof(config) != "array")
        return false;

        alert("Trial only");
       var routes = cls_extend_route.get_routes(); 
       cls_extend_route.each(config,function(k,v) {
           console.log(k);
       });
       
    },
    Lateral:function(config){
        if(_ct.getTypeof(config) != "array")
        return false;

        alert("Trial only");
        var routes = cls_extend_route.get_routes();
        cls_extend_route.each(config,function(k,v) {
            console.log(k);
       });
    },
    RegExp:function(config){
        if(_ct.getTypeof(config) != "array")
        return false;

        var routes = cls_extend_route.get_routes();
        cls_extend_route.each(config,function(k,v) {
           var reg=new RegExp(k);
			if(reg.test(routes.host_pathname)){
               v(routes);
            }
       });

    },
    Protocol:function(config){
       if(_ct.getTypeof(config) == "json"){
           var protocols = cls_extend_route.get_protocol()

           if(_ct.has(config,protocols))
           config[protocols]();

       }
    }


}
