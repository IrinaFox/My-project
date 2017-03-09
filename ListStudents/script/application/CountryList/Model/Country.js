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
            var key = _key,
                value = _value,
                firstKey = values[key];

            values[key] = value;
        };

        return this;
    }

    Country.prototype.getContinent = function () {
        var regions = parserContinents(),
            continent,
            continents = {
                asia: [regions[0], regions[7], regions[8]]
            };

        if (this.get('region') === regions[0] || this.get('region') === regions[7] || this.get('region') === regions[8]) {
            continent = 'asia';
        } else if (this.get('region') === regions[1] || this.get('region') === regions[4] || this.get('region') === regions[10]) {
            continent = 'europa';
        } else if (this.get('region') === regions[2] || this.get('region') === regions[5]) {
            continent = 'africa';
        } else if (this.get('region') === regions[3]) {
            continent = 'australia';
        } else if (this.get('region') === regions[6] || this.get('region') === regions[9]) {
            continent = 'america';
        }

        return continent;
    };

    return Country;
})();
