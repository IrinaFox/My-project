'use strict';

var ControllerCountryList = (function () {
    function ControllerCountryList() {
        var _countryList = $('#countryListDiv'),
            _countriesBorder = $('#countriesBorder'),
            countryList = new CountryList(),
            countryListView = new CountryListView({collection: countryList}),
            buttonContinent = new ButtonContinentView();

        countryList.on('add', function () {
            _countryList.append(countryListView.render('all').$el);
        });

        _countriesBorder.append(buttonContinent.render().$el);

        mediator.sub('CountryListCountryDeleted', function (country) {
            countryList.remove(country);
        });

        mediator.sub('continentChosen', function (continent) {
            countryListView.render(continent);
        });

        return this;
    }

    return ControllerCountryList
})();