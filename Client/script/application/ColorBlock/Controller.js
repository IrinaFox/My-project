'use strict';

var ControllerColorBlock = (function ($, _) {
    function ControllerColorBlock() {
        var $containerColorBlock = $('#contentColorBlock'),
            colorCounter = new ColorCounter,
            buttonView = new ButtonView({model: colorCounter}),
            counterView = new CounterView({model: colorCounter}),
            blockView = new BlockView(),
            $buttons = buttonView.render().$el,
            $counter = counterView.render().$el,
            $block = blockView.render().$el;

        this.display = function () {
            $containerColorBlock.append($buttons);
            $containerColorBlock.append($block);
            $containerColorBlock.append($counter);
        };

        this.display();

        mediator.sub('changeBlock', function (_color) {
            var $block = $('#block'),
                color = _color;

            $block.removeAttr('class');
            $block.addClass(color);
        });

        return this;
    }

    return ControllerColorBlock;
})(jQuery, _);