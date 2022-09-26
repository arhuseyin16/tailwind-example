import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-money-flow',
  templateUrl: './money-flow.component.html',
  styleUrls: ['./money-flow.component.scss']
})
export class MoneyFlowComponent implements OnInit {

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
