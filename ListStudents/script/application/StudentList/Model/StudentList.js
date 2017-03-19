'use strict';

var StudentList = Backbone.Collection.extend ({
    model: Student
});

var studentList = new StudentList(initializeStudents());

function initializeStudents () {
    var irina = {
            name: 'Irina',
            lastName: 'Ruban',
            gender: 'female',
            skype: "princess_rina88",
            phone: "+380505610891",
            email: "irina.fox88@gmail.com",
            birthday: '1995,2,4'
        },
        svetlana = {
            name: "Svetlana",
            lastName: 'Ovcharenko',
            gender: 'female',
            skype: "ami-caty",
            phone: "+380663334455",
            email: "svetlana.sunny@gmail.com",
            birthday: '1997,1,1'
        },
        polina = {
            name: "Polina",
            lastName: 'Zhylyaeva',
            gender: "female",
            skype: "polina_volna",
            phone: "+380934445566",
            email: "poluina.catty3@gmail.com",
            birthday: '1997,1,1'
        },
        elena = {
            name: "Elena",
            lastName: 'Ryndina',
            gender: "female",
            skype: "izaya256",
            phone: "+380666668888",
            email: "elena.flower123@gmail.com",
            birthday: '1997,1,1'
        },
        alexey = {
            name: "Alexey",
            lastName: 'Grigoryev',
            gender: "male",
            skype: "dn100980rev",
            phone: "+380998885511",
            email: "alexey.rembo25@gmail.com",
            birthday: '1997,1,1'
        },
        vladimir = {
            name: "Vladimir",
            lastName: 'Timofeev',
            gender: "male",
            skype: "vovanium",
            phone: "+380634207163",
            email: "vladivir.terminator55@gmail.com",
            birthday: '1997,1,1'
        };

    return [irina, svetlana, polina, elena, alexey, vladimir];
}