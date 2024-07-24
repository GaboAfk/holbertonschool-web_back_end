/* eslint-disable no-underscore-dangle */

export default class HolbertonCourse {
  // constructor(name = String, length = Number, students = Array(String)) {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  get name() {
    return this._name;
  }

  set name(newname) {
    if (typeof newname !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = newname;
  }

  get length() {
    return this._length;
  }

  set length(newlength) {
    if (typeof newlength !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = newlength;
  }

  get students() {
    return this._students;
  }

  set students(newstudents) {
    if (!Array.isArray(newstudents)) {
      for (const student of newstudents) {
        if (typeof student !== 'string') {
          throw new TypeError('Students must be an array of string');
        }
      }
    }
    this._students = newstudents;
  }
}
