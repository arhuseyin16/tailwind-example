import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
