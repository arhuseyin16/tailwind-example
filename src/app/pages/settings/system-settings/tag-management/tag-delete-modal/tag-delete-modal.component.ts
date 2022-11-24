import { Component, OnInit } from '@angular/core';
import {ModalService} from "../../../../../service/modal-service/modal.service";

@Component({
  selector: 'app-tag-delete-modal',
  templateUrl: './tag-delete-modal.component.html',
  styleUrls: ['./tag-delete-modal.component.scss']
})
export class TagDeleteModalComponent implements OnInit {
  ids?: any;
  constructor( private modalService: ModalService) { }

  ngOnInit(): void {
  }

  close() {
    this.modalService.tagTableDeleteReference?.close(false);
  }

  deleted() {
    //service
    this.modalService.tagTableDeleteReference?.close(true);
  }

}
