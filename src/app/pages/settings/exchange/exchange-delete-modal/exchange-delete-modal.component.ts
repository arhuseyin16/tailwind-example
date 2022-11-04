import { Component, OnInit } from '@angular/core';
import {ModalService} from "../../../../service/modal-service/modal.service";

@Component({
  selector: 'app-exchange-delete-modal',
  templateUrl: './exchange-delete-modal.component.html',
  styleUrls: ['./exchange-delete-modal.component.scss']
})
export class ExchangeDeleteModalComponent implements OnInit {

  ids?: any;
  constructor( private modalService: ModalService) { }

  ngOnInit(): void {
  }

  close() {
    this.modalService.exchangeTableDeleteReference?.close(false);
  }

  deleted() {
    //service
    this.modalService.exchangeTableDeleteReference?.close(true);
  }
}
