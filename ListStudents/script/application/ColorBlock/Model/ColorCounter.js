'use strict';

var ColorCounter = (function () {
    function ColorCounter () {
        Model.call(this);

        this.set('red', 0);
        this.set('blue', 0);
        this.set('green', 0);

        this.increaseCounter = function (_color) {
            this.set(_color, this.get(_color)+1);
        };

        return this;
    }

    extend(ColorCounter, Model);

    return ColorCounter;
})();