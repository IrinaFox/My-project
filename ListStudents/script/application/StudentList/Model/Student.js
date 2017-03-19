'use strict';

var Student = Backbone.Model.extend ({
    defaults: {
        name: undefined,
        lastName: undefined,
        gender: undefined,
        skype: undefined,
        phone: undefined,
        email: undefined,
        birthday: undefined,
        age: 20
    },

    getAge: function () {
        /*var date = new Date(),
         birthday = this.get('birthday'),
         birthdayDate = new Date(birthday),
         age;

         age = date.getFullYear() - birthdayDate.getFullYear();*/

        return 20;
    }
});