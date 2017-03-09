'use strict';

var CountryListView = (function () {
    function CountyListView (_countries) {
        var countries = _countries;

        this.getCountries = function () {
          return countries;
        };

        this.render = function () {
            var listDiv = document.createElement('div');

            countries.forEach(function (country) {
                var countryView = new CountryView(country),
                    countryElement = countryView.render();

                listDiv.appendChild(countryElement);
            });

            return listDiv;
        };

        this.display = function () {
            var countryHeader = this.renderHeader(),
                countryList = this.render(),
                f = document.createDocumentFragment();

            f.appendChild(countryHeader);
            f.appendChild(countryList);

            return f;
        };

        return this;
    }

    CountyListView.prototype.renderHeader = function () {
        var containerDiv = document.createElement('div');

        containerDiv.innerHTML = headerCountryListTpl;
        containerDiv.classList.add('line');
        containerDiv.setAttribute('id', 'menu');

        return containerDiv;
    };

    CountyListView.prototype.renderButtonContinents = function () {
        var containerDiv = document.createElement('div'),
            buttons;

        containerDiv.innerHTML = buttonContinentTpl;
        containerDiv.classList.add('containerButtonContinent');

        buttons = containerDiv.querySelectorAll('input');

        buttons.forEach(function (button) {
           button.addEventListener('click', function () {
               mediator.pub('continentChosen', button.name);
           }, false);
        });

        return containerDiv;
    };

    return CountyListView;
})();