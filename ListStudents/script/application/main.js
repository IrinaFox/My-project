'use strict';

var mediator = new Mediator();

window.addEventListener('load', function () {
    var controllerStudentList = new ControllerStudentList,
        controllerColorBlock = new ControllerColorBlock,
        controllerCountryList = new ControllerCountryList();
}, false);