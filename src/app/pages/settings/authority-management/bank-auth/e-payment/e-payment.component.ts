import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl} from "@angular/forms";

@Component({
  selector: 'app-e-payment',
  templateUrl: './e-payment.component.html',
  styleUrls: ['./e-payment.component.scss']
})
export class EPaymentComponent implements OnInit {
  paymentForm = this.fb.group({
    currencyUnit: new FormControl<any>([]),
    companies: new FormControl<any>([]),
    banks: new FormControl<any>([]),
  });

  @Input() saveButtonClickEvent = new EventEmitter();
  @Input() currencyUnitOptions: any[] = [];
  @Input() companiesOptions: any[] = [];
  @Input() banksOptions: any[] = [];
  @Output() paymentFormEvent = new EventEmitter()
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.saveButtonClickEvent.subscribe(res => {
      if (res) {
        this.paymentFormEvent.emit(this.paymentForm);
      }
    });
  }
}
