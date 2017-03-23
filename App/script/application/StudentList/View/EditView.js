'use strict';

var EditView = Backbone.View.extend({
    tagName: 'div',

    template: _.template(tpl.StudentListEdit),

    events: {
        'click .close': 'closeEdit',
        'click .save': 'saveEdit'
    },

    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
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