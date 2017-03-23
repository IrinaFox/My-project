'use strict';

function extend (Child, Parent) {
    function Surrogate () {
        this.constructor = Child;
    }
    Surrogate.prototype = Parent.prototype;
    Child.prototype = new Surrogate()
}