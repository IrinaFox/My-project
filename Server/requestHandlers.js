'use strict';

var studentList = require('./studentList');

function getStudentList () {
    var studentsString = JSON.stringify(studentList);
    return studentsString;
}

exports.getStudentList = getStudentList;

