'use strict';

var CountryView = (function () {

    function CountryView(_country) {
        var country = _country,
            containerDiv = document.createElement('div');

         this.render = function () {
             var stringElement = replacer(country, countryTpl);

             containerDiv.innerHTML = stringElement;
             containerDiv.classList.add('lineCountry');

             this.addEvents();

             return containerDiv;
         };

        /*this.render = function () {
            return this.renderElement(containerDiv, country, countryTpl, 'lineCountry', this.addEvents);
        }; */

        this.getContainer = function (key) {
          return containerDiv;
        };

        this.getCountry = function () {
            return country;
        };

        return this;
    }

    CountryView.prototype.addEvents = function  () {
        var containerDiv = this.getContainer(),
            country = this.getCountry(),
            buttonDislike = containerDiv.querySelector('input[name="dislike"'),
            buttonDelete =  containerDiv.querySelector('input[name="delete"'),
            buttonLike = containerDiv.querySelector('input[name="like"');

        buttonDislike.addEventListener('click', eventToButtonDislike, false);
        buttonLike.addEventListener('click', eventToButtonLike, false);
        buttonDelete.addEventListener('click', eventToButtonDelete, false);

        function eventToButtonLike () {
            containerDiv.classList.add('brightCountry')
        }

        function eventToButtonDislike () {
            containerDiv.parentNode.removeChild(containerDiv);
            removeEvents();
        }

        function eventToButtonDelete () {
            containerDiv.parentNode.removeChild(containerDiv);
            removeEvents();
            mediator.pub('CountryListCountryDeleted', country);
        }

        function removeEvents () {
            buttonDislike.removeEventListener('click', eventToButtonDislike);
            buttonDelete.removeEventListener('click', eventToButtonDelete);
            buttonLike.removeEventListener('click', eventToButtonLike);
        }

        mediator.sub('eventsDeleted', function  () {
            removeEvents();
        });
    };

    return CountryView;
})();