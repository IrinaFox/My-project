'use strict';

var CountryList = (function () {
    function CountryList () {
        var countries = parserCountries(),
            i;

        this.forEach = function (fn) {
            countries.forEach(fn);
        };

        this.removeCountry =  function (country) {
            for (i=0; i<countries.length; i++) {
                if (countries[i].get('name') === country.get('name')) {
                    var index = countries.indexOf(country);
                    countries.splice(index, 1);
                }
            }
        };

        return this;
    }

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
