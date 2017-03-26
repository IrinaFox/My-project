'use strict';

var StudentList = Backbone.Collection.extend ({
    model: Student,

    initialize: function () {
        var xhr = new XMLHttpRequest(),
            that = this;

        xhr.open('GET', 'getStudentList', false);

        xhr.addEventListener('readystatechange',function () {
            if (xhr.readyState === 4) {
                if(xhr.status === 200) {
                    var studentsJSON = JSON.parse(xhr.responseText),
                        students = [studentsJSON.irina,
                                    studentsJSON.alexey,
                                    studentsJSON.polina,
                                    studentsJSON.elena,
                                    studentsJSON.vladimir,
                                    studentsJSON.svetlana];
                    that.add(students);
                }
            }
        }, false);

        xhr.send();
    }
});