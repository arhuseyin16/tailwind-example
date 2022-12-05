import { Component, OnInit } from '@angular/core';
import {ModalService} from "../../../../../service/modal-service/modal.service";

@Component({
  selector: 'app-holiday-delete-modal',
  templateUrl: './holiday-delete-modal.component.html',
  styleUrls: ['./holiday-delete-modal.component.scss']
})
export class HolidayDeleteModalComponent implements OnInit {
  id?: number;

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
  }

  close() {
    this.modalService.holidayDeleteReference?.close(false);
  }

  deleted() {
    //service
    this.modalService.holidayDeleteReference?.close(true);
  }

}
