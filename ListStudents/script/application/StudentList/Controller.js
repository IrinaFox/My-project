'use strict';

var ControllerStudentList = (function () {
    function ControllerStudentList () {
        var _infoEdit = $('#additionalStudentList'),
            _studentList = $('#contentStudentList'),
            infoView = new InfoView(),
            editView = new EditView(),
            students = new StudentList(),
            studentListView = new StudentListView({collection: students});

        studentListView.render();

        _studentList.append(studentListView.$el);

        mediator.sub('StudentListInfoChanged', function (_student) {
            var infoWindowList = document.querySelector('#infoWindowList'),
                info = infoView.render(_student);

            if (infoWindowList) {
                infoWindowList.parentNode.removeChild(infoWindowList);
            }

            _infoEdit.append(info);
        });

        mediator.sub('StudentListEditChanged', function (_student) {
            var infoWindowList = document.querySelector('#infoWindowList'),
                edit = editView.render(_student);

            if (infoWindowList) {
                infoWindowList.parentNode.removeChild(infoWindowList);
            }

            _infoEdit.append(edit);
        });

        return this;
    }

    return ControllerStudentList;
})();
