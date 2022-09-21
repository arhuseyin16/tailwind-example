import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  moduleList = [
    {
      name: 'Nakit Akışı',
      image: 'assets/img/dashboard/dashboard-nakit.png',
      lightImage:'assets/img/dashboard/light-nakit.png',
      url: '/'
    },
    {
      name: 'Banka İşlemleri',
      image: 'assets/img/dashboard/dashboard-bank.png',
      lightImage:'assets/img/dashboard/light-bank.png',
      url: '/'
    },
    {
      name: 'Pos İşlemleri',
      image: 'assets/img/dashboard/dashboard-pos.png',
      lightImage:'assets/img/dashboard/light-pos.png',
      url: '/'
    },
    {
      name: 'E Ödeme',
      image: 'assets/img/dashboard/dashboard-e-odeme.png',
      lightImage:'assets/img/dashboard/light-e-odeme.png',
      url: '/'
    },
    {
      name: 'DBS',
      image: 'assets/img/dashboard/dashboard-dbs.png',
      lightImage:'assets/img/dashboard/light-dbs.png',
      url: '/'
    },
    {
      name: 'Stock Finans',
      image: 'assets/img/dashboard/dashboard-stock.png',
      lightImage:'assets/img/dashboard/light-stock.png',
      url: '/'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
