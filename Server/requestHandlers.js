'use strict';

var studentList = require('./studentList'),
    countryList = require('./countryList');

function getStudentList () {
    var studentsString = JSON.stringify(studentList);
    return studentsString;
}

function getCountryList () {
    var countries = getExistArray(countryList),
        countriesString = JSON.stringify(countries);
    return countriesString;
}

function deleteCountry (id) {
    delete countryList[id];
}

function changeStudent (id, postData) {
    var newStudent = JSON.parse(postData);
    studentList[id] = newStudent;
}

function getExistArray (array) {
    var neededArray = [];

    array.forEach(function (item) {
        if (item) {
            neededArray.push(item);
        }
    });

    return neededArray;
}

exports.getStudentList = getStudentList;
exports.getCountryList = getCountryList;
exports.deleteCountry = deleteCountry;
exports.changeStudent = changeStudent;


