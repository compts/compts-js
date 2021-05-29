/**
 * Check if object or value
 *
 * @since 1.0.1
 * @category Seq
 * @param {string} child_prnt The first number in an addition.
 * @param {Object} de The second number in an addition.
 * @param {number} cnt The second number in an addition.
 * @returns {Array|Object} Returns the total.
 * @example
 *
 * parentchild("first",element,1)
 * // => {'as':2}
 */
function parentchild (child_prnt, de, cnt) {

    if (child_prnt===null) {

        return true;

    } else if (child_prnt==="first") {

        if (parseInt(cnt)===0) {

            return true;

        }


    } else if (child_prnt==="last") {

        if (de.length-1===parseInt(cnt)) {

            return true;

        }

        return false;

    } else if (child_prnt==="haschild") {

        if (de[cnt].children.length>0) {

            return true;

        }


    } else if (child_prnt==="hasChildNodes") {

        if (de[cnt].hasChildNodes()) {

            return true;

        }


    } else if (child_prnt==="odd" || child_prnt==="even") {

        const sel={
            "even": 0,
            "odd": 1
        };

        if (cnt%2===sel[child_prnt]) {

            return true;

        }


    } else if (child_prnt==="childNodes") {

        if (de.childNodes.length > 0) {

            return true;

        }

    }

    return false;

}

export default parentchild;
