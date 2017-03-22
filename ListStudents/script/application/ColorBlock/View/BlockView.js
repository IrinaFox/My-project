'use strict';

var BlockView = Backbone.View.extend({
    tagName: 'div',
    className: 'mainDiv',

    template: tpl.ColorBlockBlock,

    render: function () {
        this.$el.html(this.template);
        return this.$el;
    }
});