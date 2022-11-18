import { inject, Injectable } from '@angular/core';
import { ModalOptions, NzModalRef, NzModalService } from "ng-zorro-antd/modal";

@Injectable()
export class ModalService {

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


}
