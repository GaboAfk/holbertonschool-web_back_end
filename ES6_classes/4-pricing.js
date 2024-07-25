import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  set amount(newamount) {
    this._amount = newamount;
  }

  set currency(newcurrency) {
    this._currency = newcurrency;
  }

  displayFullPrice() {
    const fullcurrency = Currency.displayFullCurrency();
    return `${this._amount} ${fullcurrency}`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
