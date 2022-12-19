import { Component, inject, OnInit } from '@angular/core';
import { ModalService } from "../../../../../../service/modal-service/modal.service";

@Component({
  selector: 'app-authorization-schema-delete-modal',
  templateUrl: './authorization-schema-delete-modal.component.html',
  styleUrls: ['./authorization-schema-delete-modal.component.scss']
})
export class AuthorizationSchemaDeleteModalComponent implements OnInit {

  modalService = inject(ModalService);

  constructor() { }

  ngOnInit(): void {
  }

  closeModal() {
    console.log("Kapatıldı");
    this.modalService.getModalRef()?.close(false);
  }

  approve() {
    this.modalService.getModalRef()?.close(true);
    console.log("Onaylandı");
  }

  cancel() {
    this.modalService.getModalRef()?.close(false);
    console.log("İptal Edildi");
  }

}
