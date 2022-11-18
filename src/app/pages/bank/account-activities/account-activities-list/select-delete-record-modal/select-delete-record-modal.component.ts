import { Component, inject, OnInit } from '@angular/core';
import { ModalService } from "../../../../../service/modal/modal.service";

@Component({
  selector: 'app-select-delete-record-modal',
  templateUrl: './select-delete-record-modal.component.html',
  styleUrls: ['./select-delete-record-modal.component.scss']
})
export class SelectDeleteRecordModalComponent implements OnInit {

  modalService = inject(ModalService);

  ngOnInit(): void {
  }

  closeSelectModal() {
    console.log("Kapatıldı");
    this.modalService.getModalRef()?.close(false);
  }

  cancel() {
    console.log("İptal Edildi");
    this.modalService.getModalRef()?.close(false);
  }

  approve() {
    console.log("Onaylandı");
    this.modalService.getModalRef()?.close(true);
  }
}
