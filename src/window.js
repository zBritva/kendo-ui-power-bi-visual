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