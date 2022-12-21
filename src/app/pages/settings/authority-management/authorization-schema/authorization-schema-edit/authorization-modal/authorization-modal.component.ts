import { Component, inject, OnInit } from '@angular/core';
import { ModalService } from "../../../../../../service/modal-service/modal.service";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-authorization-modal',
  templateUrl: './authorization-modal.component.html',
  styleUrls: ['./authorization-modal.component.scss']
})
export class AuthorizationModalComponent implements OnInit {
  modalService = inject(ModalService);
  createAuthorityFormGroup = new FormGroup({
    groups: new FormControl([], {initialValueIsDefault: true, nonNullable: true}),
    users: new FormControl([], {initialValueIsDefault: true, nonNullable: true}),
    authorities: new FormControl([], {initialValueIsDefault: true, nonNullable: true}),
  });
  users = [
    {
      id: 1,
      name: 'Ömer Faruk Arslan',
    },
    {
      id: 2,
      name: 'Büşra Çetinkaya',
    }
  ];

  groups = [
    {
      id: 1,
      name: 'IT',
    },
    {
      id: 2,
      name: 'Analiz Takımı',
    }
  ];

  authorities = [
    {
      id: 1,
      name: 'Yetki 1',
    },
    {
      id: 2,
      name: 'Yetki 2',
    },
    {
      id: 3,
      name: 'Yetki 3',
    },
    {
      id: 4,
      name: 'Yetki 4',
    }
  ];
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
