'use strict';

var ItemView = Backbone.View.extend({
    tagName: 'div',
    className: 'line',

    template: _.template(tpl.StudentListItem),

    initialize: function () {
        this.listenTo(this.model, "change", this.render);
    },

    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    },

    events: {
        'click .more': 'changeInfoStatus',
        'click .edit': 'showEdit'
    },

    changeInfoStatus: function () {
        mediator.pub('StudentListInfoChanged', this.model);
    },

    showEdit: function () {
        mediator.pub('StudentListEditChanged', this.model);
    }
});