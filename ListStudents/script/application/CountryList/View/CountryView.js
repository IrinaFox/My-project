'use strict';

var CountryView = Backbone.View.extend({
    tagName: 'div',
    className: 'lineCountry',
    model: Country,

    initialize: function() {
        this.listenTo(this.model, "change", this.render);
    },

    events: {
        'click .like': 'eventToButtonLike',
        'click .dislike': 'eventToButtonDislike',
        'click .delete':  'eventToButtonDelete'
    },

    template: _.template(countryTpl),

    render: function () {
        this.$el.html(this.template(this.model.toJSON()))
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

