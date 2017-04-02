'use strict';

var ButtonContinentView = Backbone.View.extend({
    tagName: 'div',
    className: 'containerButtonContinent',

    template: tpl.CountryListButtonContinents,

    events: {
        'click .buttonContinent': 'choseContinent'
    },

    render: function () {
        this.$el.html(this.template);
        return this;
    },

    choseContinent: (function () {
        return function (e) {
            mediator.pub('CountryListContinentChosen', e.target.name);
        };
    })()
});