'use strict';

function replacer (_element, tpl) {
    var element = _element.toJSON(),
        newTpl = tpl,
        key;

    for (key in element) {
        newTpl = newTpl.replace(':' + key, element[key]);
    }

    return newTpl;
}
