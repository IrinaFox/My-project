'use strict';

var ControllerCountryList = (function () {
    function ControllerCountryList() {
        var _countryList = $('#countryList'),
            _countriesBorder = $('#countriesBorder'),
            countryList = new CountryList(parserCountries()),
            countries = countryList.getCountriesOfContinent('all'),
            countryListView = new CountryListView({collection: countries}),
            buttonContinent = countryListView.renderButtonContinents();

        countryListView.render();

        _countryList.append(countryListView.el);
        _countriesBorder.append(buttonContinent);

        mediator.sub('CountryListCountryDeleted', function (country) {
            countryList.remove(country);
        });

        mediator.sub('continentChosen', function (continent) {
            countries = countryList.getCountriesOfContinent(continent);
            countryListView = new CountryListView({collection: countries});

            countryListView.render();

            _countryList.empty();
            _countryList.append(countryListView.el);
        });

        return this;
    }

    return ControllerCountryList
})();