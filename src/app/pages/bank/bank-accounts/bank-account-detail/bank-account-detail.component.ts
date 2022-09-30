import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-bank-account-detail',
  templateUrl: './bank-account-detail.component.html',
  styleUrls: ['./bank-account-detail.component.scss']
})
export class BankAccountDetailComponent implements OnInit {
  detailList =
    {
      image: 'assets/img/bank-account/bank.png',
      account: 30,
      moneyType: 'TRY',
      list: [
        {
          id: 1,
          date: '02.11.2018 15:57',
          definition: 'AK_TRY_01',
          company: 'Firma A',
          branch: 'Altunizade Ticari Şube',
          accountType: 'Genel',
          accountNo: '1212-34343434-1233',
          balance: '1.232.343 TL',
          status: true,
          detail: [
            {
              creditLimit: null,
              availableCreditLimit: null,
              balance: '5.455029 TRY',
              blockedBalance: '5.455029 TRY',
              availableBalance: '5.455029 TRY',
              creditAvailableBalance: '5.455029 TRY',
            }
          ]
        },
        {
          id: 2,
          date: '02.11.2018 15:57',
          definition: 'AK_TRY_01',
          company: 'Firma A',
          branch: 'Altunizade Ticari Şube',
          accountType: 'Genel',
          accountNo: '1212-34343434-1233',
          balance: '1.232.343 TL',
          status: true,
          detail: [
            {
              creditLimit: null,
              availableCreditLimit: null,
              balance: '5.455029 TRY',
              blockedBalance: '5.455029 TRY',
              availableBalance: '5.455029 TRY',
              creditAvailableBalance: '5.455029 TRY',
            }
          ]
        },
        {
          id: 3,
          date: '02.11.2018 15:57',
          definition: 'AK_TRY_01',
          company: 'Firma A',
          branch: 'Altunizade Ticari Şube',
          accountType: 'Genel',
          accountNo: '1212-34343434-1233',
          balance: '1.232.343 TL',
          status: false,
          detail: [
            {
              creditLimit: null,
              availableCreditLimit: null,
              balance: '5.455029 TRY',
              blockedBalance: '5.455029 TRY',
              availableBalance: '5.455029 TRY',
              creditAvailableBalance: '5.455029 TRY',
            }
          ]
        },
        {
          id: 4,
          date: '02.11.2018 15:57',
          definition: 'AK_TRY_01',
          company: 'Firma A',
          branch: 'Altunizade Ticari Şube',
          accountType: 'Genel',
          accountNo: '1212-34343434-1233',
          balance: '1.232.343 TL',
          status: true,
          detail: [
            {
              creditLimit: null,
              availableCreditLimit: null,
              balance: '5.455029 TRY',
              blockedBalance: '5.455029 TRY',
              availableBalance: '5.455029 TRY',
              creditAvailableBalance: '5.455029 TRY',
            }
          ]
        },
        {
          id: 5,
          date: '02.11.2018 15:57',
          definition: 'AK_TRY_01',
          company: 'Firma A',
          branch: 'Altunizade Ticari Şube',
          accountType: 'Genel',
          accountNo: '1212-34343434-1233',
          balance: '1.232.343 TL',
          status: false,
          detail: [
            {
              creditLimit: null,
              availableCreditLimit: null,
              balance: '5.455029 TRY',
              blockedBalance: '5.455029 TRY',
              availableBalance: '5.455029 TRY',
              creditAvailableBalance: '5.455029 TRY',
            }
          ]
        },
        {
          id: 6,
          date: '02.11.2018 15:57',
          definition: 'AK_TRY_01',
          company: 'Firma A',
          branch: 'Altunizade Ticari Şube',
          accountType: 'Genel',
          accountNo: '1212-34343434-1233',
          balance: '1.232.343 TL',
          status: true,
          detail: [
            {
              creditLimit: null,
              availableCreditLimit: null,
              balance: '5.455029 TRY',
              blockedBalance: '5.455029 TRY',
              availableBalance: '5.455029 TRY',
              creditAvailableBalance: '5.455029 TRY',
            }
          ]
        },
        {
          id: 7,
          date: '02.11.2018 15:57',
          definition: 'AK_TRY_01',
          company: 'Firma A',
          branch: 'Altunizade Ticari Şube',
          accountType: 'Genel',
          accountNo: '1212-34343434-1233',
          balance: '1.232.343 TL',
          status: false,
          detail: [
            {
              creditLimit: null,
              availableCreditLimit: null,
              balance: '5.455029 TRY',
              blockedBalance: '5.455029 TRY',
              availableBalance: '5.455029 TRY',
              creditAvailableBalance: '5.455029 TRY',
            }
          ]
        },
      ]
    };
  listOfColumn = [
    {
      title: 'Tarih',
      compare: (a: any, b: any) => a.date - b.date,
      priority: 6
    },
    {
      title: 'Tanım',
      compare: (a: any, b: any) => a.definition - b.definition,
      priority: 5
    },
    {
      title: 'Firma',
      compare: (a: any, b: any) => a.company - b.company,
      priority: 4
    },
    {
      title: 'Şube',
      compare: (a: any, b: any) => a.branch - b.branch,
      priority: 3
    },
    {
      title: 'Hesap Türü',
      compare: (a: any, b: any) => a.accountType - b.accountType,
      priority: 2
    },
    {
      title: 'Hesap Numarası',
      compare: (a: any, b: any) => a.accountNo - b.accountNo,
      priority: 1
    },
    {
      title: 'Bakiye',
      compare: null,
      priority: false
    },
  ];

  listChildDetail = [
    { title: 'Kredi Limiti'},
    { title: 'Kullanılabilir Kredi Limiti'},
    { title: 'Bakiye'},
    { title: 'Bloklu Bakiye'},
    { title: 'Kullanılabilir Bakiye'},
    { title: 'Kredili Kullanılabilir Bakiye'},
  ]
  constructor(
    private activatedRoute: ActivatedRoute,
  ) {
    this.activatedRoute.queryParams.pipe().subscribe(params => {

    });
  }

  ngOnInit(): void {
  }

}
