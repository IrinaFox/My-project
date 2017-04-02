'use strict';

var ControllerStudentList = (function ($, _) {
    function ControllerStudentList () {
        var _infoEdit = $('#additionalStudentList'),
            _studentList = $('#contentStudentList'),
            students = new StudentList(),
            studentListView;

        studentListView = new StudentListView({collection: students});

        students.on('sync', function () {
            _studentList.append(studentListView.render().$el);
        });

        mediator.sub('StudentListInfoChanged', function (_student) {
            var infoWindowList = $('#infoWindowList'),
                infoView = new InfoView({model: _student});

            if (infoWindowList) {
                _infoEdit.empty();
            }

            _infoEdit.append(infoView.render().$el);
        });

        mediator.sub('StudentListEditChanged', function (_student) {
            var infoWindowList = $('#infoWindowList'),
                editView = new EditView({model: _student});

            if (infoWindowList) {
                _infoEdit.empty();
            }

            _infoEdit.append(editView.render().$el);
        });

        return this;
    }

    return ControllerStudentList;
})(jQuery, _);
