'use strict';

var BlockView = Backbone.View.extend({
    tagName: 'div',
    className: 'mainDiv',

    render: function () {
        this.$el.html(tpl.ColorBlockBlock);
        return this.$el;
    }
});