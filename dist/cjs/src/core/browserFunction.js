const getWindowFunction = function () {

    if (typeof window !== 'undefined') {

        return window
      
    } else {

        return {}

      }
}

exports.getWindowFunction=getWindowFunction
;
