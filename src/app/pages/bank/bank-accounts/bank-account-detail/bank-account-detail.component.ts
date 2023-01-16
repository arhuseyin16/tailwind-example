import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Store} from "@ngxs/store";
import {HeaderConfigAction} from "../../../../store/header-config/header-config.action";
import {HeaderConfigModel} from "../../../../models/header-config-model";
import {FavoriteClear} from "../../../../store/favorite/favorite.action";
import {PAGE_SIZE} from "../../../../shared/constants/table-page-size";

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
          company: 'Firma Y',
          branch: 'Maltepe Ticari Şube',
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
          branch: 'Pendik Ticari Şube',
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
          id: 8,
          date: '02.11.2018 15:57',
          definition: 'AK_TRY_01',
          company: 'Firma A',
          branch: 'Kadıköy Ticari Şube',
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
          id: 9,
          date: '02.11.2018 15:57',
          definition: 'AK_TRY_01',
          company: 'Firma B',
          branch: 'Cekmeköy Ticari Şube',
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
          id: 10,
          date: '02.11.2018 15:57',
          definition: 'AK_TRY_01',
          company: 'Firma C',
          branch: 'Balçık Ticari Şube',
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
      compare: null,
      sort: false,
      sortOrder: null,
      width: "150px"
    },
    {
      title: 'bank-account.definition',
      compare: (a: any, b: any) => a.definition - b.definition,
      sort: true,
      sortOrder: null,
      width: "160px"
    },
    {
      title: 'bank-account.company',
      compare: (a: any, b: any) => a.company.localeCompare(b.company),
      sort: true,
      sortOrder: null,
      width: "160px"
    },
    {
      title: 'bank-account.branch',
      compare: (a: any, b: any) => a.branch.localeCompare(b.branch),
      sort: true,
      sortOrder: null,
      width: "230px"
    },
    {
      title: 'bank-account.accountType',
      compare: (a: any, b: any) => a.accountType - b.accountType,
      sort: true,
      sortOrder: null,
      width: "150px"
    },
    {
      title: 'bank-account.accountNo',
      compare: null,
      sort: false,
      sortOrder: null,
      width: "250px"
    },
    {
      title: 'bank-account.balance',
      compare: null,
      sort: false,
      sortOrder: null,
      width: "150px"
    },
    {
      title:'',
      compare: null,
      sort: false,
      sortOrder: null,
      width: "130px"
    },
    {
      title:'',
      compare: null,
      sort: false,
      sortOrder: null,
      width: "auto"
    }
  ];
  listChildDetailColumn = [
    { title: 'bank-account.creditLimit'},
    { title: 'bank-account.availableCreditLimit'},
    { title: 'bank-account.balance'},
    { title: 'bank-account.blockedBalance'},
    { title: 'bank-account.availableBalance'},
    { title: 'bank-account.creditAvailableBalance'},
  ];
  pageSize = PAGE_SIZE;
  headerConfig: Array<HeaderConfigModel> = new Array<HeaderConfigModel>();
  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store,
    private router: Router
  ) {
    this.activatedRoute.queryParams.pipe().subscribe(params => {

    });
    const dataObj = {
        image: 'https://portaltest.netbt.com/portalApi/Images/netbtProducts/ebiletlogo.png',
        account: 20,
        moneyType: 'TRY'
      }
    this.headerConfig.push({
      component: () => import('../bank-account-detail/bank-account-detail-header/bank-account-detail-header.component').then(it => it.BankAccountDetailHeaderComponent),
      dataObj: dataObj
    });
    this.store.dispatch(new HeaderConfigAction(this.headerConfig));
    //favorite
    this.store.dispatch(new FavoriteClear());
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
