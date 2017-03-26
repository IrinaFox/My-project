'use strict';

var StudentList = Backbone.Collection.extend ({
    model: Student,

    initialize: function () {
        this.add(this.getStudentList());
    },

    getStudentList: function () {
        var xhr = new XMLHttpRequest(),
            students = [];

        xhr.open('GET', 'getStudentList', false);

        xhr.addEventListener('readystatechange',function () {
            if (xhr.readyState === 4) {
                if(xhr.status === 200) {
                    var studentsJSON = JSON.parse(xhr.responseText);

                    students.push(studentsJSON.irina);
                    students.push(studentsJSON.alexey);
                    students.push(studentsJSON.polina);
                    students.push(studentsJSON.elena);
                    students.push(studentsJSON.vladimir);
                    students.push(studentsJSON.svetlana);
                }
            }
        }, false);

        xhr.send();

        return students;
    }
});