/* eslint-disable no-underscore-dangle */
/* eslint-disable class-methods-use-this */

export default class HolbertonCourse {
  // constructor(name = String, length = Number, students = Array(String)) {
  constructor(name, length, students) {
    this._name = this._validateName(name);
    this._length = this._validateLength(length);
    this._students = this._validateStudents(students);
  }

  _validateName(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    return name;
  }

  _validateLength(length) {
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    return length;
  }

  _validateStudents(students) {
    if (!Array.isArray(students) || !students.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of string');
    }
    return students;
  }

  get name() {
    return this._name;
  }

  set name(newname) {
    /*
    if (typeof newname !== 'string') {
      throw new TypeError('Name must be a string');
    }
      */
    this._name = this._validateName(newname);
  }

  get length() {
    return this._length;
  }

  set length(newlength) {
    /*
    if (typeof newlength !== 'number') {
      throw new TypeError('Length must be a number');
    }
      */
    this._length = this._validateLength(newlength);
  }

  get students() {
    return this._students;
  }

  set students(newstudents) {
    /*
    if (!Array.isArray(newstudents)) {
      throw new TypeError('Students must be an array of string');
    } else {
      for (const student of newstudents) {
        if (typeof student !== 'string') {
          throw new TypeError('Students must be an array of string');
        }
      }
        */
    this._students = this._validateStudents(newstudents);
  }
  // }
}
