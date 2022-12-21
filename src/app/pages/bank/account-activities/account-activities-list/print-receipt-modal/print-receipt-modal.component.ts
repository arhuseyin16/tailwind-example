import { Component, inject, OnInit } from '@angular/core';
import { ModalService } from "../../../../../service/modal-service/modal.service";

@Component({
  selector: 'app-print-receipt-modal',
  templateUrl: './print-receipt-modal.component.html',
  styleUrls: ['./print-receipt-modal.component.scss']
})
export class PrintReceiptModalComponent implements OnInit {

  modalService = inject(ModalService);

  ngOnInit(): void {
  }

  closePrintReceiptModal() {
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
