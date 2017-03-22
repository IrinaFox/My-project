'use strict';

var InfoView = Backbone.View.extend({
    tagName: 'div',
    className: 'infoWindow',

    template: _.template(tpl.StudentListInfo),

    events: {
        'click .close': 'closeInfoDiv'
    },

    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    },

    closeInfoDiv: function () {
        this.$el.remove();
    }
});