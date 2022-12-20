import { Component, inject, OnInit } from '@angular/core';
import {
  AuthorityManagementService
} from "../../../../../../service/settings/authority-management/authority-management.service";
import { PageAuthorityType } from "../../../../../../models/settings/authority-management/page-authority.type";
import { UntilDestroy } from "@ngneat/until-destroy";
import { UserInformationType } from "../../../../../../models/settings/authority-management/user-information.type";

@UntilDestroy({checkProperties: true})
@Component({
  selector: 'app-bank-transactions',
  templateUrl: './bank-transactions.component.html',
  styleUrls: ['./bank-transactions.component.scss']
})
export class BankTransactionsComponent implements OnInit {
  authorityManagement = inject(AuthorityManagementService);
  adminChecked = false;
  pageAuthorities = new Array<PageAuthorityType>();
  userInformations = new Array<UserInformationType>();

  ngOnInit(): void {
    this.authorityManagement.getPageAuthorities().subscribe(pageAuthorities => this.pageAuthorities = pageAuthorities);
    this.authorityManagement.getUserInformation().subscribe(userInformations => this.userInformations = userInformations);
  }

}
