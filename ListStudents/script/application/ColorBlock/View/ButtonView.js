'use strict';

function ButtonView () {
    var miniDiv = document.createElement('div'),
        colorCounter = new ColorCounter(),
        colors = colorCounter.toArray();

    miniDiv.classList.add('mainDiv');

    this.render = function () {
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

    return this;
}