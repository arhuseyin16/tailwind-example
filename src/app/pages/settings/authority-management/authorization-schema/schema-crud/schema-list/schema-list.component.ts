import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  inject,
  Input,
  OnInit
} from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import {
  PrintReceiptModalComponent
} from "../../../../../bank/account-activities/account-activities-list/print-receipt-modal/print-receipt-modal.component";
import { ModalService } from "../../../../../../service/modal-service/modal.service";

export interface SchemaModel {
  id: number,
  name: string;
  modules: Array<SchemaModuleModel>;
}

export interface SchemaModuleModel {
  id: number;
  name: string;
}

@Component({
  selector: 'app-schema-list',
  templateUrl: './schema-list.component.html',
  styleUrls: ['./schema-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SchemaListComponent implements OnInit {

  modalService = inject(ModalService);
  cdr = inject(ChangeDetectorRef);
  editCache: {[key: string]: {edit: boolean; data: SchemaModel}} = {};
  schemaList = new Array<SchemaModel>();
  @Input() changeSchemaListEvent = new EventEmitter();

  schemaUpdateFormGroup = new FormGroup({
    name: new FormControl('', {initialValueIsDefault: true, nonNullable: true, validators: Validators.required}),
    modules: new FormControl([], {initialValueIsDefault: true, nonNullable: true, validators: Validators.required}),
  });

  ngOnInit(): void {
    this.initializeEditCache();
    this.changeSchemaListEvent.subscribe((result: any) => {
      console.log(result);
      this.schemaList.push(result);
      this.initializeEditCache();
      this.cdr.markForCheck();
    });
  }

  schemaEdit(id: number) {
    this.editCache[id].edit = true;
  }

  initializeEditCache() {
    this.schemaList.forEach(item => {
      this.editCache[item.id] = {
        edit: false,
        data: {...item}
      };
    });
  }

  schemaEditCancel(id: number) {
    const index = this.schemaList.findIndex(item => item.id === id);
    this.editCache[id] = {
      data: {...this.schemaList[index]},
      edit: false
    };
  }

  schemaDelete(id: number) {
    const modalRef = this.modalService.create({
      nzContent: PrintReceiptModalComponent,
      nzClosable: false,
      nzFooter: null,
      nzBodyStyle: {'padding': '0', 'border-radius': '10px', 'background': '#fff'},
      nzWidth: '650px'
    });
    modalRef.afterClose.subscribe(result => {
      if (result) {
        const index = this.schemaList.findIndex(item => item.id === id);
        delete this.editCache[id];
        this.schemaList.splice(index, 1);
        this.cdr.markForCheck();
      }
    });
  }

  schemaEditSave(id: number) {
    // app-nz-select ngModeli destelemeli.
    const index = this.schemaList.findIndex(item => item.id === id);
    Object.assign(this.schemaList[index], this.editCache[id].data);
    this.editCache[id].edit = false;
  }
}
