'use strict';

var EditView = Backbone.View.extend({
    tagName: 'div',

    template: _.template(tpl.StudentListEdit),

    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        return this.$el;
    },

    events: {
        'click .close': 'closeEdit',
        'click .save': 'saveEdit'
    },

    closeEdit:  function () {
      this.$el.remove();
    },

    saveEdit: function () {
        for (let key in this.model.toJSON()) {
            var newElement = this.$el.find('.' + key);

            if (newElement.val()) {
                this.model.set(key, newElement.val());
            }
        }

        this.closeEdit();
        mediator.pub('StudentListInfoChanged', this.model);
    }
});