export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  valueOf() {
    return this._size;
  }

  toString() {
    return this._location;
  }

  /* [Symbol.toPrimitive](call) {
    if (call === 'string') return this._location;
    if (call === 'number') return this._size;
  } */
}
