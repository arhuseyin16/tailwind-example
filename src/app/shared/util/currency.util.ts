import { CurrencyEnum } from "../enum/currency.enum";
import { CurrencySymbolEnum } from "../enum/currency-symbol.enum";

export class CurrencyUtil {
  static getCurrencyUtilByName(name: CurrencyEnum): CurrencySymbolEnum {
    if (name === CurrencyEnum.TRY) {
      return CurrencySymbolEnum.TRY;
    } else if(name === CurrencyEnum.USD) {
      return CurrencySymbolEnum.USD;
    } else if(name === CurrencyEnum.EUR) {
      return CurrencySymbolEnum.EUR;
    } else if(name === CurrencyEnum.GBP) {
      return CurrencySymbolEnum.GBP;
    } else if(name === CurrencyEnum.CHF) {
      return CurrencySymbolEnum.CHF;
    } else if(name === CurrencyEnum.RUB) {
      return CurrencySymbolEnum.RUB;
    } else if(name === CurrencyEnum.AUD) {
      return CurrencySymbolEnum.AUD;
    } else if(name === CurrencyEnum.JFY) {
      return CurrencySymbolEnum.JFY;
    } else {
      return CurrencySymbolEnum.AED;
    }
  }
}
