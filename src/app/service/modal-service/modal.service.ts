import { inject, Injectable } from '@angular/core';
import { ModalOptions, NzModalRef, NzModalService } from "ng-zorro-antd/modal";
import {
  ExchangeDeleteModalComponent
} from "../../pages/settings/exchange/exchange-delete-modal/exchange-delete-modal.component";
import {
  NewRecordCreatedModalComponent
} from "../../pages/settings/exchange/new-record-created-modal/new-record-created-modal.component";
import {
  SynchronizationModalComponent
} from "../../pages/settings/exchange/synchronization-modal/synchronization-modal.component";
import {
  UserGroupNewRecordModalComponent
} from "../../pages/settings/authority-management/user-group/user-group-new-record-modal/user-group-new-record-modal.component";
import {
  UserGroupDeleteModalComponent
} from "../../pages/settings/authority-management/user-group/user-group-delete-modal/user-group-delete-modal.component";
import {
  UserGroupEditModalComponent
} from "../../pages/settings/authority-management/user-group/user-group-edit-modal/user-group-edit-modal.component";
import {AuthEditModalComponent} from "../../pages/profile-settings/auth-edit-modal/auth-edit-modal.component";

@Injectable()
export class ModalService {
  exchangeTableDeleteReference?: NzModalRef;
  exchangeNewRecordCreatedRef?: NzModalRef;
  exchangeSynchronizationRef?: NzModalRef;
  userGroupNewRecordRef?: NzModalRef
  userGroupDeleteRef?: NzModalRef;
  userGroupEditRef?: NzModalRef;
  bankAuthEditRef?: NzModalRef;

  private nzModalService = inject(NzModalService);
  private modalRef?: NzModalRef;
  create(options: ModalOptions) {
    this.modalRef = this.nzModalService.create(options);
    return this.modalRef;
  }

  getModalRef() {
    return this.modalRef;
  }

  closeAll() {
    this.nzModalService.closeAll();
  }

  exchangeTableDeleteModal(ids: any): NzModalRef {
    this.exchangeTableDeleteReference = this.nzModalService.create({
      nzContent: ExchangeDeleteModalComponent,
      nzComponentParams: {ids},
      nzClosable: false,
      nzFooter: null,
      nzKeyboard: false,
      nzMaskClosable: false,
      nzWidth: '586px',
    });
    return this.exchangeTableDeleteReference;
  }

  exchangeNewRecordCreatedModal(): NzModalRef {
    this.exchangeNewRecordCreatedRef = this.nzModalService.create({
      nzContent: NewRecordCreatedModalComponent,
      nzComponentParams: {},
      nzClosable: false,
      nzFooter: null,
      nzKeyboard: false,
      nzMaskClosable: false,
      nzWidth: '586px',
    });
    return this.exchangeNewRecordCreatedRef;
  }

  synchronizationModal(): NzModalRef {
    this.exchangeSynchronizationRef = this.nzModalService.create({
      nzContent: SynchronizationModalComponent,
      nzComponentParams: {},
      nzClosable: false,
      nzFooter: null,
      nzKeyboard: false,
      nzMaskClosable: false,
      nzWidth: '586px',
    });
    return this.exchangeSynchronizationRef;
  }

  userGroupNewRecordCreatedModal(): NzModalRef {
    this.userGroupNewRecordRef = this.nzModalService.create({
      nzContent: UserGroupNewRecordModalComponent,
      nzComponentParams: {},
      nzClosable: false,
      nzFooter: null,
      nzKeyboard: false,
      nzMaskClosable: false,
      nzWidth: '586px',
    });
    return this.userGroupNewRecordRef;
  }

  userGroupDeleteModal(ids: any): NzModalRef {
    this.userGroupDeleteRef = this.nzModalService.create({
      nzContent: UserGroupDeleteModalComponent,
      nzComponentParams: {ids},
      nzClosable: false,
      nzFooter: null,
      nzKeyboard: false,
      nzMaskClosable: false,
      nzWidth: '586px',
    });
    return this.userGroupDeleteRef;
  }

  userGroupEditModal(): NzModalRef {
    this.userGroupEditRef = this.nzModalService.create({
      nzContent: UserGroupEditModalComponent,
      nzComponentParams: {},
      nzClosable: false,
      nzFooter: null,
      nzKeyboard: false,
      nzMaskClosable: false,
      nzWidth: '586px',
    });
    return this.userGroupEditRef;
  }

  bankAuthEditModal(): NzModalRef {
    this.bankAuthEditRef = this.nzModalService.create({
      nzContent: AuthEditModalComponent,
      nzComponentParams: {},
      nzClosable: false,
      nzFooter: null,
      nzKeyboard: false,
      nzMaskClosable: false,
      nzWidth: '586px',
    });
    return this.bankAuthEditRef;
  }
}
