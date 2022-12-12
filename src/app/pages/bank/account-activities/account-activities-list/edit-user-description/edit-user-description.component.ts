import { Component, inject, Input, OnInit } from '@angular/core';
import { ModalService } from "../../../../../service/modal/modal.service";

@Component({
  selector: 'app-edit-user-description',
  templateUrl: './edit-user-description.component.html',
  styleUrls: ['./edit-user-description.component.scss']
})
export class EditUserDescriptionComponent implements OnInit {

  modalService = inject(ModalService);
  @Input() processId?: number;

  ngOnInit(): void {
  }

  closeEditUserDescriptionModal() {
    console.log("Kapatıldı");
    this.modalService.getModalRef()?.close(false);
  }

  cancel() {
    console.log("İptal Edildi");
    this.modalService.getModalRef()?.close(false);
  }

  save() {
    console.log("Kaydedildi");
    this.modalService.getModalRef()?.close(true);
  }
}
