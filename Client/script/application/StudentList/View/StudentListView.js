'use strict';

var StudentListView = Backbone.View.extend({
    tagName: 'div',

    template: tpl.StudentListHeader,

    events: {
      'click .addStudent': 'addStudent'
    },

    initialize: function () {
        this.collection.fetch();
        this.collection.on('add', this.renderOne, this);
    },

    render: function () {
        this.$el.html(this.template);
        return this;
    },

    renderOne: function (student) {
        var studentView = new ItemView({model: student, collection: this.collection});
        this.$el.append(studentView.render().$el);
    },

    addStudent: function () {
        var newStudent = new Student;
        mediator.pub('StudentListEditChanged', newStudent);
    }
});