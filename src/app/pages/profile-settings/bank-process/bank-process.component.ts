import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bank-process',
  templateUrl: './bank-process.component.html',
  styleUrls: ['./bank-process.component.scss']
})
export class BankProcessComponent implements OnInit {
  data = [
    {
      id: 1,
      main: 'Nakit Durumu',
      child: [
        {id: 1, name: 'Nakit Akışı Genel Rapor', status: true},
        {id: 2, name: 'Nakit Akışı ', status: true},
        {id: 3, name: 'Varlık Akışı Genel Rapor', status: false},
        {id: 4, name: 'Varlık Akışı Detay Rapor', status: true},
      ]
    },
    {
      id: 2,
      main: 'Hesap Hareketleri Sistemi',
      child: [
        {id: 1, name: 'Nakit Akışı Genel Rapor', status: false},
        {id: 2, name: 'Nakit Akışı Detay Rapor', status: true},
        {id: 3, name: 'Varlık Akışı Genel Rapor', status: false},
        {id: 4, name: 'Varlık Akışı Detay Rapor', status: true},
      ]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
