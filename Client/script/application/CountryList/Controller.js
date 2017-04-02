'use strict';

var ControllerCountryList = (function ($, _) {
    function ControllerCountryList() {
        var $containerCountryList = $('#countryListDiv'),
            $countriesBorder = $('#countriesBorder'),
            countryList = new CountryList(),
            countryListView = new CountryListView({collection: countryList}),
            buttonContinent = new ButtonContinentView();

        $countriesBorder.append(buttonContinent.render().$el);

        countryList.on('sync', function () {
            $containerCountryList.append(countryListView.render('all').$el);
        });

        mediator.sub('CountryListCountryDeleted', function (country) {
            countryList.remove(country);
        });

        mediator.sub('CountryListContinentChosen', function (continent) {
            $containerCountryList.append(countryListView.render(continent).$el);
        });

        return this;
    }

    return ControllerCountryList
})(jQuery, _);