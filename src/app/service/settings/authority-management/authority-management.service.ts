import { inject, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { PageAuthorityType } from "../../../models/settings/authority-management/page-authority.type";
import { UserInformationType } from "../../../models/settings/authority-management/user-information.type";

@Injectable()
export class AuthorityManagementService {
  private http = inject(HttpClient);

  getPageAuthorities(): Observable<Array<PageAuthorityType>> {
    return this.http.get<Array<PageAuthorityType>>('assets/mock/page-authorities.json');
  }

  getUserInformation(): Observable<Array<UserInformationType>> {
    return this.http.get<Array<UserInformationType>>('assets/mock/user-information.json');
  }
}
