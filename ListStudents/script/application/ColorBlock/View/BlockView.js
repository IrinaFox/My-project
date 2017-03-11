'use strict';

var BlockView = (function () {
    function BlockView () {
        this.render = function () {
            var containerDiv = document.createElement('div');

            containerDiv.classList.add('mainDiv');
            containerDiv.innerHTML = blockTpL;

            return containerDiv;
        };

        return this;
    }

    return BlockView;
})();
