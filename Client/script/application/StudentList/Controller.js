'use strict';

var ControllerStudentList = (function ($, _) {
    function ControllerStudentList () {
        var $containerInfoEdit = $('#additionalStudentList'),
            $containerStudentList = $('#contentStudentList'),
            students = new StudentList(),
            studentListView = new StudentListView({collection: students});

        $containerStudentList.append(studentListView.render().$el);

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

        mediator.sub('StudentListNewStudentCreated', function (newStudent) {
            students.add(newStudent);
            console.log(students);
        });

        return this;
    }

    return ControllerStudentList;
})(jQuery, _);
