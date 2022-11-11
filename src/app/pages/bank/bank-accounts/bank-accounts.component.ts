import { Component, OnInit } from '@angular/core';
import {HeaderConfigAction} from "../../../store/header-config/header-config.action";
import {Store} from "@ngxs/store";
import {HeaderConfigModel} from "../../../models/header-config-model";
import {ActivatedRoute, Router} from "@angular/router";
import {FavoriteAction, FavoriteClear} from "../../../store/favorite/favorite.action";
import {FavoriteStateModel} from "../../../models/favorite-state.model";
import {FormBuilder, FormControl} from "@angular/forms";

@Component({
  selector: 'app-bank-accounts',
  templateUrl: './bank-accounts.component.html',
  styleUrls: ['./bank-accounts.component.scss']
})
export class BankAccountsComponent implements OnInit {
  bankListHidden = true;
  bankTableHidden = false;
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
      image: 'assets/img/bank-account/garanti.png',
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
      image: 'assets/img/bank-account/yapikredi.png',
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
      image: 'assets/img/bank-account/vakifbank.png',
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
      image: 'assets/img/bank-account/teb.png',
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
      image: 'assets/img/bank-account/ziraatbankasi.png',
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
      image: 'assets/img/bank-account/ingbank.png',
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
      image: 'assets/img/bank-account/aktifbank.png',
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
      image: 'assets/img/bank-account/albaraka.png',
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
      image: 'assets/img/bank-account/burganbank.png',
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
      image: 'assets/img/bank-account/denizbank.png',
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
      image: 'assets/img/bank-account/emlak-bank.png',
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
      image: 'assets/img/bank-account/fibabanka.png',
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
      image: 'assets/img/bank-account/finansbank.png',
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
      image: 'assets/img/bank-account/halkbankasi.png',
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
      image: 'assets/img/bank-account/hsbc.png',
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
      image: 'assets/img/bank-account/isbankasi.png',
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
      image: 'assets/img/bank-account/odeabank.png',
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
      image: 'assets/img/bank-account/icbc.png',
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
      image: 'assets/img/bank-account/turkiyefinans.png',
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
      image: 'assets/img/bank-account/abank.png',
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
    }
  ];

  bankFilterForm = this.fb.group({
    companies: new FormControl<any>([]),
    branches: new FormControl<any>([]),
    accountTypes: new FormControl<any>([]),
    balance: new FormControl<any>([]),
    currencyUnit: new FormControl<any>([]),
  });

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
    this.bankAccountRoutingController();
  }

  ngOnInit(): void {
  }

 bankAccountRoutingController(): void {
   this.activatedRoute.queryParams.subscribe((params: any) => {
     if (params.id) {
       this.store.dispatch(new FavoriteClear());
     } else {
       this.favoriteModel = {
         name: 'favorite-list.bank-accounts',
         url: this.router.url
       }
       this.store.dispatch(new FavoriteAction(this.favoriteModel));
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

  onSubmit() {
    console.log(this.bankFilterForm.value);
  }
}
