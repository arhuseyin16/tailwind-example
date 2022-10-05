import { Component, OnInit } from '@angular/core';
import {HEIGHT_PX} from "../../../shared/constants/select-height-px";
import {HeaderConfigAction} from "../../../store/header-config/header-config.action";
import {Store} from "@ngxs/store";
import {HeaderConfigModel} from "../../../models/header-config-model";
import {TimerRefreshComponent} from "../transactions-dashboard/timer-refresh/timer-refresh.component";

@Component({
  selector: 'app-bank-accounts',
  templateUrl: './bank-accounts.component.html',
  styleUrls: ['./bank-accounts.component.scss']
})
export class BankAccountsComponent implements OnInit {
  bankListHidden = false;
  bankTableHidden = true;
  size = 5;
  listOption = [
    {id: 1, name: 'xyz'},
    {id: 2, name: 'abc'},
    {id: 3, name: 'klm'},
    {id: 4, name: 'fvt'},
    {id: 5, name: 'asd'},
    {id: 6, name: 'ghj'},
    {id: 7, name: 'çöm'},
    {id: 8, name: 'ıyo'},
  ];
  bankList = [
    {
      image: 'assets/img/bank-account/akbank.png',
      color: '#dc4333',
      accountList: [
        {
          account: 30,
          price: '4.074.43',
          moneyType: 'TRY'
        },
        {
          account: 5,
          price: '4.074.43',
          moneyType: 'USD'
        },
        {
          account: 5,
          price: '4.074.43',
          moneyType: 'EUR'
        },
        {
          account: 30,
          price: '4.074.43',
          moneyType: 'CHF'
        },
        {
          account: 30,
          price: '4.074.43',
          moneyType: 'GBP'
        },
        {
          account: 0,
          price: '4.074.43',
          moneyType: 'JPY'
        },
        {
          account: 0,
          price: '4.074.43',
          moneyType: 'AUD'
        },
      ]
    },
    {
      image: 'assets/img/bank-account/akbank.png',
      color: '#52b189',
      accountList: [
        {
          account: 30,
          price: '4.074.43',
          moneyType: 'TRY'
        },
        {
          account: 5,
          price: '4.074.43',
          moneyType: 'USD'
        },
        {
          account: 5,
          price: '4.074.43',
          moneyType: 'EUR'
        },
        {
          account: 30,
          price: '4.074.43',
          moneyType: 'CHF'
        },
        {
          account: 30,
          price: '4.074.43',
          moneyType: 'GBP'
        },
        {
          account: 0,
          price: '4.074.43',
          moneyType: 'JPY'
        },
        {
          account: 0,
          price: '4.074.43',
          moneyType: 'AUD'
        },
      ]
    },
    {
      image: 'assets/img/bank-account/akbank.png',
      color: '#2c414a',
      accountList: [
        {
          account: 30,
          price: '4.074.43',
          moneyType: 'TRY'
        },
        {
          account: 5,
          price: '4.074.43',
          moneyType: 'USD'
        },
        {
          account: 5,
          price: '4.074.43',
          moneyType: 'EUR'
        },
        {
          account: 30,
          price: '4.074.43',
          moneyType: 'CHF'
        },
        {
          account: 30,
          price: '4.074.43',
          moneyType: 'GBP'
        },
        {
          account: 0,
          price: '4.074.43',
          moneyType: 'JPY'
        },
        {
          account: 0,
          price: '4.074.43',
          moneyType: 'AUD'
        },
      ]
    },
    {
      image: 'assets/img/bank-account/akbank.png',
      color: '#2c6eaa',
      accountList: [
        {
          account: 30,
          price: '4.074.43',
          moneyType: 'TRY'
        },
        {
          account: 5,
          price: '4.074.43',
          moneyType: 'USD'
        },
        {
          account: 5,
          price: '4.074.43',
          moneyType: 'EUR'
        },
        {
          account: 30,
          price: '4.074.43',
          moneyType: 'CHF'
        },
        {
          account: 30,
          price: '4.074.43',
          moneyType: 'GBP'
        },
        {
          account: 0,
          price: '4.074.43',
          moneyType: 'JPY'
        },
        {
          account: 0,
          price: '4.074.43',
          moneyType: 'AUD'
        },
      ]
    },
    {
      image: 'assets/img/bank-account/akbank.png',
      color: '#95d8da',
      accountList: [
        {
          account: 30,
          price: '4.074.43',
          moneyType: 'TRY'
        },
        {
          account: 5,
          price: '4.074.43',
          moneyType: 'USD'
        },
        {
          account: 5,
          price: '4.074.43',
          moneyType: 'EUR'
        },
        {
          account: 30,
          price: '4.074.43',
          moneyType: 'CHF'
        },
        {
          account: 30,
          price: '4.074.43',
          moneyType: 'GBP'
        },
        {
          account: 0,
          price: '4.074.43',
          moneyType: 'JPY'
        },
        {
          account: 0,
          price: '4.074.43',
          moneyType: 'AUD'
        },
      ]
    },
    {
      image: 'assets/img/bank-account/akbank.png',
      color: '#0d3068',
      accountList: [
        {
          account: 30,
          price: '4.074.43',
          moneyType: 'TRY'
        },
        {
          account: 5,
          price: '4.074.43',
          moneyType: 'USD'
        },
        {
          account: 5,
          price: '4.074.43',
          moneyType: 'EUR'
        },
        {
          account: 30,
          price: '4.074.43',
          moneyType: 'CHF'
        },
        {
          account: 30,
          price: '4.074.43',
          moneyType: 'GBP'
        },
        {
          account: 0,
          price: '4.074.43',
          moneyType: 'JPY'
        },
        {
          account: 0,
          price: '4.074.43',
          moneyType: 'AUD'
        },
      ]
    },
    {
      image: 'assets/img/bank-account/akbank.png',
      color: '#ee6f2d',
      accountList: [
        {
          account: 30,
          price: '4.074.43',
          moneyType: 'TRY'
        },
        {
          account: 5,
          price: '4.074.43',
          moneyType: 'USD'
        },
        {
          account: 5,
          price: '4.074.43',
          moneyType: 'EUR'
        },
        {
          account: 30,
          price: '4.074.43',
          moneyType: 'CHF'
        },
        {
          account: 30,
          price: '4.074.43',
          moneyType: 'GBP'
        },
        {
          account: 0,
          price: '4.074.43',
          moneyType: 'JPY'
        },
        {
          account: 0,
          price: '4.074.43',
          moneyType: 'AUD'
        },
      ]
    },
    {
      image: 'assets/img/bank-account/akbank.png',
      color: '#be3a3a',
      accountList: [
        {
          account: 30,
          price: '4.074.43',
          moneyType: 'TRY'
        },
        {
          account: 5,
          price: '4.074.43',
          moneyType: 'USD'
        },
        {
          account: 5,
          price: '4.074.43',
          moneyType: 'EUR'
        },
        {
          account: 30,
          price: '4.074.43',
          moneyType: 'CHF'
        },
        {
          account: 30,
          price: '4.074.43',
          moneyType: 'GBP'
        },
        {
          account: 0,
          price: '4.074.43',
          moneyType: 'JPY'
        },
        {
          account: 0,
          price: '4.074.43',
          moneyType: 'AUD'
        },
      ]
    },
    {
      image: 'assets/img/bank-account/akbank.png',
      color: '#681836',
      accountList: [
        {
          account: 30,
          price: '4.074.43',
          moneyType: 'TRY'
        },
        {
          account: 5,
          price: '4.074.43',
          moneyType: 'USD'
        },
        {
          account: 5,
          price: '4.074.43',
          moneyType: 'EUR'
        },
        {
          account: 30,
          price: '4.074.43',
          moneyType: 'CHF'
        },
        {
          account: 30,
          price: '4.074.43',
          moneyType: 'GBP'
        },
        {
          account: 0,
          price: '4.074.43',
          moneyType: 'JPY'
        },
        {
          account: 0,
          price: '4.074.43',
          moneyType: 'AUD'
        },
      ]
    },
    {
      image: 'assets/img/bank-account/akbank.png',
      color: '#dc4333',
      accountList: [
        {
          account: 30,
          price: '4.074.43',
          moneyType: 'TRY'
        },
        {
          account: 5,
          price: '4.074.43',
          moneyType: 'USD'
        },
        {
          account: 5,
          price: '4.074.43',
          moneyType: 'EUR'
        },
        {
          account: 30,
          price: '4.074.43',
          moneyType: 'CHF'
        },
        {
          account: 30,
          price: '4.074.43',
          moneyType: 'GBP'
        },
        {
          account: 0,
          price: '4.074.43',
          moneyType: 'JPY'
        },
        {
          account: 0,
          price: '4.074.43',
          moneyType: 'AUD'
        },
      ]
    },
    {
      image: 'assets/img/bank-account/akbank.png',
      color: '#52b189',
      accountList: [
        {
          account: 30,
          price: '4.074.43',
          moneyType: 'TRY'
        },
        {
          account: 5,
          price: '4.074.43',
          moneyType: 'USD'
        },
        {
          account: 5,
          price: '4.074.43',
          moneyType: 'EUR'
        },
        {
          account: 30,
          price: '4.074.43',
          moneyType: 'CHF'
        },
        {
          account: 30,
          price: '4.074.43',
          moneyType: 'GBP'
        },
        {
          account: 0,
          price: '4.074.43',
          moneyType: 'JPY'
        },
        {
          account: 0,
          price: '4.074.43',
          moneyType: 'AUD'
        },
      ]
    },
    {
      image: 'assets/img/bank-account/akbank.png',
      color: '#2c414a',
      accountList: [
        {
          account: 30,
          price: '4.074.43',
          moneyType: 'TRY'
        },
        {
          account: 5,
          price: '4.074.43',
          moneyType: 'USD'
        },
        {
          account: 5,
          price: '4.074.43',
          moneyType: 'EUR'
        },
        {
          account: 30,
          price: '4.074.43',
          moneyType: 'CHF'
        },
        {
          account: 30,
          price: '4.074.43',
          moneyType: 'GBP'
        },
        {
          account: 0,
          price: '4.074.43',
          moneyType: 'JPY'
        },
        {
          account: 0,
          price: '4.074.43',
          moneyType: 'AUD'
        },
      ]
    },
    {
      image: 'assets/img/bank-account/akbank.png',
      color: '#2c6eaa',
      accountList: [
        {
          account: 30,
          price: '4.074.43',
          moneyType: 'TRY'
        },
        {
          account: 5,
          price: '4.074.43',
          moneyType: 'USD'
        },
        {
          account: 5,
          price: '4.074.43',
          moneyType: 'EUR'
        },
        {
          account: 30,
          price: '4.074.43',
          moneyType: 'CHF'
        },
        {
          account: 30,
          price: '4.074.43',
          moneyType: 'GBP'
        },
        {
          account: 0,
          price: '4.074.43',
          moneyType: 'JPY'
        },
        {
          account: 0,
          price: '4.074.43',
          moneyType: 'AUD'
        },
      ]
    },
    {
      image: 'assets/img/bank-account/akbank.png',
      color: '#95d8da',
      accountList: [
        {
          account: 30,
          price: '4.074.43',
          moneyType: 'TRY'
        },
        {
          account: 5,
          price: '4.074.43',
          moneyType: 'USD'
        },
        {
          account: 5,
          price: '4.074.43',
          moneyType: 'EUR'
        },
        {
          account: 30,
          price: '4.074.43',
          moneyType: 'CHF'
        },
        {
          account: 30,
          price: '4.074.43',
          moneyType: 'GBP'
        },
        {
          account: 0,
          price: '4.074.43',
          moneyType: 'JPY'
        },
        {
          account: 0,
          price: '4.074.43',
          moneyType: 'AUD'
        },
      ]
    },
    {
      image: 'assets/img/bank-account/akbank.png',
      color: '#0d3068',
      accountList: [
        {
          account: 30,
          price: '4.074.43',
          moneyType: 'TRY'
        },
        {
          account: 5,
          price: '4.074.43',
          moneyType: 'USD'
        },
        {
          account: 5,
          price: '4.074.43',
          moneyType: 'EUR'
        },
        {
          account: 30,
          price: '4.074.43',
          moneyType: 'CHF'
        },
        {
          account: 30,
          price: '4.074.43',
          moneyType: 'GBP'
        },
        {
          account: 0,
          price: '4.074.43',
          moneyType: 'JPY'
        },
        {
          account: 0,
          price: '4.074.43',
          moneyType: 'AUD'
        },
      ]
    },
    {
      image: 'assets/img/bank-account/akbank.png',
      color: '#ee6f2d',
      accountList: [
        {
          account: 30,
          price: '4.074.43',
          moneyType: 'TRY'
        },
        {
          account: 5,
          price: '4.074.43',
          moneyType: 'USD'
        },
        {
          account: 5,
          price: '4.074.43',
          moneyType: 'EUR'
        },
        {
          account: 30,
          price: '4.074.43',
          moneyType: 'CHF'
        },
        {
          account: 30,
          price: '4.074.43',
          moneyType: 'GBP'
        },
        {
          account: 0,
          price: '4.074.43',
          moneyType: 'JPY'
        },
        {
          account: 0,
          price: '4.074.43',
          moneyType: 'AUD'
        },
      ]
    },
    {
      image: 'assets/img/bank-account/akbank.png',
      color: '#be3a3a',
      accountList: [
        {
          account: 30,
          price: '4.074.43',
          moneyType: 'TRY'
        },
        {
          account: 5,
          price: '4.074.43',
          moneyType: 'USD'
        },
        {
          account: 5,
          price: '4.074.43',
          moneyType: 'EUR'
        },
        {
          account: 30,
          price: '4.074.43',
          moneyType: 'CHF'
        },
        {
          account: 30,
          price: '4.074.43',
          moneyType: 'GBP'
        },
        {
          account: 0,
          price: '4.074.43',
          moneyType: 'JPY'
        },
        {
          account: 0,
          price: '4.074.43',
          moneyType: 'AUD'
        },
      ]
    },
    {
      image: 'assets/img/bank-account/akbank.png',
      color: '#681836',
      accountList: [
        {
          account: 30,
          price: '4.074.43',
          moneyType: 'TRY'
        },
        {
          account: 5,
          price: '4.074.43',
          moneyType: 'USD'
        },
        {
          account: 5,
          price: '4.074.43',
          moneyType: 'EUR'
        },
        {
          account: 30,
          price: '4.074.43',
          moneyType: 'CHF'
        },
        {
          account: 30,
          price: '4.074.43',
          moneyType: 'GBP'
        },
        {
          account: 0,
          price: '4.074.43',
          moneyType: 'JPY'
        },
        {
          account: 0,
          price: '4.074.43',
          moneyType: 'AUD'
        },
      ]
    },
    {
      image: 'assets/img/bank-account/akbank.png',
      color: '#95d8da',
      accountList: [
        {
          account: 30,
          price: '4.074.43',
          moneyType: 'TRY'
        },
        {
          account: 5,
          price: '4.074.43',
          moneyType: 'USD'
        },
        {
          account: 5,
          price: '4.074.43',
          moneyType: 'EUR'
        },
        {
          account: 30,
          price: '4.074.43',
          moneyType: 'CHF'
        },
        {
          account: 30,
          price: '4.074.43',
          moneyType: 'GBP'
        },
        {
          account: 0,
          price: '4.074.43',
          moneyType: 'JPY'
        },
        {
          account: 0,
          price: '4.074.43',
          moneyType: 'AUD'
        },
      ]
    },
    {
      image: 'assets/img/bank-account/akbank.png',
      color: '#0d3068',
      accountList: [
        {
          account: 30,
          price: '4.074.43',
          moneyType: 'TRY'
        },
        {
          account: 5,
          price: '4.074.43',
          moneyType: 'USD'
        },
        {
          account: 5,
          price: '4.074.43',
          moneyType: 'EUR'
        },
        {
          account: 30,
          price: '4.074.43',
          moneyType: 'CHF'
        },
        {
          account: 30,
          price: '4.074.43',
          moneyType: 'GBP'
        },
        {
          account: 0,
          price: '4.074.43',
          moneyType: 'JPY'
        },
        {
          account: 0,
          price: '4.074.43',
          moneyType: 'AUD'
        },
      ]
    },
    {
      image: 'assets/img/bank-account/akbank.png',
      color: '#ee6f2d',
      accountList: [
        {
          account: 30,
          price: '4.074.43',
          moneyType: 'TRY'
        },
        {
          account: 5,
          price: '4.074.43',
          moneyType: 'USD'
        },
        {
          account: 5,
          price: '4.074.43',
          moneyType: 'EUR'
        },
        {
          account: 30,
          price: '4.074.43',
          moneyType: 'CHF'
        },
        {
          account: 30,
          price: '4.074.43',
          moneyType: 'GBP'
        },
        {
          account: 0,
          price: '4.074.43',
          moneyType: 'JPY'
        },
        {
          account: 0,
          price: '4.074.43',
          moneyType: 'AUD'
        },
      ]
    },
    {
      image: 'assets/img/bank-account/akbank.png',
      color: '#be3a3a',
      accountList: [
        {
          account: 30,
          price: '4.074.43',
          moneyType: 'TRY'
        },
        {
          account: 5,
          price: '4.074.43',
          moneyType: 'USD'
        },
        {
          account: 5,
          price: '4.074.43',
          moneyType: 'EUR'
        },
        {
          account: 30,
          price: '4.074.43',
          moneyType: 'CHF'
        },
        {
          account: 30,
          price: '4.074.43',
          moneyType: 'GBP'
        },
        {
          account: 0,
          price: '4.074.43',
          moneyType: 'JPY'
        },
        {
          account: 0,
          price: '4.074.43',
          moneyType: 'AUD'
        },
      ]
    },
    {
      image: 'assets/img/bank-account/akbank.png',
      color: '#681836',
      accountList: [
        {
          account: 30,
          price: '4.074.43',
          moneyType: 'TRY'
        },
        {
          account: 5,
          price: '4.074.43',
          moneyType: 'USD'
        },
        {
          account: 5,
          price: '4.074.43',
          moneyType: 'EUR'
        },
        {
          account: 30,
          price: '4.074.43',
          moneyType: 'CHF'
        },
        {
          account: 30,
          price: '4.074.43',
          moneyType: 'GBP'
        },
        {
          account: 0,
          price: '4.074.43',
          moneyType: 'JPY'
        },
        {
          account: 0,
          price: '4.074.43',
          moneyType: 'AUD'
        },
      ]
    },
  ]

  heightPx = HEIGHT_PX;
  headerConfig: Array<HeaderConfigModel> = new Array<HeaderConfigModel>();


  constructor(private store: Store) {
    this.headerConfig.push({
      component: () => import('../transactions-dashboard/timer-refresh/timer-refresh.component').then(it => it.TimerRefreshComponent),
      dataObj: null
    });
    this.store.dispatch(new HeaderConfigAction(this.headerConfig));
  }

  ngOnInit(): void {
  }

  bankViewChange(type: string) {
    if (type === 'bankTable') {
      this.bankTableHidden = true;
      this.bankListHidden = false;
    } else {
      this.bankListHidden = true;
      this.bankTableHidden = false;
    }
  }
}
