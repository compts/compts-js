import {has} from 'structkit';

function domSelectOption(main,bol,type){
	var opt;
	var sel_opt='';
	var sel_opt_ar=[];
	var opt_cnt=0;
	var select_count=0;
	var booln=bol||false;
	main.each(function(td,meth){
		
	if( has(meth[td]) ){
		opt=meth[td].options;
		for(var i=0;i<opt.length;i++){
		
		if(opt[i].selected==true){
			if(/\b(value)\b/g.test(type)){
				sel_opt=opt[i].value;
				sel_opt_ar.push(opt[i].value);
			}
			if(/\b(text)\b/g.test(type)){
				sel_opt=opt[i].text;
				sel_opt_ar.push(opt[i].text);
			}
			if(/\b(count)\b/g.test(type)){
				select_count=i;
			}
			opt_cnt++;
		}
	}
	}
	});
	if(/(value|text)/g.test(type)){
	if(booln==false)
	return (opt_cnt>1)?sel_opt_ar:sel_opt;
	else return sel_opt_ar;
	}else{
	return select_count;
	}
}

export default domSelectOption;