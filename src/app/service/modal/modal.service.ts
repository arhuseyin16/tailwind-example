import { inject, Injectable } from '@angular/core';
import { ModalOptions, NzModalService } from "ng-zorro-antd/modal";

@Injectable()
export class ModalService {

  nzModalService = inject(NzModalService);

  create(options: ModalOptions) {
    return this.nzModalService.create(options);
  }

  closeAll() {
    this.nzModalService.closeAll();
  }


}
