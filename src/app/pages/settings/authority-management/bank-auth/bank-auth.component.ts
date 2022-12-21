import {Component, EventEmitter, OnInit} from '@angular/core';
import {HeaderConfigAction} from "../../../../store/header-config/header-config.action";
import {FavoriteAction} from "../../../../store/favorite/favorite.action";
import {HeaderConfigModel} from "../../../../models/header-config-model";
import {FavoriteStateModel} from "../../../../models/favorite-state.model";
import {Store} from "@ngxs/store";
import {ActivatedRoute, Router} from "@angular/router";
import {FormGroup} from "@angular/forms";
import {NotificationService} from "../../../../service/notification/notification.service";

@Component({
  selector: 'app-bank-auth',
  templateUrl: './bank-auth.component.html',
  styleUrls: ['./bank-auth.component.scss']
})
export class BankAuthComponent implements OnInit {
  headerConfig: Array<HeaderConfigModel> = new Array<HeaderConfigModel>();
  favoriteModel: FavoriteStateModel = new FavoriteStateModel();
  head1 = true;
  head2 = false;
  head3 = false;
  head4 = false;
  type: any = undefined;
  headerName: any = undefined;

  userList = [
    {id: 1, name: 'Hüseyin'},
    {id: 2, name: 'Ömer'},
    {id: 3, name: 'Büşra'},
    {id: 4, name: 'Vesile'},
  ];

  groupList = [
    {id: 1, name: 'Front'},
    {id: 2, name: 'IT'},
    {id: 3, name: 'UX'}
  ];

  currencyUnitList = [
    {id: 1, name: 'TRY'},
    {id: 2, name: 'USD'},
    {id: 3, name: 'EUR'},
    {id: 4, name: 'GBP'},
    {id: 5, name: 'CHF'},
    {id: 6, name: 'RUB'},
    {id: 7, name: 'AUD'},
    {id: 8, name: 'JPY'},
    {id: 9, name: 'AED'}
  ];

  companiesList = [
    {id: 1, name: 'Firma-1'},
    {id: 2, name: 'Firma-2'},
    {id: 3, name: 'Firma-3'},
    {id: 4, name: 'Firma-4'},
    {id: 5, name: 'Firma-5'},
    {id: 6, name: 'Firma-6'}
  ];

  banksList = [
    {id: 1, name: 'bank-1'},
    {id: 2, name: 'bank-2'},
    {id: 3, name: 'bank-3'},
    {id: 4, name: 'bank-4'},
    {id: 5, name: 'bank-5'},
    {id: 6, name: 'bank-6'}
  ];

  branchesList = [
    {id: 1, name: 'Şube-1'},
    {id: 2, name: 'Şube-2'},
    {id: 3, name: 'Şube-3'},
    {id: 4, name: 'Şube-4'},
  ];

  accountTypesList = [
    {id: 1, name: 'Hesap Türü-1'},
    {id: 2, name: 'Hesap Türü-2'},
    {id: 3, name: 'Hesap Türü-3'},
    {id: 4, name: 'Hesap Türü-4'},
  ];

  accountList = [
    {id: 1, name: 'Hesap-1'},
    {id: 2, name: 'Hesap-2'},
    {id: 3, name: 'Hesap-3'},
    {id: 4, name: 'Hesap-4'},
  ];

  willBorrowList = [
    {id: 1, name: 'Diğer-1'},
    {id: 2, name: 'Diğer-2'},
    {id: 3, name: 'Diğer-3'},
    {id: 4, name: 'Diğer-4'},
  ]

  //auth
  saveAuthClickEvent = new EventEmitter();
  selectedAuthForm?: FormGroup;
  //accountActivities
  saveAccountClickEvent = new EventEmitter();
  selectedAccountForm?: FormGroup;
  //pos
  savePosClickEvent = new EventEmitter();
  selectedPosForm?: FormGroup;
  //dbs
  saveDbsClickEvent = new EventEmitter();
  selectedDbsForm?: FormGroup;
  //payment
  savePaymentClickEvent = new EventEmitter();
  selectedPaymentForm?: FormGroup;

  constructor(
              private store: Store,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private notificationService: NotificationService) {
    const dataObj = {
      title: 'Banka Erişim Yetkileri',
    }
    this.headerConfig.push({
      component: () => import('../../../../shared/component/header-title/header-title.component').then(it => it.HeaderTitleComponent),
      dataObj: dataObj
    });
    this.store.dispatch(new HeaderConfigAction(this.headerConfig));
    this.favoriteModel = {
      name: 'sidebar.bankAccessAuth',
      url: this.router.url
    }
    this.store.dispatch(new FavoriteAction(this.favoriteModel));
    this.urlActivatedParams();
  }

  ngOnInit(): void {
  }

  urlActivatedParams() {
    this.activatedRoute.queryParams.pipe().subscribe((params: any) => {
      if (params) {
       this.type = params.type;
       this.headerName = params.name;
      }
    });
  }

  stepClick(active: string) {
    if (active === '1') {
      this.head1 = true;
      this.head2 = false;
      this.head3 = false;
      this.head4 = false;
    } else if (active === '2') {
      this.head2 = true;
      this.head1 = false;
      this.head3 = false;
      this.head4 = false;
    } else if (active === '3') {
      this.head3 = true;
      this.head1 = false;
      this.head2 = false;
      this.head4 = false;
    } else if (active === '4') {
      this.head4 = true;
      this.head1 = false;
      this.head3 = false;
      this.head2 = false;
    }
  }

  save() {
    this.type && this.headerName ? this.saveAuthClickEvent.emit(false) : this.saveAuthClickEvent.emit(true);
    this.saveAccountClickEvent.emit(true);
    this.savePosClickEvent.emit(true);
    this.saveDbsClickEvent.emit(true);
    this.savePaymentClickEvent.emit(true);
    if (this.selectedAuthForm === undefined || this.selectedAuthForm?.status === 'VALID') {
      console.log(this.selectedAuthForm);
      console.log(this.selectedAccountForm);
      console.log(this.selectedPosForm);
      console.log(this.selectedDbsForm);
      console.log(this.selectedPaymentForm);
    } else {
      this.notificationService.warning('Uyarı', 'Yetkili Seçiniz!');
    }
  }
}
