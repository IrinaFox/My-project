'use strict';

var StudentList = (function () {
    function StudentList () {
        Model.call(this);

        this.set('students', this.initialize());

        this.forEach = function (fn) {
            this.get('students').forEach(fn);
        };

        return this;
    }

    extend(StudentList, Model);

    StudentList.prototype.initialize = initialize;

    function initialize () {
        var irinaEl = {
                name: 'Irina',
                lastName: 'Ruban',
                gender: 'female',
                skype: "princess_rina88",
                phone: "+380505610891",
                email: "irina.fox88@gmail.com",
                birthday: '1995,2,4'
            },
            svetlanaEl = {
                name: "Svetlana",
                lastName: 'Ovcharenko',
                gender: 'female',
                skype: "ami-caty",
                phone: "+380663334455",
                email: "svetlana.sunny@gmail.com",
                birthday: '1997,1,1'
            },
            polinaEl = {
                name: "Polina",
                lastName: 'Zhylyaeva',
                gender: "female",
                skype: "polina_volna",
                phone: "+380934445566",
                email: "poluina.catty3@gmail.com",
                birthday: '1997,1,1'
            },
            elenaEl = {
                name: "Elena",
                lastName: 'Ryndina',
                gender: "female",
                skype: "izaya256",
                phone: "+380666668888",
                email: "elena.flower123@gmail.com",
                birthday: '1997,1,1'
            },
            alexeyEl = {
                name: "Alexey",
                lastName: 'Grigoryev',
                gender: "male",
                skype: "dn100980rev",
                phone: "+380998885511",
                email: "alexey.rembo25@gmail.com",
                birthday: '1997,1,1'
            },
            vladimirEl = {
                name: "Vladimir",
                lastName: 'Timofeev',
                gender: "male",
                skype: "vovanium",
                phone: "+380634207163",
                email: "vladivir.terminator55@gmail.com",
                birthday: '1997,1,1'
            },
            irina = new Student(irinaEl),
            svetlana = new Student(svetlanaEl),
            polina = new Student(polinaEl),
            elena = new Student(elenaEl),
            alexey = new Student(alexeyEl),
            vladimir = new Student(vladimirEl),
            students = [irina, svetlana, polina, elena, alexey, vladimir];

        return students;
    }

    return StudentList;
})();
