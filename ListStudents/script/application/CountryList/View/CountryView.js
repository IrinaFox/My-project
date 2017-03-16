'use strict';

var CountryView = (function () {
    function CountryView(_country) {
        var _container = document.createElement('div'),
            values = {
                country: _country,
                container: _container
            };

        this.render = function () {
            var stringElement = replacer(this.get('country'), countryTpl),
                container = this.get('container');

            container.innerHTML = stringElement;
            container.classList.add('lineCountry');

            this.addEvents();

            return container;
        };

        /*this.render = function () {
         return this.renderElement(containerDiv, country, countryTpl, 'lineCountry', this.addEvents);
         }; */

        this.get = function (_key) {
            return values[_key];
        };

        return this;
    }

    CountryView.prototype.addEvents = addEvents;

    function  addEvents () {
        var container = this.get('container'),
            country = this.get('country'),
            buttonDislike = container.querySelector('input[name="dislike"'),
            buttonDelete =  container.querySelector('input[name="delete"'),
            buttonLike = container.querySelector('input[name="like"');

        buttonDislike.addEventListener('click', eventToButtonDislike, false);
        buttonLike.addEventListener('click', eventToButtonLike, false);
        buttonDelete.addEventListener('click', eventToButtonDelete, false);

        function eventToButtonDislike () {
            container.parentNode.removeChild(container);
            removeEvents();
        }

        function eventToButtonDelete () {
            container.parentNode.removeChild(container);
            removeEvents();
            mediator.pub('CountryListCountryDeleted', country);
        }

        function eventToButtonLike () {
            container.classList.add('brightCountry');
        }

        function removeEvents () {
            buttonDislike.removeEventListener('click', eventToButtonDislike);
            buttonDelete.removeEventListener('click', eventToButtonDelete);
            buttonLike.removeEventListener('click', eventToButtonLike);
        }

        mediator.sub('eventsDeleted', function  () {
            removeEvents();
        });
    }

    return CountryView;
})();