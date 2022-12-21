import { Component, inject, OnInit } from '@angular/core';
import {
  AuthorityManagementService
} from "../../../../../../service/settings/authority-management/authority-management.service";
import { PageAuthorityType } from "../../../../../../models/settings/authority-management/page-authority.type";
import { UserInformationType } from "../../../../../../models/settings/authority-management/user-information.type";
import { UserAuthorityType } from "../../../../../../models/settings/authority-management/user-authority.type";

@Component({
  selector: 'app-e-payment',
  templateUrl: './e-payment.component.html',
  styleUrls: ['./e-payment.component.scss']
})
export class EPaymentComponent implements OnInit {

  authorityManagement = inject(AuthorityManagementService);
  adminChecked = false;
  ePaymentPageAuthorities = new Array<PageAuthorityType>();
  ePaymentPageAuthoritiesCache = new Array<PageAuthorityType>();

  ngOnInit(): void {
    this.authorityManagement.getEPaymentTransactionsPageAuthorities().subscribe(pageAuthorities => {
      this.ePaymentPageAuthorities = pageAuthorities;
      this.ePaymentPageAuthoritiesCache = pageAuthorities;
    });
  }

  userClick(user: UserInformationType, informationId: number) {
    this.ePaymentPageAuthoritiesCache.forEach(pageAuthority => {
      pageAuthority.pageInformations.forEach(pageInformation => {
        if (pageInformation.id === informationId) {
          pageInformation.authorities.forEach(auth => {
            auth.color = user.authorities.includes(auth.id) ? '#0079ff' : '#000';
          });
          pageInformation.individuals.forEach(individual => {
            individual.color = individual.id === user.id ? '#0079ff' : '#000';
          });
          pageInformation.groups.forEach(group => {
            group.color = group.id === user.id ? '#0079ff' : '#000';
          });
        }
      });
    });
  }

  authorityClick(authority: UserAuthorityType, informationId: number) {
    this.ePaymentPageAuthoritiesCache.forEach(pageAuthority => {
      pageAuthority.pageInformations.forEach(pageInformation => {
        if (pageInformation.id === informationId) {
          pageInformation.authorities.forEach(auth => {
            auth.color = auth.id === authority.id ? '#0079ff': '#000';
          });
          pageInformation.individuals.forEach(individual => {
            individual.color = individual.authorities.includes(authority.id) ? '#0079ff' : '#000';
          });
          pageInformation.groups.forEach(group => {
            group.color = group.authorities.includes(authority.id) ? '#0079ff' : '#000';
          });
        }
      });
    });
  }

}
