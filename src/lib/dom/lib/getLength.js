import CoreElementInit from '../../../core/coreElementInit';

function getLength (func){

    const core = new CoreElementInit(this);

    let cnt_i=0;
	
	core.each(function(td,elemm){

	    cnt_i++;

	});

	return cnt_i;

}

export default getLength;
