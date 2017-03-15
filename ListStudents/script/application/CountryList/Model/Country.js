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

    return Country;
})();



/*
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

    return Country;
})();
*/