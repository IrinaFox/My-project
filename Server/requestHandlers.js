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

exports.getStudentList = getStudentList;
exports.getCountryList = getCountryList;

