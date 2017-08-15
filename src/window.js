Object.defineProperties(window, {
    'devicePixelRatio': {
        get: function () {
            return window.window.devicePixelRatio;
        }
    },
    'innerWidth': {
        get: function () {
            return window.window.innerWidth;
        }
    }
});

var kendo = { cultures: {} };
window.kendo = kendo;
window.window.kendo = kendo;
