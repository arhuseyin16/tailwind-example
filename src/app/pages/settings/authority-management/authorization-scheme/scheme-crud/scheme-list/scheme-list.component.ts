import { Component, OnInit } from '@angular/core';

export interface SchemeModel {
  id: number,
  name: string;
  modules: Array<SchemeModuleModel>;
}

export interface SchemeModuleModel {
  id: number;
  name: string;
}

@Component({
  selector: 'app-scheme-list',
  templateUrl: './scheme-list.component.html',
  styleUrls: ['./scheme-list.component.scss']
})
export class SchemeListComponent implements OnInit {

  constructor() { }

  schemeList: Array<SchemeModel> = [
    {
      id: 1,
      name: 'IT Yetki Şeması',
      modules: [
        {
          id: 1,
          name: 'Banka İşlemleri'
        },
        {
          id: 2,
          name: 'POS İşlemleri'
        },
        {
          id: 3,
            name: 'E Ödeme'
        },
        {
          id: 4,
          name: 'Online DBS'
        }
      ]
    },
    {
      id: 2,
      name: 'Analiz Yetki Şeması',
      modules: [
        {
          id: 1,
          name: 'Banka İşlemleri'
        }
      ]
    }
  ]

  ngOnInit(): void {
  }

}
