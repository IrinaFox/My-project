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

        this.toArray = function () {
            var array = [],
                index = 0,
                key;

            for (key in values) {
                array[index] = key;
                index++;
            }

            return array;
        };
    }

    return Model;
})();


