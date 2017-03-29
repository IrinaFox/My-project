'use strict';

var ControllerStudentList = (function () {
    function ControllerStudentList () {
        var _infoEdit = $('#additionalStudentList'),
            _studentList = $('#contentStudentList'),
            students = new StudentList({url: '/getStudentList'}),
            studentListView;

        console.log(students);
        studentListView = new StudentListView({collection: students});
        console.log(studentListView.render().$el);

        _studentList.append(studentListView.render().$el);

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
})();
