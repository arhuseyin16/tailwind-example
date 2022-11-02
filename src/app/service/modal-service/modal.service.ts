import { Injectable } from '@angular/core';
import {NzModalRef, NzModalService} from "ng-zorro-antd/modal";
import {
  ExchangeDeleteModalComponent
} from "../../pages/settings/exchange/exchange-delete-modal/exchange-delete-modal.component";
import {
  NewRecordCreatedModalComponent
} from "../../pages/settings/exchange/new-record-created-modal/new-record-created-modal.component";

@Injectable()
export class ModalService {
  exchangeTableDeleteReference?: NzModalRef;
  exchangeNewRecordCreatedRef?: NzModalRef;

  constructor(private nzModalService: NzModalService) {
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
}
