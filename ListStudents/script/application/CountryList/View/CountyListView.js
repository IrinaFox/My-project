'use strict';

var CountryListView = Backbone.View.extend({
    render: function () {
        var element = this.$el;

        element.html(tpl.CountryListHeader);

        this.collection.forEach(function (country) {
            var countryView = new CountryView({model: country});

            element.append(countryView.render());
        });

        return this.$el;
    },

    renderButtonContinents: function () {
        var containerDiv = document.createElement('div'),
            buttons;

        containerDiv.innerHTML = tpl.CountryListButtonContinents;
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