'use strict';

var StudentListView = Backbone.View.extend({
    tagName: 'div',
   
    initialize: function () {
        this.collection.fetch();
    },

    template: tpl.StudentListHeader,

    render: function () {
        this.$el.html(this.template);

        console.log(this.collection);

        this.collection.forEach(function (student) {
            var studentView = new ItemView({model: student});
            this.$el.append( studentView.render().$el);
        }, this);

        return this;
    }
});