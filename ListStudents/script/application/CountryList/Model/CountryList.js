'use strict';

var CountryList = (function () {
    function CountryList () {
        var values = {
                countries: parserCountries()
            };

        this.toJSON = function () {
            var JSON = {},
                key;

            for (key in values) {
                JSON[key] = values[key];
            }

            return JSON;
        };

        this.get = function (key) {
            return values[key];
        };

        this.set = function (_key, _value) {
            values[_key] = _value;
        };

        this.forEach = function (fn) {
            this.get('countries').forEach(fn);
        };

        return this;
    }

    CountryList.prototype.removeCountry = function (country) {
        var index = this.get('countries').indexOf(country);
        this.get('countries').splice(index, 1);
    };

    CountryList.prototype.getCountriesOfContinent = function (continent) {
        var countriesOfContinent = [],
            getContinent = this.getContinent;

        this.forEach(function (country) {
            var countryContinent = getContinent(country);

            if (continent === 'all') {
                countriesOfContinent.push(country);
            } else if (countryContinent === continent) {
                countriesOfContinent.push(country);
            }
        });

        return countriesOfContinent;
    };

    CountryList.prototype.getContinent = function (country) {
        var regions = parserContinents(),
            continents = {
                asia: [regions[0], regions[7], regions[8]],
                europa: [regions[1], regions[4], regions[10]],
                africa: [regions[2], regions[5]],
                australia: [regions[3]],
                america: [regions[6], regions[9]]
            },
            countryRegion = country.get('region'),
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

    return CountryList;
})();
