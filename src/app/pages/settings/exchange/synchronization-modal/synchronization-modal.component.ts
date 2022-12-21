import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {ModalService} from "../../../../service/modal-service/modal.service";

@Component({
  selector: 'app-synchronization-modal',
  templateUrl: './synchronization-modal.component.html',
  styleUrls: ['./synchronization-modal.component.scss']
})
export class SynchronizationModalComponent implements OnInit {

  createdForm = this.fb.group({
    targetCurrency: new FormControl([], Validators.required),
    startDate: new FormControl(''),
    endDate: new FormControl(''),
  });

  currencyUList = [
    {id: 1, name: 'TRY'},
    {id: 2, name: 'USD'},
    {id: 3, name: 'EUR'},
    {id: 4, name: 'GBP'},
    {id: 5, name: 'CHF'},
    {id: 6, name: 'RUB'},
    {id: 7, name: 'AUD'},
    {id: 8, name: 'JPY'},
    {id: 9, name: 'AED'}
  ];

  constructor(private modalService: ModalService,
              private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  close() {
    const result = {
      close: false,
      hoverKey: false
    }
    this.modalService.exchangeSynchronizationRef?.close(result);
  }

  save() {
    //service
    console.log(this.createdForm);
    const result = {
      close: false,
      hoverKey: false
    }
    this.modalService.exchangeSynchronizationRef?.close(result);
  }

}
