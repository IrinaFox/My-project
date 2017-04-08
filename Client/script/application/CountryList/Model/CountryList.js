'use strict';

var CountryList = Backbone.Collection.extend({
    model: Country,
    url: '/countries',

    getCountriesOfContinent: function (continent) {
        var countriesOfContinent = [];

        if (continent === 'all') {
            countriesOfContinent = this.models;
        } else {
            countriesOfContinent = this.models.filter(isContinent);
        }

        function isContinent (country) {
            if(country.isContinent(continent)) {
                return country;
            }
        }

        return countriesOfContinent;
    }
});