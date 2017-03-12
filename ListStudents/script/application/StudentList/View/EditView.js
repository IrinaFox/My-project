'use strict';

//Make new window, where the user can edit all data except age and birthday
var EditView = (function () {
    function EditView () {
        this.render = function (_student) {
            var infoWindowList = document.querySelector('#infoWindowList'),
                containerDiv = this.createEdit(_student);

            containerDiv.setAttribute('id', 'infoWindowList');

            return containerDiv;
        };

        return this;
    }

    EditView.prototype.createEdit = function (_student) {
        var containerDiv = document.createElement('div'),
            student = _student,
            studentJSON = student.toJSON(),
            string = '',
            closeButton,
            saveButton;

        string += replacer(student, editTpl);
        string += buttonTpl;
        containerDiv.innerHTML = string;

        addEventButtonClose();
        addEventButtonSave();

        function addEventButtonClose () {
            closeButton = containerDiv.querySelector('.buttonClose');
            closeButton.addEventListener('click', closeEditForm, false);
        }

        function closeEditForm () {
            containerDiv.parentNode.removeChild(containerDiv);
            closeButton.removeEventListener('click', closeEditForm);
        }

        function addEventButtonSave () {
            saveButton = containerDiv.querySelector('.buttonSave');
            saveButton.addEventListener('click', saveEditForm, false);
        }

        function saveEditForm () {
            for (let key in studentJSON) {
                var newElement = containerDiv.querySelector('input[name="' + key + '"');

                if (newElement) {
                    student.set(key, newElement.value);
                }
            }

            closeEditForm();
            mediator.pub('StudentListInfoChanged', student);
            saveButton.removeEventListener('click', saveEditForm);
        }

        return containerDiv;
    };

    return EditView;
})();