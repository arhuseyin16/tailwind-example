import { inject, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { AccountType } from "../../models/bank/account-type";
import { BalanceType } from "../../models/bank/balance-type";
import { LabelValueType } from "../../models/bank/label-value.type";

@Injectable()
export class BankService {
  http = inject(HttpClient);

  getAccountTypes(): Observable<Array<AccountType>> {
    return this.http.get<Array<AccountType>>('assets/mock/account-types.json');
  }

  getBalanceTypes(): Observable<Array<BalanceType>> {
    return this.http.get<Array<BalanceType>>('assets/mock/balance-types.json');
  }

  getCurrencyTotals(): Observable<Array<LabelValueType>> {
    return this.http.get<Array<LabelValueType>>('assets/mock/currency-totals.json');
  }
}
