'use strict';

function ControllerColorBlock () {
    var _colorBlock = document.querySelector('#contentColorBlock'),
        buttonView = new ButtonView(),
        counterView = new CounterView(),
        blockView = new BlockView(),
        buttons = buttonView.render(),
        counter = counterView.render(),
        block = blockView.render();

    this.display = function () {
        _colorBlock.appendChild(buttons);
        _colorBlock.appendChild(block);
        _colorBlock.appendChild(counter);
    };

    this.display();

    mediator.sub('changeBlock',function (_color) {
        var block = document.querySelector('#block'),
            color = _color;

        block.removeAttribute('class');
        block.classList.add(color);
    });

    return this;
}