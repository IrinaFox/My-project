'use strict';

var BlockView = (function () {
    function BlockView () {
        this.render = function () {
            var containerDiv = document.createElement('div');

            containerDiv.classList.add('mainDiv');
            containerDiv.innerHTML = blockTpL;

            return containerDiv;
        };

        mediator.sub('changeBlock',function (_color) {
            var block = document.querySelector('#block'),
                color = _color;

            block.removeAttribute('class');
            block.classList.add(color);
        });

        return this;
    }

    return BlockView;
})();
