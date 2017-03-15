'use strict';

var Country = (function () {
    function Country (_name, _population, _area, _region) {
        Model.call(this);

        this.set('name', _name);
        this.set('population', _population);
        this.set('area', _area);
        this.set('region', _region);
    }
    extend(Country, Model);

    return Country;
})();