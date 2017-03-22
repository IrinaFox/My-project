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
        return this.$el;
    },

    eventRed: function () {
        mediator.pub('changeCounter', 'red');
        mediator.pub('changeBlock', 'red');
    },
    eventGreen: function () {
        mediator.pub('changeCounter', 'green');
        mediator.pub('changeBlock', 'green');
    },
    eventBlue: function () {
        mediator.pub('changeCounter', 'blue');
        mediator.pub('changeBlock', 'blue');
    }
});