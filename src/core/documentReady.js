/**
 * Check if document is ready
 * @since 1.0.1
 * @category Seq
 * @param {Object} func The first number in an addition.
 * @example  documentReady(function(){})
 * @returns {Array|Object} Returns the total.
 * null
 */
function documentReady (func) {

    const root = window;

    let dom_rdy_ctt=0;

    if (dom_rdy_ctt===0) {

        if (root.attachEvent) {

            // DOMContentLoaded
            root.attachEvent("onload", dom_load_ready);
            root.attachEvent("onreadystatechange", dom_load_ready);

        } else if (root.addEventListener) {

            root.addEventListener("load", dom_load_ready, false);

        }

    }
    let fails=false;

    const dom_load_ready =function () {

        if (document.readyState==="complete" && fails === false) {

            func();
            dom_rdy_ctt+=1;
            fails=true;

        }

    }

    let set_intr=null;

    set_intr=setInterval(function () {

        if (document.readyState==="complete" && fails === false) {

            dom_rdy_ctt+=1;
            fails=true;
            clearInterval(set_intr);
            func();

        }

    }, 100);

    return null;
}

export default documentReady;
