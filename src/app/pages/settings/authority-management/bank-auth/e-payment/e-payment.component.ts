import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl} from "@angular/forms";

@Component({
  selector: 'app-e-payment',
  templateUrl: './e-payment.component.html',
  styleUrls: ['./e-payment.component.scss']
})
export class EPaymentComponent implements OnInit {
  paymentForm = this.fb.group({
    currencyUnit: new FormControl(''),
    companies: new FormControl(''),
    banks: new FormControl('')
  });

  @Input() saveButtonClickEvent = new EventEmitter();
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
