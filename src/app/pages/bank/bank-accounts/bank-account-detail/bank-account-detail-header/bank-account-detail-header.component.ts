import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-bank-account-detail-header',
  templateUrl: './bank-account-detail-header.component.html',
  styleUrls: ['./bank-account-detail-header.component.scss']
})
export class BankAccountDetailHeaderComponent implements OnInit {
  @Input() image: any;
  @Input() moneyType: any;
  @Input() account: any;

  constructor() { }

  ngOnInit(): void {
  }

}
