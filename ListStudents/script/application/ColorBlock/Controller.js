'use strict';

var ControllerColorBlock = (function () {
    function ControllerColorBlock() {
        var _colorBlock = $('#contentColorBlock'),
            buttonView = new ButtonView(),
            counterView = new CounterView(),
            blockView = new BlockView(),
            buttons = buttonView.render(),
            counter = counterView.render(),
            block = blockView.render();

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