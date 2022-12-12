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
