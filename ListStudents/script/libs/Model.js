'use strict';

function Model () {
    this.toJSON = function () {
        var JSON = {},
            key;

        for (key in this.values) {
            JSON[key] = this.values[key];
        }

        return JSON;
    };

    this.get = function (_key) {
        return this.values[_key];
    };

    this.set = function (_key, _value) {
        this.values[_key] = _value;
    };

}

//Model.prototype = new Observer();
