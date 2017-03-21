'use strict';

var ButtonView = Backbone.View.extend({
    tagName: 'div',
    className: 'mainDiv',

    render: function () {
        this.$el.html(tpl.ColorBlockButtonColor);
        return this.$el;
    },

    events: {
        'click .red': 'eventRed',
        'click .green': 'eventGreen',
        'click .blue': 'eventBlue'
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