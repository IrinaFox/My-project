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
        var inputs = this.$('.editElement');

        inputs.each(function (index, input) {
            if(this.model.get(input.name) !== input.value) {
                this.model.save(input.name, input.value);
            }
        }.bind(this));

        this.closeEdit();
        mediator.pub('StudentListInfoChanged', this.model);
    }
});