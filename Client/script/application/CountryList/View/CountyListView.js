'use strict';

var CountryListView = Backbone.View.extend({
    tagName: 'div',

    initialize: function () {
        this.collection.fetch();
    },

    template: tpl.CountryListHeader,

    render: function (continent) {
        this.$el.html(this.template);

        this.collection.getCountriesOfContinent(continent).forEach(function (country) {
            var countryView = new CountryView({model: country});
            this.$el.append(countryView.render().$el);
        }, this);

        return this;
    }
});