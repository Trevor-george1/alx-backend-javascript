/* eslint-disable */
export default class HolbertonCourse {
    constructor(name, length, students) {
        if (typeof name !== 'string') throw new TypeError('name must be a string');
        if (!Number.isInteger(length)) throw new TypeError('length must be a number');
        if (!Array.isArray(students)) throw new TypeError('students type must be an Array');


        this._name = name;
        this._length = length;
        this._students = students;
    }

    get name() {
        return this._name;
    }

    set name (value) {
        if (typeof value !== 'string') {
            throw new TypeError('Name must be a string');
        }
        else {
            this._name = value;
        }
    }

    get length() {
        return this._length;
    }

    set length(value) {
        if (!Number.isInteger(value)) {
            throw TypeError('Length must be a number');
        }
        else {
            this._length = value;
        }
    }

    get students() {
        return this._students;
    }

    set students(value) {
        if(!Array.isArray(this.students)) {
            throw TypeError('students must be an Array');
        }
        else {
            this._students = value;
        }
    }


}