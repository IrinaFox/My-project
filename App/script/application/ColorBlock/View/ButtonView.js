'use strict';

var ButtonView = Backbone.View.extend({
    tagName: 'div',
    className: 'mainDiv',

    template: tpl.ColorBlockButtonColor,

    events: {
        'click .red': 'eventRed',
        'click .green': 'eventGreen',
        'click .blue': 'eventBlue'
    },

    render: function () {
        this.$el.html(this.template);
        return this;
    },

    eventRed: function () {
        this.model.increaseCounter('red');
        mediator.pub('changeBlock', 'red');
    },
    eventGreen: function () {
        this.model.increaseCounter('green');
        mediator.pub('changeBlock', 'green');
    },
    eventBlue: function () {
        this.model.increaseCounter('blue');
        mediator.pub('changeBlock', 'blue');
    }
});