'use strict';

var StudentListView = (function () {
    function StudentListView (_students, _content) {
        var students = _students,
            listDiv = document.createElement('div');

        this.render = function () {
            students.forEach(function (item) {
                createStudent(item);
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
            var studentView = new ItemView(item),
                student = studentView.render();
            listDiv.appendChild(student);
        }
    }

    StudentListView.prototype.renderHeader = function () {
        var containerDiv = document.createElement('div');

        containerDiv.innerHTML = headerStudentListTpl;
        containerDiv.classList.add('line');
        containerDiv.setAttribute('id', 'menu');

        return containerDiv;
    };

    return StudentListView;
})();
