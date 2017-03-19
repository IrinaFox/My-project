'use strict';

var ControllerCountryList = (function () {
    function ControllerCountryList() {
        var _countryList = $('#countryList'),
            _countriesBorder = $('#countriesBorder'),
            countryList = new CountryList(parserCountries()),
            countries = countryList.getCountriesOfContinent('all'),
            countryListView = new CountryListView(countries),
            buttonContinent = countryListView.renderButtonContinents();

        _countryList.append(countryListView.createFragment());
        _countriesBorder.append(buttonContinent);

        mediator.sub('CountryListCountryDeleted', function (country) {
            countryList.remove(country);
        });

        mediator.sub('continentChosen', function (continent) {
            countries = countryList.getCountriesOfContinent(continent);
            countryListView = new CountryListView(countries);

            mediator.pub('eventsDeleted');

            _countryList.text('');
            _countryList.append(countryListView.createFragment());
        });

        return this;
    }

    return ControllerCountryList
})();