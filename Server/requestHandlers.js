'use strict';

var studentList = require('./studentList'),
    countryList = require('./countryList');

function getStudentList () {
    var studentsString = JSON.stringify(studentList);
    return studentsString;
}

function getCountryList () {
    var countriesString = JSON.stringify(countryList);
    return countriesString;
}

function deleteCountry (id) {
    delete countryList[id];
}

function changeStudent (id, postData) {
    var newStudent = JSON.parse(postData);
    studentList[id] = newStudent;
}

exports.getStudentList = getStudentList;
exports.getCountryList = getCountryList;
exports.deleteCountry = deleteCountry;
exports.changeStudent = changeStudent;


