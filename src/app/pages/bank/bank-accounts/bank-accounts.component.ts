import { Component, OnInit } from '@angular/core';
import {HEIGHT_PX} from "../../../shared/constants/select-height-px";
import {HeaderConfigAction} from "../../../store/header-config/header-config.action";
import {Store} from "@ngxs/store";
import {HeaderConfigModel} from "../../../models/header-config-model";
import {ActivatedRoute, Router} from "@angular/router";
import {FavoriteAction} from "../../../store/favorite/favorite.action";
import {FavoriteStateModel} from "../../../models/favorite-state.model";
import {FormBuilder, FormControl, Validators} from "@angular/forms";

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
    {id: 1, name: 'xyz', status: false},
    {id: 2, name: 'abc', status: false},
    {id: 3, name: 'klm', status: false},
    {id: 4, name: 'fvt', status: false},
    {id: 5, name: 'asd', status: false},
    {id: 6, name: 'ghj', status: false},
    {id: 7, name: 'çöm', status: false},
    {id: 8, name: 'ıyo', status: false},
  ];
  bankList = [
    {
      id: 1,
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
      id: 2,
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
      id: 3,
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
      id: 4,
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
      id: 5,
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
      id: 6,
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
      id: 7,
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
      id: 8,
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
      id: 9,
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
      id: 10,
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
      id: 11,
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
      id: 12,
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
      id: 13,
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
      id: 14,
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
      id: 15,
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
      id: 16,
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
      id: 17,
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
      id: 18,
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
      id: 19,
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
      id: 20,
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
      id: 21,
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
      id: 22,
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
      id: 23,
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
  ];
  status = false;

  bankFilterForm = this.fb.group({
    companies: new FormControl([]),
    branches: new FormControl([]),
    accountTypes: new FormControl([]),
    balance: new FormControl([]),
    currencyUnit: new FormControl([]),
  });

  heightPx = HEIGHT_PX;
  headerConfig: Array<HeaderConfigModel> = new Array<HeaderConfigModel>();
  favoriteModel: FavoriteStateModel = new FavoriteStateModel();

  constructor(
    private store: Store,
    private router: Router,
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
  ) {
    this.headerConfig.push({
      component: () => import('../transactions-dashboard/timer-refresh/timer-refresh.component').then(it => it.TimerRefreshComponent),
      dataObj: null
    });
    this.store.dispatch(new HeaderConfigAction(this.headerConfig));
    this.favoriteModel = {
      name: 'Banka Hesapları',
      url: this.router.url
    }
    this.store.dispatch(new FavoriteAction(this.favoriteModel));
    this.bankAccountRoutingController();
  }

  ngOnInit(): void {
  }

 bankAccountRoutingController(): void {
   this.activatedRoute.queryParams.subscribe((params: any) => {
     if (params.id) {
       this.bankListHidden = true;
       this.bankTableHidden = false;
     }
   });
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

  checkboxChange(id: number, e: any, type: string, formControl: any) {
    let list = [] as any;
    this.listOption.map((x, index) => {
      if (x.id === id) {
        if (e) {
          list.push(...formControl, id);
        } else {
          formControl.forEach((m: any, i: number) => {
            if (m === id) {
              formControl.splice(i, 1);
            }
          });
          list.push(...formControl);
        }
        x.status = e;
        this.bankFilterForm.get(type)?.setValue(list);
      }
    });
  }

  selectChange(event: any) {
    this.listOption.forEach((row: any) => {
      row.status = false;
    });
    event.forEach((e: any) => {
      this.listOption.forEach((row: any) => {
        if (e === row.id) {
          row.status = true;
        }
      });
    });
  }

  onSubmit() {
    console.log(this.bankFilterForm.value);
  }
}
