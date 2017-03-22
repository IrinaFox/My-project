'use strict';

var Country = Backbone.Model.extend ({
    defaults: {
        name: undefined,
        population:  undefined,
        area: undefined,
        region: undefined
    },

    isContinent: function (continent) {
        var isOwnContinent = false;

        if (continent === this.getContinent()) {
            isOwnContinent = true;
        }

        return isOwnContinent;
    },

    getContinent: function () {
        var regions = parserContinents(),
            continents = {
                asia: [regions[0], regions[7], regions[8]],
                europa: [regions[1], regions[4], regions[10]],
                africa: [regions[2], regions[5]],
                oceania: [regions[3]],
                america: [regions[6], regions[9]]
            },
            countryRegion = this.get('region'),
            continent,
            key;

        for (key in continents) {
            continents[key].forEach(function (region) {
                if (countryRegion === region) {
                    continent = key;
                }
            });
        }

        return continent;
    }
});