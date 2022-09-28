import { Component, OnInit } from '@angular/core';
import {HEIGHT_PX} from "../../../shared/constants/select-height-px";

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
      image: 'assets/img/bank-account/bank.png',
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
      image: 'assets/img/bank-account/bank.png',
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
      image: 'assets/img/bank-account/bank.png',
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
      image: 'assets/img/bank-account/bank.png',
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
      image: 'assets/img/bank-account/bank.png',
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
      image: 'assets/img/bank-account/bank.png',
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
      image: 'assets/img/bank-account/bank.png',
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
      image: 'assets/img/bank-account/bank.png',
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
      image: 'assets/img/bank-account/bank.png',
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
      image: 'assets/img/bank-account/bank.png',
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
      image: 'assets/img/bank-account/bank.png',
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
      image: 'assets/img/bank-account/bank.png',
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
      image: 'assets/img/bank-account/bank.png',
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
      image: 'assets/img/bank-account/bank.png',
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
      image: 'assets/img/bank-account/bank.png',
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
      image: 'assets/img/bank-account/bank.png',
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
      image: 'assets/img/bank-account/bank.png',
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
      image: 'assets/img/bank-account/bank.png',
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
      image: 'assets/img/bank-account/bank.png',
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
      image: 'assets/img/bank-account/bank.png',
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
      image: 'assets/img/bank-account/bank.png',
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
      image: 'assets/img/bank-account/bank.png',
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
      image: 'assets/img/bank-account/bank.png',
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

  constructor() { }

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
