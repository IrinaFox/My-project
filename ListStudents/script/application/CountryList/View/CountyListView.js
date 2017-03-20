'use strict';

/*
var CountryListView = (function () {
    function CountyListView (_countries) {
        var countries = _countries;

        this.getCountries = function () {
            return countries;
        };

        this.render = function () {
            var listDiv = document.createElement('div');

            countries.forEach(function (country) {
                var countryView = new CountryView({model: country});

                countryView.render();

                listDiv.appendChild(countryView.el);
            });

            return listDiv;
        };

        this.createFragment = function () {
            var countryHeader = this.renderHeader(),
                countryList = this.render(),
                fragment = document.createDocumentFragment();

            fragment.appendChild(countryHeader);
            fragment.appendChild(countryList);

            return fragment;
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

*/









var CountryListView = Backbone.View.extend({
    render: function () {
        var element = this.$el;

        element.append(this.renderHeader());

        this.collection.forEach(function (country) {
            var countryView = new CountryView({model: country});

            countryView.render();

            element.append(countryView.el);
        });
    },

    renderHeader: function () {
        var containerDiv = document.createElement('div');

        containerDiv.innerHTML = headerCountryListTpl;
        containerDiv.classList.add('line');
        containerDiv.setAttribute('id', 'menu');

        return containerDiv;
    },

    renderButtonContinents: function () {
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
    }
});