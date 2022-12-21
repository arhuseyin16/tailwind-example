import { inject, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { PageAuthorityType } from "../../../models/settings/authority-management/page-authority.type";

@Injectable()
export class AuthorityManagementService {
  private http = inject(HttpClient);

  getBankTransactionsPageAuthorities(): Observable<Array<PageAuthorityType>> {
    return this.http.get<Array<PageAuthorityType>>('assets/mock/bank-transactions-page-authorities.json');
  }

  getPosTransactionsPageAuthorities(): Observable<Array<PageAuthorityType>> {
    return this.http.get<Array<PageAuthorityType>>('assets/mock/pos-transactions-page-authorities.json');
  }

  getEPaymentTransactionsPageAuthorities(): Observable<Array<PageAuthorityType>> {
    return this.http.get<Array<PageAuthorityType>>('assets/mock/e-payment-page-authorities.json');
  }

  getOnlineDBSPageAuthorities(): Observable<Array<PageAuthorityType>> {
    return this.http.get<Array<PageAuthorityType>>('assets/mock/e-payment-page-authorities.json');
  }
}
