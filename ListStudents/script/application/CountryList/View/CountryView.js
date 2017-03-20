'use strict';

var CountryView = Backbone.View.extend({
    tagName: 'div',
    className: 'lineCountry',

    events: {
        'click .like': 'eventToButtonLike',
        'click .dislike': 'eventToButtonDislike',
        'click .delete': 'eventToButtonDelete'
    },

    template: _.template(countryTpl),

    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        return this.$el;
    },

    eventToButtonLike: function () {
        this.$el.addClass('brightCountry');
    },

    eventToButtonDislike: function () {
        this.$el.remove();
    },

    eventToButtonDelete: function () {
        this.$el.remove();
        mediator.pub('CountryListCountryDeleted', this.model);
    }
});