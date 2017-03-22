'use strict';

var ControllerCountryList = (function () {
    function ControllerCountryList() {
        var _countryList = $('#countryListDiv'),
            _countriesBorder = $('#countriesBorder'),
            countryList = new CountryList(parserCountries()),
            countries = countryList.getCountriesOfContinent('all'),
            countryListView = new CountryListView({collection: countries}),
            buttonContinent = new ButtonContinentView();

        _countryList.append(countryListView.render().$el);
        _countriesBorder.append(buttonContinent.render().$el);

        mediator.sub('CountryListCountryDeleted', function (country) {
            countryList.remove(country);
        });

        mediator.sub('continentChosen', function (continent) {
            countries = countryList.getCountriesOfContinent(continent);
            countryListView = new CountryListView({collection: countries});

            _countryList.empty();
            _countryList.append(countryListView.render().$el);
        });

        return this;
    }

    return ControllerCountryList
})();