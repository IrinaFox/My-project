'use strict';

function Model () {
    this.returnedValues = function () {
    };

    var values = this.returnedValues();

    this.toJSON = function () {
        var JSON = {},
            key;

        for (key in values) {
            JSON[key] = values[key];
        }

        return JSON;
    };

    this.get = function (_key) {
        return values[_key];
    };

    this.set = function (_key, _value) {
        values[_key] = _value;
    };

}

Model.prototype = new Observer();
