import { Component, OnInit } from '@angular/core';
import {ModalService} from "../../../../../service/modal-service/modal.service";

@Component({
  selector: 'app-user-group-delete-modal',
  templateUrl: './user-group-delete-modal.component.html',
  styleUrls: ['./user-group-delete-modal.component.scss']
})
export class UserGroupDeleteModalComponent implements OnInit {
  ids?: any;
  constructor( private modalService: ModalService) { }

  ngOnInit(): void {
  }

  close() {
    this.modalService.userGroupDeleteRef?.close(false);
  }

  deleted() {
    //service
    this.modalService.userGroupDeleteRef?.close(true);
  }
}
