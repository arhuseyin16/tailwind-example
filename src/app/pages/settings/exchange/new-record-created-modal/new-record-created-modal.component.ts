import { Component, OnInit } from '@angular/core';
import {ModalService} from "../../../../service/modal-service/modal.service";
import {FormBuilder, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-new-record-created-modal',
  templateUrl: './new-record-created-modal.component.html',
  styleUrls: ['./new-record-created-modal.component.scss']
})
export class NewRecordCreatedModalComponent implements OnInit {

  createdForm = this.fb.group({
    currenciesHistory: new FormControl('', Validators.required),
    sourceCurrency: new FormControl('', Validators.required),
    targetCurrency: new FormControl('', Validators.required),
    rateType: new FormControl(''),
    rate: new FormControl(''),
  });
  constructor(private modalService: ModalService,
              private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  close() {
    this.modalService.exchangeNewRecordCreatedRef?.close(false);
  }

  save() {
    //service
    console.log(this.createdForm);
    this.modalService.exchangeNewRecordCreatedRef?.close(true);
  }
}
