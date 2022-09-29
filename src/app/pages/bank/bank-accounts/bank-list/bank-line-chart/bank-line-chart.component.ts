import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-bank-line-chart',
  templateUrl: './bank-line-chart.component.html',
  styleUrls: ['./bank-line-chart.component.scss']
})
export class BankLineChartComponent implements OnInit {
  @Input() change: any;
  total = 0;
  lineList = [
    {
      moneyType: 'TRY',
      total: 40000,
      color: '#2d64a0'
    },
    {
      moneyType: 'USD',
      total: 40000,
      color: '#87bfad'
    },
    {
      moneyType: 'EUR',
      total: 30000,
      color: '#003249'
    },
    {
      moneyType: 'CHF',
      total: 25000,
      color: '#2eb489'
    },
    {
      moneyType: 'GBP',
      total: 20000,
      color: '#55766b'
    },
    {
      moneyType: 'JPY',
      total: 15000,
      color: '#5db196'
    },
    {
      moneyType: 'AUD',
      total: 15000,
      color: '#86f4d0'
    },
  ];

  newLine: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.lineList.forEach(row => {
      this.total += row.total;
    });
    this.lineList.forEach(row => {
      let rate = 0;
      rate = ((row.total * 100) / this.total);
      this.newLine.push({
        ...row,
        rate: rate.toFixed(2),
      })
    });
  }

}
