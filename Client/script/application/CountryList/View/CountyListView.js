'use strict';

var CountryListView = Backbone.View.extend({
    tagName: 'div',

    initialize: function () {
        this.collection.fetch();
        this.collection.on('add', this.renderOne, this);
    },

    template: tpl.CountryListHeader,

    render: function (continent) {
        this.$el.html(this.template);
        this.collection.getCountriesOfContinent(continent).forEach(this.renderOne, this);
        return this;
    },

    renderOne: function (country) {
        var countryView = new CountryView({model: country, collection: this.collection});
        this.$el.append(countryView.render().$el);
    }
});