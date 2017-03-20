'use strict';

var BlockView = Backbone.View.extend({
    tagName: 'div',
    className: 'mainDiv',

    render: function () {
        this.$el.html(blockTpL);
        return this.$el;
    }
});