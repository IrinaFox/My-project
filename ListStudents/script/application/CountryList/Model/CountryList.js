'use strict';

var CountryList = (function () {
    function CountryList () {
        Model.call(this);
        this.set('countries', parserCountries());

        this.forEach = function (fn) {
            this.get('countries').each(fn);
        };

        return this;
    }

    extend(CountryList, Model);

    CountryList.prototype.removeCountry = removeCountry;
    CountryList.prototype.getCountriesOfContinent = getCountriesOfContinent;

    function removeCountry(country) {
        var index = this.get('countries').indexOf(country);
        this.get('countries').splice(index, 1);
    }

    function getCountriesOfContinent (continent) {
        var countriesOfContinent = [];

        if (continent === 'all') {
            countriesOfContinent = this.get('countries');
        } else {
            countriesOfContinent = this.get('countries').filter(isContinent);
        }

        function isContinent (country) {
            if(country.isContinent(continent)) {
                return country;
            }
        }

        return countriesOfContinent;
    }

    return CountryList;
})();



//Example of class
/*
class CountryList {
    constructor () {
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
    }

    removeCountry (country) {
        var index = this.get('countries').indexOf(country);
        this.get('countries').splice(index, 1);
    };

    getCountriesOfContinent (continent) {
        var countriesOfContinent = [],
            getContinent = this.getContinent;

        if (continent === 'all') {
            countriesOfContinent = this.get('countries');
        } else {
            countriesOfContinent = this.get('countries').filter(isContinent);
        }

        function isContinent (country) {
            var countryContinent = getContinent(country);
            if (countryContinent === continent) {
                return country;
            }
        }

        return countriesOfContinent;
    };

    getContinent (country) {
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
} */