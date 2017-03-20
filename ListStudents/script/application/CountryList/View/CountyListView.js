'use strict';

var CountryListView = Backbone.View.extend({
    render: function () {
        var element = this.$el;

        element.append(this.renderHeader());

        this.collection.forEach(function (country) {
            var countryView = new CountryView({model: country});

            countryView.render();

            element.append(countryView.$el);
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