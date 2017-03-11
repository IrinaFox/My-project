'use strict';

//Constructor for creating students
var Student = (function () {
    function Student (_name, _lastName, _gender, _skype, _phone, _email, _birthday) {
        Observer.call(this);

        var values = {
            name: _name,
            lastName: _lastName,
            gender: _gender,
            skype: _skype,
            phone: _phone,
            email:_email,
            birthdayDate: new Date(_birthday)
        };

        this.toJSON = function () {
            var student = {},
                key;

            for (key in values) {
                student[key] = values[key];
            }

            student['age'] = getAge();
            student['fullName'] = values.name + ' ' + values.lastName;

            return student;
        };

        this.get = function (key) {
            return (key === 'age')? getAge(): values[key];
        };

        this.set = function (_key, _value) {
            var key = _key,
                value = _value,
                firstKey = values[key];

            values[key] = value;

            if (firstKey !== value) {
                this.pub('change');
            }
        };

        function getAge () {
            var date = new Date(),
                age;

            age = date.getFullYear() - values.birthdayDate.getFullYear();

            return age;
        }

        return this;
    }

    return Student;
})();

