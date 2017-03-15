'use strict';

//Constructor for creating students
var Student = (function () {
    function Student (_name, _lastName, _gender, _skype, _phone, _email, _birthday) {
        Model.call(this);

        var toJSONParent = this.toJSON,
            getParent = this.get,
            setParent = this.set;

        this.set('name', _name);
        this.set('lastName', _lastName);
        this.set('gender', _gender);
        this.set('skype', _skype);
        this.set('phone', _phone);
        this.set('email', _email);
        this.set('birthday', _birthday);

        this.toJSON = function () {
            var student = toJSONParent();
            student['age'] = getAge();
            student['fullName'] = getParent('name') + ' ' + getParent('lastName');
            return student;
        };

        this.get = function (key) {
            return (key === 'age')? getAge(): getParent[key];
        };

        this.set = function (_key, _value) {
           var firstKey = getParent(_key);

           setParent(_key, _value);

           if (firstKey !== _value) {
                this.pub('change');
            }
        };

        function getAge () {
            /*var date = new Date(),
                birthday = this.get('birthday'),
                birthdayDate = new Date(birthday),
                age;

            age = date.getFullYear() - birthdayDate.getFullYear();*/

            return 20;
        }

        return this;
    }

    extend(Student, Model);

    return Student;
})();