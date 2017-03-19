'use strict';

var ButtonView = (function () {
    function ButtonView () {
        this.render = function () {
            var miniDiv = this.createButtons();
            miniDiv.classList.add('mainDiv');
            return miniDiv;
        };

        return this;
    }

    ButtonView.prototype.createButtons = function () {
        var miniDiv = document.createElement('div'),
            colorCounter = new ColorCounter(),
            colorsJSON = colorCounter.toJSON(),
            colors = [];

        for (let key in colorsJSON) {
            colors.push(key);
        }

        colors.forEach(function (color) {
            var buttonDiv = document.createElement('div'),
                stringButton = buttonColorTpl.replace(/:color/g, color),
                button;

            buttonDiv.innerHTML = stringButton;
            miniDiv.appendChild(buttonDiv);

            button = buttonDiv.querySelector('input');

            button.addEventListener('click', changeCounter, false);
            button.addEventListener('click', changeBlock, false);

            function changeCounter () {
                mediator.pub('changeCounter', color);
            }

            function changeBlock () {
                mediator.pub('changeBlock', color);
            }
        });

        return miniDiv;
    };

    return ButtonView;
})();