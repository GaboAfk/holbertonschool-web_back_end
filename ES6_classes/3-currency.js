/* eslint-disable class-methods-use-this */

export default class Currency {
  constructor(code, name) {
    this._code = this._validator(code);
    this._name = this._validator(name);
  }

  _validator(value) {
    if (typeof value !== 'string') {
      throw new TypeError(`${value} must be a string`);
    }
    return value;
  }

  set name(newname) {
    this._name = this._validator(newname);
  }

  get name() {
    return this._name;
  }

  set code(newcode) {
    this._code = this._validator(newcode);
  }

  get code() {
    return this._code;
  }
  displayFullCurrency(){
    return `${this._name} (${this._code})`
  }
}
