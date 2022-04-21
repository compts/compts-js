const getWindowFunction = function () {

    if (typeof window !== 'undefined') {

        return window;

    }

    return {};

}

export {getWindowFunction};