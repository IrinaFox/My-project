'use strict';

function ControllerCountryList () {
    var _countryList = document.querySelector('#countryList'),
        _countries = document.querySelector('#countries'),
        countryList = new CountryList(),
        countries = countryList.getCountriesOfContinent('all'),
        countryListView = new CountryListView(countries),
        buttonContinent = countryListView.renderButtonContinent();

    _countryList.appendChild(countryListView.display());
    _countries.appendChild(buttonContinent);

    mediator.sub('CountryListCountryDeleted', function (country) {
        countryList.removeCountry(country);
    });

    mediator.sub('continentChosen', function (continent) {
        countries = countryList.getCountriesOfContinent(continent);
        countryListView = new CountryListView(countries);

        mediator.pub('eventsDeleted');

        _countryList.innerHTML = '';
        _countryList.appendChild(countryListView.display());
    });

    return this;
}