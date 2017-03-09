'use strict';

var CountryList = (function () {
    function CountryList () {
        var countries = parserCountries();

        this.forEach = function (fn) {
            countries.forEach(fn);
        };

        this.getCountries = function () {
            return countries;
        };

        return this;
    }

    CountryList.prototype.removeCountry = function (country) {
        for (let i = 0; i < this.getCountries().length; i++) {
            if (this.getCountries()[i].get('name') === country.get('name')) {
                var index = this.getCountries().indexOf(country);
                this.getCountries().splice(index, 1);
            }
        }
    };

    CountryList.prototype.getCountriesOfContinent = function (continent) {
        var countriesOfContinent = [];

        this.forEach(function (country) {
            var countryJSON = country.toJSON();

            if (continent === 'all') {
                countriesOfContinent.push(country);
            } else if (countryJSON['continent'] === continent) {
                countriesOfContinent.push(country);
            }
        });

        return countriesOfContinent;
    };

    return CountryList;
})();
