'use strict';

function CounterView () {
    var containerDiv = document.createElement('div'),
        colorCounter = new ColorCounter(),
        colors = colorCounter.toJSON(),
        key;

    this.render = function () {
        var stringElement = '';

        for (key in colors) {
            var counter = key + ': ' + colors[key] + '<br>';

            stringElement += counter;
        }

        containerDiv.classList.add('mainDiv');
        containerDiv.innerHTML = stringElement;

        return containerDiv;
    };

    mediator.sub('changeCounter', function (_color) {
        var stringCounter ='';

        containerDiv.innerHTML = '';

        colorCounter.increaseCounter(_color);
        colors = colorCounter.toJSON();

        for (key in colors) {
            stringCounter += key + ': ' + colors[key] + '<br>';
        }

        containerDiv.innerHTML = stringCounter;
    });

    return this;
}
