'use strict';

var StudentListView = Backbone.View.extend({
    tagName: 'div',
   
    initialize: function () {
        this.collection.fetch();
        this.collection.on('add', this.renderOne, this);
    },

    template: tpl.StudentListHeader,

    render: function () {
        this.$el.html(this.template);
        this.collection.forEach(this.renderOne, this);
        return this;
    },

    renderOne: function (student) {
        var studentView = new ItemView({model: student, collection: this.collection});
        this.$el.append(studentView.render().$el);
    }
});