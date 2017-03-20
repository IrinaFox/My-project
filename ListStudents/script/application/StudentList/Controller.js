'use strict';

var ControllerStudentList = (function () {
    function ControllerStudentList () {
        var _infoEdit = $('#additionalStudentList'),
            _studentList = $('#contentStudentList'),
            students = new StudentList(),
            studentListView = new StudentListView({collection: students});

        _studentList.append(studentListView.render());

        mediator.sub('StudentListInfoChanged', function (_student) {
            var infoWindowList = $('#infoWindowList'),
                infoView = new InfoView({model: _student});

            if (infoWindowList) {
                _infoEdit.empty();
            }

            _infoEdit.append(infoView.render());
        });

        mediator.sub('StudentListEditChanged', function (_student) {
            var infoWindowList = $('#infoWindowList'),
                editView = new EditView({model: _student});

            if (infoWindowList) {
                _infoEdit.empty();
            }

            _infoEdit.append(editView.render());
        });

        return this;
    }

    return ControllerStudentList;
})();