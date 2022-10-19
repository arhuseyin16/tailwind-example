import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-currency-flow-bar',
  templateUrl: './currency-flow-bar.component.html',
  styleUrls: ['./currency-flow-bar.component.scss']
})
export class CurrencyFlowBarComponent implements OnInit {

  moneyList = [
    {
      name: 'USD',
      buying: 18253,
      sale: 18253,
    },
    {
      name: 'EUR',
      buying: 18253,
      sale: 18253,
    },
    {
      name: 'GBP',
      buying: 18253,
      sale: 18253,
    },
    {
      name: 'CHF',
      buying: 18253,
      sale: 18253,
    },
    {
      name: 'RUB',
      buying: 18253,
      sale: 18253,
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
