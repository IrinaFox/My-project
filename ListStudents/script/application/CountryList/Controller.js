'use strict';

function ControllerCountryList () {
    var _countryList = document.querySelector('#countryList'),
        _countriesBorder = document.querySelector('#countriesBorder'),
        countryList = new CountryList(),
        countries = countryList.getCountriesOfContinent('all'),
        countryListView = new CountryListView(countries),
        buttonContinent = countryListView.renderButtonContinents();

    _countryList.appendChild(countryListView.createFragment());
    _countriesBorder.appendChild(buttonContinent);

    mediator.sub('CountryListCountryDeleted', function (country) {
        countryList.removeCountry(country);
    });

    mediator.sub('continentChosen', function (continent) {
        countries = countryList.getCountriesOfContinent(continent);
        countryListView = new CountryListView(countries);

        mediator.pub('eventsDeleted');

        _countryList.innerHTML = '';
        _countryList.appendChild(countryListView.createFragment());
    });

    return this;
}