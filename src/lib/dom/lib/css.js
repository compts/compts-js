import CoreElementInit from '../../../core/coreElementInit';
import domGetCSS from '../../../core/dom/domGetCSS';
import domCSS from '../../../core/dom/domCSS';
import {getTypeof, has} from 'structkit';

function css (d,c){

    const core = new CoreElementInit(this);

    var typeofs = getTypeof(d) == "json"?true:false;

	var cntt=((!has(c))?0:c-1);
	var val_g={};

	core.each(function(meth,td){
		if (typeofs){
            domCSS(meth,d);
        } else {

		    if(parseInt(td)<=cntt){

		        val_g[td]=domGetCSS(meth,d);

			}
		}
	});

	return typeofs ? this : ((cntt===0)?val_g[0]:val_g);

}

export default css;
