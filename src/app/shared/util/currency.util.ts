import { CurrencyEnum } from "../enum/currency.enum";
import { CurrencySymbolEnum } from "../enum/currency-symbol.enum";

export class CurrencyUtil {
  static getCurrencyUtilByName(name: CurrencyEnum): CurrencySymbolEnum {
    if (name === CurrencyEnum.TRY) {
      return CurrencySymbolEnum.TRY;
    } else if (name === CurrencyEnum.USD) {
      return CurrencySymbolEnum.USD;
    } else if (name === CurrencyEnum.EUR) {
      return CurrencySymbolEnum.EUR;
    } else if (name === CurrencyEnum.GBP) {
      return CurrencySymbolEnum.GBP;
    } else if (name === CurrencyEnum.CHF) {
      return CurrencySymbolEnum.CHF;
    } else if (name === CurrencyEnum.RUB) {
      return CurrencySymbolEnum.RUB;
    } else if (name === CurrencyEnum.AUD) {
      return CurrencySymbolEnum.AUD;
    } else if (name === CurrencyEnum.JPY) {
      return CurrencySymbolEnum.JFY;
    } else {
      return CurrencySymbolEnum.AED;
    }
  }

  static getCurrencySymbolUtilByName(name: CurrencyEnum, value: number): string {
    if (name === CurrencyEnum.TRY) {
      return new Intl.NumberFormat('tr-TR', {style: 'currency', currency: CurrencyEnum.TRY}).format(value);
    } else if (name === CurrencyEnum.USD) {
      return new Intl.NumberFormat('en-US', {style: 'currency', currency: CurrencyEnum.USD}).format(value);
    } else if (name === CurrencyEnum.EUR) {
      return new Intl.NumberFormat('de-DE', {style: 'currency', currency: CurrencyEnum.EUR}).format(value);
    } else if (name === CurrencyEnum.GBP) {
      return new Intl.NumberFormat('en-GB', {style: 'currency', currency: CurrencyEnum.GBP}).format(value);
    } else if (name === CurrencyEnum.CHF) { // bakıcazz
      return new Intl.NumberFormat('sv-SE', {style: 'currency', currency: CurrencyEnum.CHF}).format(value);
    } else if (name === CurrencyEnum.RUB) {
      return new Intl.NumberFormat('ru-RU', {style: 'currency', currency: CurrencyEnum.RUB}).format(value);
    } else if (name === CurrencyEnum.AUD) {
      return new Intl.NumberFormat('en-AU', {style: 'currency', currency: CurrencyEnum.AUD}).format(value);
    } else if (name === CurrencyEnum.JPY) {
      return new Intl.NumberFormat('ja-JP', {style: 'currency', currency: CurrencyEnum.JPY}).format(value);
    } else {
      return new Intl.NumberFormat('ar-SA-u-nu-latn', {style: 'currency', currency: 'SAR'}).format(value);
    }
  }
}
