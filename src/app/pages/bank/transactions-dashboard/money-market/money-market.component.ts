import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-money-market',
  templateUrl: './money-market.component.html',
  styleUrls: ['./money-market.component.scss']
})
export class MoneyMarketComponent implements OnInit {

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
