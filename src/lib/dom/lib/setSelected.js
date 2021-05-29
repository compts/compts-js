import CoreElementInit from '../../../core/coreElementInit';

function setSelected (d,c){

    const core = new CoreElementInit(this);

    let opt;

	core.each(function(meth,td){
		opt=meth.options;
		
			for(var i=0;i<opt.length;i++){

					opt[i].selected=(opt[i].value==val);			
				
			}
        
	});

	return this;

}

export default setSelected;
