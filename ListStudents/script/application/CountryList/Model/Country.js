'use strict';

var Country = (function () {
    function Country (_name, _population, _area, _region) {
        Model.call(this);

        this.set('name', _name);
        this.set('population', _population);
        this.set('area', _area);
        this.set('region', _region);
    }

    extend(Country, Model);

    Country.prototype.isContinent = isContinent;
    Country.prototype.getContinent = getContinent;

    function isContinent (continent) {
        var isOwnContinent = false;

        if (continent === this.getContinent()) {
            isOwnContinent = true;
        }

        return isOwnContinent;
    }

    function getContinent () {
        var regions = parserContinents(),
            continents = {
                asia: [regions[0], regions[7], regions[8]],
                europa: [regions[1], regions[4], regions[10]],
                africa: [regions[2], regions[5]],
                australia: [regions[3]],
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

    return Country;
})();




var myCountry = Backbone.Model.extend ({
    defaults: {
        'name': undefined,
        'population':  undefined,
        'area': undefined,
        'region': undefined
    },

    isContinent : function (continent) {
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
                australia: [regions[3]],
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

var islandia = new myCountry({name: 'Islandia', population: 2000, area: 3657, region: 'ASIA (EX. NEAR EAST)         '});

console.log(islandia.isContinent());