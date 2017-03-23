'use strict';

function View () {
    this.renderElement = function (element, item, tpl, className, callback) {
        var stringElement = replacer(item, tpl);

        element.innerHTML = stringElement;
        element.classList.add(className);

        if (callback) {
            callback();
        }

        return element;
    };

    this.createFragment = function () {

    };
}
