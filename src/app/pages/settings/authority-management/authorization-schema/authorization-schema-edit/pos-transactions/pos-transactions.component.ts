import { Component, inject, OnInit } from '@angular/core';
import {
  AuthorityManagementService
} from "../../../../../../service/settings/authority-management/authority-management.service";
import { PageAuthorityType } from "../../../../../../models/settings/authority-management/page-authority.type";
import { UserInformationType } from "../../../../../../models/settings/authority-management/user-information.type";
import { UserAuthorityType } from "../../../../../../models/settings/authority-management/user-authority.type";
import { PageInformationType } from "../../../../../../models/settings/authority-management/page-information.type";
import { AuthorizationModalComponent } from "../authorization-modal/authorization-modal.component";
import { ModalService } from "../../../../../../service/modal-service/modal.service";

@Component({
  selector: 'app-pos-transactions',
  templateUrl: './pos-transactions.component.html',
  styleUrls: ['./pos-transactions.component.scss']
})
export class PosTransactionsComponent implements OnInit {

  authorityManagement = inject(AuthorityManagementService);
  modalService = inject(ModalService);
  adminChecked = false;
  posTransactionsPageAuthorities = new Array<PageAuthorityType>();
  posTransactionsPageAuthoritiesCache = new Array<PageAuthorityType>();

  constructor() { }

  ngOnInit(): void {
    this.authorityManagement.getPosTransactionsPageAuthorities().subscribe(pageAuthorities => {
      this.posTransactionsPageAuthorities = pageAuthorities;
      this.posTransactionsPageAuthoritiesCache = pageAuthorities;
    });
  }

  userClick(user: UserInformationType, informationId: number) {
    this.posTransactionsPageAuthoritiesCache.forEach(pageAuthority => {
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
    this.posTransactionsPageAuthoritiesCache.forEach(pageAuthority => {
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
