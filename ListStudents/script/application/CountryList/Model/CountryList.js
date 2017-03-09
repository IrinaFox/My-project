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

        this.getCountriesOfContinent = function (continent) {
            var countriesOfContinent = [];

            this.forEach(function (country) {
                var countryJSON = country.toJSON();
                console.log(countryJSON);
                if (continent === 'all') {
                    countriesOfContinent.push(country);
                } else if (countryJSON['continent'] === continent) {
                    countriesOfContinent.push(country);
                }
            });

            console.log(countriesOfContinent);

            return countriesOfContinent;
        };

        return this;
    }

    /*Country.prototype.getCountriesOfContinent = function (continent) {
        var countriesOfContinent = [];

        this.forEach(function (country) {
            if (continent = 'all') {
                countriesOfContinent.push(country);
            } else if (country['continent'] === continent) {
                countriesOfContinent.push(country);
            }
        });

        return countriesOfContinent;
    };*/

    return CountryList;
})();
