import { Component, inject, OnInit } from '@angular/core';
import {
  AuthorityManagementService
} from "../../../../../../service/settings/authority-management/authority-management.service";
import { PageAuthorityType } from "../../../../../../models/settings/authority-management/page-authority.type";
import { UntilDestroy } from "@ngneat/until-destroy";
import { UserInformationType } from "../../../../../../models/settings/authority-management/user-information.type";
import { UserAuthorityType } from "../../../../../../models/settings/authority-management/user-authority.type";
import { PageInformationType } from "../../../../../../models/settings/authority-management/page-information.type";
import { AuthorizationModalComponent } from "../authorization-modal/authorization-modal.component";
import { ModalService } from "../../../../../../service/modal-service/modal.service";

@UntilDestroy({checkProperties: true})
@Component({
  selector: 'app-bank-transactions',
  templateUrl: './bank-transactions.component.html',
  styleUrls: ['./bank-transactions.component.scss']
})
export class BankTransactionsComponent implements OnInit {
  authorityManagement = inject(AuthorityManagementService);
  modalService = inject(ModalService);
  adminChecked = false;
  pageAuthorities = new Array<PageAuthorityType>();
  pageAuthoritiesCache = new Array<PageAuthorityType>();

  ngOnInit(): void {
    this.authorityManagement.getBankTransactionsPageAuthorities().subscribe(pageAuthorities => {
      this.pageAuthorities = pageAuthorities;
      this.pageAuthoritiesCache = pageAuthorities;
    });
  }

  userClick(user: UserInformationType, informationId: number) {
    this.pageAuthoritiesCache.forEach(pageAuthority => {
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
    this.pageAuthoritiesCache.forEach(pageAuthority => {
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

  openAuthorizationModal(information: PageInformationType) {
    const modalRef = this.modalService.create({
      nzContent: AuthorizationModalComponent,
      nzClosable: false,
      nzFooter: null,
      nzBodyStyle: {'padding': '0', 'border-radius': '10px', 'background': '#fff'},
      nzWidth: '650px',
    });

    modalRef.afterClose.subscribe(result => console.log(result));

  }
}
