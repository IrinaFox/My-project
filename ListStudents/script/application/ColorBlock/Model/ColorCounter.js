'use strict';

var ColorCounter = Backbone.Model.extend({
    defaults: {
        red: 0,
        blue: 0,
        green: 0
    },

    increaseCounter: function (_color) {
        this.set(_color, this.get(_color)+1);
    }
});
