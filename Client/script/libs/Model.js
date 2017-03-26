'use strict';

var Model = (function () {
    function Model () {
        Observer.call(this);
        var values = {};

        this.get = function (_key) {
            return values[_key];
        };

        this.set = function (_key, _value) {
            values[_key] = _value;
        };

        this.toJSON = function () {
            var JSON = {},
                key;

            for (key in values) {
                JSON[key] = values[key];
            }

            return JSON;
        };
    }

    return Model;
})();


