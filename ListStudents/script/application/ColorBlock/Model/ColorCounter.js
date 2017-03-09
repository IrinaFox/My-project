'use strict';

function ColorCounter () {
    var counterOfColor = {
            red: 0,
            blue: 0,
            green: 0
        },
        colorNow = undefined;

    this.increaseCounter = function (_color) {
        counterOfColor[_color]++;
    };

    this.toArray = function () {
        var array = [],
            index = 0,
            key;

        for (key in counterOfColor) {
            array[index] = key;
            index++;
        }

        return array;
    };

    this.toJSON = function () {
        var JSON = {},
            key;

        for (key in counterOfColor) {
            JSON[key] = counterOfColor[key];
        }

        return JSON;
    };

    return this;
}

ColorCounter.prototype = new Observer();