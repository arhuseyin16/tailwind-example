import { Component, OnInit } from '@angular/core';
import { NzSegmentedOptions } from "ng-zorro-antd/segmented/types";

@Component({
  selector: 'app-transactions-dashboard',
  templateUrl: './transactions-dashboard.component.html',
  styleUrls: ['./transactions-dashboard.component.scss']
})
export class TransactionsDashboardComponent implements OnInit {

  moneyList = [
    {
      label: 'transactions-dashboard.money-input',
      value: '4.434.545₺',
      date: '26.09.2022'
    },
    {
      label: 'transactions-dashboard.money-out',
      value: '4.434.545₺',
      date: '26.09.2022'
    },
    {
      label: 'transactions-dashboard.balance-per-day',
      value: '4.434.545₺',
      date: null
    },
  ];

  currencies: NzSegmentedOptions = [
    {label: 'TRY', value: 'TRY'},
    {label: 'USD', value: 'USD'},
    {label: 'EUR', value: 'EUR'},
    {label: 'GBP', value: 'GBP'},
    {label: 'CHF', value: 'CHF'},
    {label: 'RUB', value: 'RUB'},
    {label: 'AUD', value: 'AUD'},
    {label: 'JFY', value: 'JFY'},
    {label: 'AED', value: 'AED'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
