'use strict';

var studentList = require('./studentList'),
    countryList = require('./countryList');

function getStudentList () {
    var studentsString = JSON.stringify(studentList);
    return studentsString;
}

function getCountryList () {
    var countries = getExistArray(countryList);
    var countriesString = JSON.stringify(countries);
    return countriesString;
}

function deleteCountry (id) {
    delete countryList[id];
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

