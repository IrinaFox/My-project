'use strict';

var CounterView = Backbone.View.extend({
    tagName: 'div',
    className: 'mainDiv',

    initialize: function () {
        this.listenTo(this.model, 'change', this.render);
    },

    render: function () {
        var stringElement = '',
            colors = this.model.toJSON(),
            key;

        for (key in colors) {
            var counter = key + ': ' + colors[key] + '<br>';
            stringElement += counter;
        }

        this.$el.html(stringElement);

        return this;
    }
});