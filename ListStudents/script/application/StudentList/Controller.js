'use strict';

var ControllerStudentList = (function () {
    function ControllerStudentList () {
        var _infoEdit = $('#additionalStudentList'),
            _studentList = $('#contentStudentList'),
            editView = new EditView(),
            students = new StudentList(),
            studentListView = new StudentListView({collection: students});

        studentListView.render();


        _studentList.append(studentListView.$el);

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
                edit = editView.render(_student);

            if (infoWindowList) {
                _infoEdit.empty();
            }

            _infoEdit.append(edit);
        });

        return this;
    }

    return ControllerStudentList;
})();