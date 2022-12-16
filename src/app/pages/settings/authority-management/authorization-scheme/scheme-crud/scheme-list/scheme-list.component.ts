import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";

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

  editCache: {[key: string]: {edit: boolean; data: SchemeModel}} = {};

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

  schemeUpdateFormGroup = new FormGroup({
    name: new FormControl('', {initialValueIsDefault: true, nonNullable: true, validators: Validators.required}),
    modules: new FormControl([], {initialValueIsDefault: true, nonNullable: true, validators: Validators.required}),
  });

  ngOnInit(): void {
    this.schemeList.forEach(item => {
      this.editCache[item.id] = {
        edit: false,
        data: { ...item }
      };
    });
  }

  schemeEdit(id: number) {
    this.editCache[id].edit = true;
  }

  schemeEditCancel() {
  }

  schemeDelete() {
  }

  schemeEditSave() {

  }
}
