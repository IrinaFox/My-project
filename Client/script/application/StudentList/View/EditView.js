'use strict';

var EditView = Backbone.View.extend({
    tagName: 'div',
    urlRoot: '/students',

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
        var $inputs = this.$('.editElement');

        if (!this.model.isNew()) {
            $inputs.each(function (index, input) {
                if (this.model.get(input.name) !== input.value) {
                    this.model.save(input.name, input.value);
                }
            }.bind(this));
        } else {
            console.log('new');
            $inputs.each(function (index, input) {
                if (this.model.get(input.name) !== input.value) {
                    this.model.set(input.name, input.value);
                }
            }.bind(this));

            mediator.pub('StudentListNewStudentCreated', this.model);
            this.model.save();
        }

          console.dir(this.model.attributes);

        this.closeEdit();
        mediator.pub('StudentListInfoChanged', this.model);
    }
});