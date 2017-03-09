'use strict';

function ControllerStudentList () {
    var _info = document.querySelector('#additionalStudentList'),
        _edit = document.querySelector('#additionalStudentList'),
        _studentList = document.querySelector('#contentStudentList'),
        infoView = new InfoView(),
        editView = new EditView(),
        students = new StudentList(),
        studentListView = new StudentListView(students);

       _studentList.appendChild(studentListView.display());

    mediator.sub('StudentListInfoChanged', function (_student) {
        var infoWindowList = document.querySelector('#infoWindowList'),
            info = infoView.render(_student);

        if (infoWindowList) {
            infoWindowList.parentNode.removeChild(infoWindowList);
        }

        _info.appendChild(info);
    });

    mediator.sub('StudentListEditChanged', function (_student) {
       var infoWindowList = document.querySelector('#infoWindowList'),
           edit = editView.render(_student);

        if (infoWindowList) {
            infoWindowList.parentNode.removeChild(infoWindowList);
        }

        _edit.appendChild(edit);
    });

    return this;
}