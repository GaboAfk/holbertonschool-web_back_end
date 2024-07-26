/* eslint-disable no-underscore-dangle */
/* eslint-disable class-methods-use-this */

import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = this._validatorAmount(amount);
    this._currency = this._validatorCurrency(currency);
  }

  _validatorAmount(amount) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    return amount;
  }

  _validatorCurrency(currency) {
    if (!(currency instanceof Currency)) {
      throw new TypeError('currency must be an instance of "Currency" class');
    }
    return currency;
  }

  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  set amount(newamount) {
    this._amount = this._validatorAmount(newamount);
  }

  set currency(newcurrency) {
    this._currency = this._validatorCurrency(newcurrency);
  }

  displayFullPrice() {
    const fullcurrency = this._currency.displayFullCurrency();
    return `${this._amount} ${fullcurrency}`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
