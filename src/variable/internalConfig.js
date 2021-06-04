const elementConfig = {};

elementConfig.appendhtml=[
    [
        "after",
        "afterend"
    ],
    [
        "before",
        "beforebegin"
    ],
    [
        "prepend",
        "afterbegin"
    ],
    [
        "append",
        "beforeend"
    ]
];

elementConfig.eventListener=[
    'scroll',
    'focus',
    'blur',
    'change',
    'abort',
    'error',
    'click',
    'dblclick',
    'mousemove',
    'mouseout',
    'mouseover',
    'mousedown',
    'mouseup',
    'mouseenter',
    'mouseleave',
    'resize',
    'keydown',
    'keyup',
    'keypress',
    'touchstart',
    'touchmove',
    'touchend',
    'contextmenu',
    'drag',
    'dragstart',
    'dragend',
    'dragover',
    'dragenter',
    'dragleave',
    'drop'
];

elementConfig.styletype= [
    'width',
    'display',
    'height',
    'visible'
];
elementConfig.domview=[
    'val',
    'html',
    'text',
    'outerhtml'
];

elementConfig.child= [
    [
        "firstChild",
        "first"
    ],
    [
        "haschild",
        "haschild"
    ],
    [
        "hasChildNodes",
        "hasChildNodes"
    ],
    [
        "childNodes",
        "hasChildNodes"
    ],
    [
        "lastChild",
        "last"
    ],
    [
        "even",
        "even"
    ],
    [
        "odd",
        "odd"
    ]
];

elementConfig.styletype=[
    'width',
    'display',
    'height',
    'visible'
];

elementConfig.elemfade=[
    'fadeIn',
    'fadeOut',
    'fadeTo',
    'fadeToggle'
];

export default elementConfig;
