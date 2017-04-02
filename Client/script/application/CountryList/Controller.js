'use strict';

var ControllerCountryList = (function ($, _) {
    function ControllerCountryList() {
        var _countryList = $('#countryListDiv'),
            _countriesBorder = $('#countriesBorder'),
            countryList = new CountryList(),
            countryListView = new CountryListView({collection: countryList}),
            buttonContinent = new ButtonContinentView();

        _countriesBorder.append(buttonContinent.render().$el);

        countryList.on('sync', function () {
            _countryList.append(countryListView.render('all').$el);
        });

        mediator.sub('CountryListCountryDeleted', function (country) {
            countryList.remove(country);
        });

        mediator.sub('continentChosen', function (continent) {
            _countryList.append(countryListView.render(continent).$el);
        });

        return this;
    }

    return ControllerCountryList
})(jQuery, _);