'use strict';

var ControllerCountryList = (function () {
    function ControllerCountryList() {
        var _countryList = $('#countryListDiv'),
            _countriesBorder = $('#countriesBorder'),
            countryList = new CountryList(),
            countryListView = new CountryListView({collection: countryList}),
            buttonContinent = new ButtonContinentView();

        _countriesBorder.append(buttonContinent.render().$el);

        mediator.sub('CountryListCountryDeleted', function (country) {
            countryList.remove(country);
        });

        mediator.sub('continentChosen', function (continent) {
            _countryList.append(countryListView.render(continent).$el);
        });

        mediator.pub('continentChosen', 'all');

        return this;
    }

    return ControllerCountryList
})();