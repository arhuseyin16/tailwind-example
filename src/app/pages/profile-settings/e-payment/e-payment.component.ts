import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-e-payment',
  templateUrl: './e-payment.component.html',
  styleUrls: ['./e-payment.component.scss']
})
export class EPaymentComponent implements OnInit {
  @Input() authData: any;

  constructor() { }

  ngOnInit(): void {
  }

}
