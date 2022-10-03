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
          expand: false,
          detail: [
            {
              creditLimit: null,
              availableCreditLimit: null,
              balance: '5.455029 TRY',
              blockedBalance: '5.455029 TRY',
              availableBalance: '5.455029 TRY',
              creditAvailableBalance: '5.455029 TRY',
            },
            {
              creditLimit: null,
              availableCreditLimit: null,
              balance: '5.455029 TRY',
              blockedBalance: '5.455029 TRY',
              availableBalance: '5.455029 TRY',
              creditAvailableBalance: '5.455029 TRY',
            },
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
          expand: false,
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
          expand: false,
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
          expand: false,
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
          expand: false,
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
          expand: false,
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
          expand: false,
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
      title: 'bank-account.date',
      compare: (a: any, b: any) => a.date - b.date,
      priority: 6
    },
    {
      title: 'bank-account.definition',
      compare: (a: any, b: any) => a.definition - b.definition,
      priority: 5
    },
    {
      title: 'bank-account.company',
      compare: (a: any, b: any) => a.company - b.company,
      priority: 4
    },
    {
      title: 'bank-account.branch',
      compare: (a: any, b: any) => a.branch - b.branch,
      priority: 3
    },
    {
      title: 'bank-account.accountType',
      compare: (a: any, b: any) => a.accountType - b.accountType,
      priority: 2
    },
    {
      title: 'bank-account.accountNo',
      compare: (a: any, b: any) => a.accountNo - b.accountNo,
      priority: 1
    },
    {
      title: 'bank-account.balance',
      compare: null,
      priority: false
    },
  ];

  listChildDetailColumn = [
    { title: 'bank-account.creditLimit'},
    { title: 'bank-account.availableCreditLimit'},
    { title: 'bank-account.balance'},
    { title: 'bank-account.blockedBalance'},
    { title: 'bank-account.availableBalance'},
    { title: 'bank-account.creditAvailableBalance'},
  ];
  constructor(
    private activatedRoute: ActivatedRoute,
  ) {
    this.activatedRoute.queryParams.pipe().subscribe(params => {

    });
  }

  ngOnInit(): void {}

  rowDetail(id: number) {
    this.detailList.list.map(row => {
      if (row.id === id) {
        row.expand = !row.expand;
      } else {
        row.expand = false;
      }
    });
  }
}
