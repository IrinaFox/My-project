'use strict';

var StudentList = (function () {
    function StudentList () {
        var irina = new Student("Irina", 'Ruban', "female", "princess_rina88", "+380505610891", "irina.fox88@gmail.com", '1995,2,4'),
            svetlana = new Student("Svetlana", 'Ovcharenko', "female", "ami-caty", "+380663334455", "svetlana.sunny@gmail.com", '1997,1,1'),
            polina = new Student("Polina", 'Zhylyaeva', "female", "polina_volna", "+380934445566", "poluina.catty3@gmail.com", '1997,1,1'),
            elena = new Student("Elena", 'Ryndina', "female", "izaya256", "+380666668888", "elena.flower123@gmail.com", '1997,1,1'),
            alexey = new Student("Alexey", 'Grigoryev', "male", "dn100980rev", "+380998885511", "alexey.rembo25@gmail.com", '1997,1,1'),
            vladimir = new Student("Vladimir", 'Timofeev', "male", "vovanium", "+380634207163", "vladivir.terminator55@gmail.com", '1997,1,1'),
            students = [irina, svetlana, polina, elena, alexey, vladimir];

        this.forEach = function (fn) {
            students.forEach(fn);
        };

        return this;
    }

    return StudentList;
})();
