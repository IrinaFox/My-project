'use strict';

var CountryListView = Backbone.View.extend({
    tagName: 'div',

    template: tpl.CountryListHeader,

    render: function () {
        this.$el.html(this.template);

        this.collection.forEach(function (country) {
            var countryView = new CountryView({model: country});
            this.$el.append(countryView.render().$el);
        }, this);

        return this;
    }
});