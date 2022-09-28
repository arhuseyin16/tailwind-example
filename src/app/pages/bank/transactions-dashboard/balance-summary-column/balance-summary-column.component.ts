import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-balance-summary-column',
  templateUrl: './balance-summary-column.component.html',
  styleUrls: ['./balance-summary-column.component.scss']
})
export class BalanceSummaryColumnComponent implements OnInit {

  moneyList = [
    {
      label: 'transactions-dashboard.money-input',
      value: '4.434.545',
      date: '26.09.2022'
    },
    {
      label: 'transactions-dashboard.money-out',
      value: '4.434.545',
      date: '26.09.2022'
    },
    {
      label: 'transactions-dashboard.balance-per-day',
      value: '4.434.545',
      date: null
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
