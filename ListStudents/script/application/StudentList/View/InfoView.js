'use strict';

//Create new window with more information. works only one time
function InfoView () {
    var infoDiv = document.createElement('div'),
        buttonClose;

    this.render = function (student) {
         var stringElement = replacer(student, infoWindowTpl);

        infoDiv.setAttribute('id', 'infoWindowList');
        infoDiv.classList.add('infoWindow');

        infoDiv.innerHTML = stringElement;

        eventToButtonClose();

        return infoDiv;
    };

    function eventToButtonClose () {
        buttonClose = infoDiv.querySelector('input');
        buttonClose.addEventListener('click', removeInfoDiv, false);
    }

    function removeInfoDiv () {
        infoDiv.parentNode.removeChild(infoDiv);
        buttonClose.removeEventListener('click', removeInfoDiv);
    }

    return this;
}