'use strict';

var StudentList = Backbone.Collection.extend ({
    model: Student,
    url: '/getStudentList',

    /*initialize: function(){
        this.fetch();
        console.log(this);
    }*/

    initialize: function () {
       this.add(this.getStudentList());
       console.log(this);
   },

    getStudentList: function () {
        var xhr = new XMLHttpRequest(),
            students;

        xhr.open('GET', 'getStudentList', false);

        xhr.addEventListener('readystatechange',function () {
            if (xhr.readyState === 4) {
                if(xhr.status === 200) {
                    students = JSON.parse(xhr.responseText);
                }
            }
        }, false);

        xhr.send();

        return students;
    }
    /*getStudentList: function () {
        $.get('/getStudentList', function (data) {
            return data;
        });
    }*/
});
