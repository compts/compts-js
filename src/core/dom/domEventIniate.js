
import eventListener from './eventListener';


function domEventIniate (main, spltt, fn, bools) {

    for (let v=0; v<spltt.length; v++) {

        (function (main, m1, m2, m3, func) {

            eventListener(main, m1, m2, m3, func, bools);


        }(main, spltt[v]+'', 'on'+spltt[v]+'', 'none', fn));

    }

    return main;

}

export default domEventIniate;
