'use strict';

var Country = (function () {
    function Country (_name, _population, _area, _region) {
        var values = {
                name: _name,
                area: _area,
                population: _population,
                region: _region
            };

        this.toJSON = function () {
            var JSON = {},
                key;

            values['continent'] = this.getContinent();

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

        return this;
    }

    Country.prototype.getContinent = function () {
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
    };

    return Country;
})();
