'use strict';

var CountryView = Backbone.View.extend({
    tagName: 'div',
    className: 'lineCountry',

    template: _.template(tpl.CountryListItem),

    events: {
        'click .like': 'eventToButtonLike',
        'click .dislike': 'eventToButtonDislike',
        'click .delete': 'eventToButtonDelete'
    },

    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
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