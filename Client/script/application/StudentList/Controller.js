'use strict';

var ControllerStudentList = (function ($, _) {
    function ControllerStudentList () {
        var $containerInfoEdit = $('#additionalStudentList'),
            $containerStudentList = $('#contentStudentList'),
            students = new StudentList(),
            studentListView;

        studentListView = new StudentListView({collection: students});

        students.on('sync', function () {
            $containerStudentList.append(studentListView.render().$el);
        });

        mediator.sub('StudentListInfoChanged', function (_student) {
            var $infoWindowList = $('#infoWindowList'),
                infoView = new InfoView({model: _student});

            if ($infoWindowList) {
                $containerInfoEdit.empty();
            }

            $containerInfoEdit.append(infoView.render().$el);
        });

        mediator.sub('StudentListEditChanged', function (_student) {
            var $infoWindowList = $('#infoWindowList'),
                editView = new EditView({model: _student});

            if ($infoWindowList) {
                $containerInfoEdit.empty();
            }

            $containerInfoEdit.append(editView.render().$el);
        });

        return this;
    }

    return ControllerStudentList;
})(jQuery, _);
