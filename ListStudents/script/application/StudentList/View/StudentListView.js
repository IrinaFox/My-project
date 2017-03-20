'use strict';

var StudentListView = Backbone.View.extend({
    render: function () {
        var element = this.$el;

        element.html(headerStudentListTpl);
        
        this.collection.forEach(function (student) {
            var studentView = new ItemView({model: student});
            element.append( studentView.render());
        });

        return element;
    }
});