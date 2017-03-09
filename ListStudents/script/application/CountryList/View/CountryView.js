'use strict';

var CountryView = (function () {
    function CountryView(_country) {
        var country = _country,
            values = {
                containerDiv: document.createElement('div'),
                buttonDislike: undefined,
                buttonDelete: undefined,
                buttonLik: undefined
            };

        /*this.render = function () {
         var stringElement = replacer(country, countryTpl);

         containerDiv.innerHTML = stringElement;
         containerDiv.classList.add('lineCountry');

         addEvents();

         return containerDiv;
         }; */

        this.render = function () {
            return this.renderElement(values['containerDiv'], country, countryTpl, 'lineCountry', addEvents);
        };

        this.get = function (key) {
          return values[key];
        };

        this.set = function (key, value) {
            values[key] = value;
        };

        function addEvents () {
            var buttons = values['containerDiv'].querySelectorAll('input');

            values['buttonLike'] = buttons[0];
            values['buttonDislike'] = buttons[1];
            values['buttonDelete'] = buttons[2];

            values['buttonDislike'].addEventListener('click', eventToButtonDislike, false);
            values['buttonLike'].addEventListener('click', eventToButtonLike, false);
            values['buttonDelete'].addEventListener('click', eventToButtonDelete, false);
        }



        function eventToButtonLike () {
            values['containerDiv'].classList.add('brightCountry')
        }

        function eventToButtonDislike () {
            values['containerDiv'].parentNode.removeChild(values['containerDiv']);
            removeEvents();
        }

        function eventToButtonDelete () {
            values['containerDiv'].parentNode.removeChild(values['containerDiv']);
            removeEvents();
            mediator.pub('CountryListCountryDeleted', country);
        }

        function removeEvents () {
            values['buttonDislike'].removeEventListener('click', eventToButtonDislike);
            values['buttonDelete'].removeEventListener('click', eventToButtonDelete);
            values['buttonLike'].removeEventListener('click', eventToButtonLike);
        }

        mediator.sub('eventsDeleted', function  () {
            removeEvents();
        });

        return this;
    }

    CountryView.prototype = new View();

    return CountryView;
})();