'use strict';

var ButtonContinentView = Backbone.View.extend({
    tagName: 'div',
    className: 'containerButtonContinent',

    template: tpl.CountryListButtonContinents,

    events: {
        'click .oceania': 'eventOceania',
        'click .america': 'eventAmerica',
        'click .africa': 'eventAfrica',
        'click .europa': 'eventEuropa',
        'click .asia': 'eventAsia',
        'click .all': 'eventAll'
    },

    render: function () {
        this.$el.html(this.template);
        //this.eventButtonContinents();
        return this;
    },

    eventAll: function () {
        mediator.pub('continentChosen', 'all');
    },

    eventEuropa: function () {
        mediator.pub('continentChosen', 'europa');
    },

    eventAsia: function () {
        mediator.pub('continentChosen', 'asia');
    },

    eventAfrica: function () {
        mediator.pub('continentChosen', 'africa');
    },

    eventAmerica: function () {
        mediator.pub('continentChosen', 'america');
    },

    eventOceania: function () {
        mediator.pub('continentChosen', 'oceania');
    },

    eventButtonContinents: function () {
        var buttons = this.$el.find('input');

        buttons.each(function (index, button) {
            $(button).click(function () {
                mediator.pub('continentChosen', button.name);
            });
        });
    }
});