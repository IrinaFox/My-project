'use strict';

var ItemView = (function () {
    function ItemView (_student) {
        var containerDiv = document.createElement('div'),
            student = _student,
            moreButton,
            editButton;

        this.render = function () {
             var stringElement = replacer(student, itemTpl);

             containerDiv.innerHTML = stringElement;
             containerDiv.classList.add('line');

             addEvent();

             return containerDiv;
         };

        student.on('change', function () {
            if (student.hasChanged()) {
                var stringElement = replacer(student, itemTpl);

                //Delete data with buttons and their events
                moreButton.removeEventListener('click', changeInfoStatus, false);
                editButton.removeEventListener('click', showEdit, false);
                containerDiv.innerHTML = '';

                //Set new data and new events to buttons
                containerDiv.innerHTML = stringElement;
                addEvent();
            }
        });

        function addEvent() {
            var buttons = containerDiv.querySelectorAll('input');

            moreButton = buttons[0];
            editButton = buttons[1];

            moreButton.addEventListener('click', changeInfoStatus, false);
            editButton.addEventListener('click', showEdit, false);
        }

        function changeInfoStatus() {
            mediator.pub('StudentListInfoChanged', student);
        }

        function showEdit() {
            mediator.pub('StudentListEditChanged', student);
        }
    }

    return ItemView;
})();