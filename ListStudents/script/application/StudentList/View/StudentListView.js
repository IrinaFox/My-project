'use strict';

var StudentListView = (function () {
    function StudentListView (_students) {
        var students = _students,
            listDiv = document.createElement('div');

        this.render = function () {
            students.forEach(function (student) {
                var studentView = new ItemView({model: student});

                    studentView.render();
                listDiv.append(studentView.el);
            });

            return listDiv;
        };

        this.display = function () {
            var f = document.createDocumentFragment(),
                header = this.renderHeader(),
                studentList = this.render();

            f.appendChild(header);
            f.appendChild(studentList);

            return f;
        };

        function createStudent (item) {

        }
    }

    StudentListView.prototype.renderHeader = renderHeader;

    function renderHeader () {
        var containerDiv = document.createElement('div');

        containerDiv.innerHTML = headerStudentListTpl;
        containerDiv.classList.add('line');
        containerDiv.setAttribute('id', 'menu');

        return containerDiv;
    }

    return StudentListView;
})();
