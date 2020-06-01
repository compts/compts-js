function ps_element(d){
	this.main=d;

	this.ScrollPosition=function(){
		return main_dom.get_scroll_position();
	}
	this.EventScrollResize=function(fnc){
			ct("dom",root).on("resize,scroll",function(e){
				if(_ct.has(fnc)){
				fnc(this);
				}
			});
		}
		
	this.UrlQueryString=function(){
		var pairs = root.location.search.substring(1).split("&"),
    obj = {},
    pair,
    i;

  for ( i in pairs ) {
    if ( pairs[i] === "" ) continue;

    pair = pairs[i].split("=");    
    if(!_ct.has(obj[decodeURIComponent( pair[0] )])){
         obj[ decodeURIComponent( pair[0] ) ] = decodeURIComponent( pair[1] );
    }else{
        if(_ct.getTypeof(obj[ decodeURIComponent( pair[0] ) ])=="array"){
            obj[ decodeURIComponent( pair[0] ) ].push(decodeURIComponent( pair[1] ));
        }
       else{
            var value=obj[ decodeURIComponent( pair[0] ) ];
             obj[ decodeURIComponent( pair[0] ) ]=[];
              obj[ decodeURIComponent( pair[0] ) ].push(value);
             obj[ decodeURIComponent( pair[0] ) ].push(decodeURIComponent( pair[1] ));
       }
    }  
  }

  return obj;
	}	
	}