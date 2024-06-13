const getWindowFunction = function () {

    if (typeof window !== 'undefined') {

        return window;

    }

    return {};

};

exports.getWindowFunction=getWindowFunction
;
