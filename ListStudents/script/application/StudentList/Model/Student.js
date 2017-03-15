'use strict';

//Constructor for creating students
var Student = (function () {
    function Student (_name, _lastName, _gender, _skype, _phone, _email, _birthday) {
        Model.call(this);

        var toJSONParent = this.toJSON,
            setParent = this.set;

        this.set('name', _name);
        this.set('lastName', _lastName);
        this.set('gender', _gender);
        this.set('skype', _skype);
        this.set('phone', _phone);
        this.set('email', _email);
        this.set('birthday', _birthday);
        this.set('age', this.getAge());
        this.set('fullName', this.get('name') + ' ' + this.get('lastName'));


        this.toJSON = function () {
            var student = toJSONParent();
            student['age'] = getAge();
            student['fullName'] = this.get('name') + ' ' + this.get('lastName');
            return student;
        };

        this.set = function (_key, _value) {
           var firstKey = this.get(_key);

           setParent(_key, _value);

           if (firstKey !== _value) {
                this.pub('change');
            }
        };

        return this;
    }
    extend(Student, Model);

    Student.prototype.getAge = getAge;

    function getAge () {
        /*var date = new Date(),
         birthday = this.get('birthday'),
         birthdayDate = new Date(birthday),
         age;

         age = date.getFullYear() - birthdayDate.getFullYear();*/

        return 20;
    }

    return Student;
})();