import { Component, inject, OnInit } from '@angular/core';
import { ModalService } from "../../../../../service/modal/modal.service";

@Component({
  selector: 'app-create-favorite-filter',
  templateUrl: './create-favorite-filter.component.html',
  styleUrls: ['./create-favorite-filter.component.scss']
})
export class CreateFavoriteFilterComponent implements OnInit {

  modalService = inject(ModalService);

  ngOnInit(): void {
  }

  closeFavoriteFilterModal() {
    console.log("Kapatıldı");
    this.modalService.getModalRef()?.close(false);
  }

  create() {
    console.log("Oluşturuldu");
    this.modalService.getModalRef()?.close(true);
  }
}
