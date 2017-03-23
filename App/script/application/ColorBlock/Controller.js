'use strict';

var ControllerColorBlock = (function () {
    function ControllerColorBlock() {
        var _colorBlock = $('#contentColorBlock'),
            colorCounter = new ColorCounter,
            buttonView = new ButtonView({model: colorCounter}),
            counterView = new CounterView({model: colorCounter}),
            blockView = new BlockView(),
            buttons = buttonView.render().$el,
            counter = counterView.render().$el,
            block = blockView.render().$el;

        this.display = function () {
            _colorBlock.append(buttons);
            _colorBlock.append(block);
            _colorBlock.append(counter);
        };

        this.display();

        mediator.sub('changeBlock', function (_color) {
            var block = $('#block'),
                color = _color;

            block.removeAttr('class');
            block.addClass(color);
        });

        return this;
    }

    return ControllerColorBlock;
})();