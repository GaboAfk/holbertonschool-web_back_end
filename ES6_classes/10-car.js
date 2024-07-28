/* eslint-disable class-methods-use-this */

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    const Res = this.constructor[Symbol.species];
    return new Res();
  }

  static get [Symbol.species]() {
    return this;
  }
}
/* cloneCar() {
    const NewObj = this.constructor[Symbol.species] || this.constructor;
    const clone = new NewObj();
    return clone;
  } */
