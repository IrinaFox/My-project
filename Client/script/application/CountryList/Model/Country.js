'use strict';

var Country =  Backbone.Model.extend ({
    defaults: {
        name: '',
        population: 0,
        area: 0,
        region: ''
    },

    isContinent: function (continent) {
        var isOwnContinent = false;

        if (continent === this.get('continent')) {
            isOwnContinent = true;
        }

        return isOwnContinent;
    }
});
