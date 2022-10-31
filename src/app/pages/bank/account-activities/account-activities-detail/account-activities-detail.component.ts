import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Store} from "@ngxs/store";
import {HeaderConfigAction, HeaderConfigClear} from "../../../../store/header-config/header-config.action";
import {FavoriteClear} from "../../../../store/favorite/favorite.action";
import {HeaderConfigModel} from "../../../../models/header-config-model";

@Component({
  selector: 'app-account-activities-detail',
  templateUrl: './account-activities-detail.component.html',
  styleUrls: ['./account-activities-detail.component.scss']
})
export class AccountActivitiesDetailComponent implements OnInit {
  bankDetail = {
    id: 1,
    image: 'assets/img/bank-account/bank.png',
    color: '#dc4333',
  };

  headerConfig: Array<HeaderConfigModel> = new Array<HeaderConfigModel>();

  constructor(
    private router: Router,
    private store: Store
  ) {
    const dataObj = {
      backComponentName: 'Hesap Hareketleri',
      backUrl: 'ui/bank/account-activities',
      detailTitle: 'Akbank'
    }
    this.headerConfig.push({
      component: () => import('../../../../shared/component/header-detail-title/header-detail-title.component').then(it => it.HeaderDetailTitleComponent),
      dataObj: dataObj
    });
    this.store.dispatch(new HeaderConfigAction(this.headerConfig));
    this.store.dispatch(new FavoriteClear()); // detay sayfalarında favorite state clear yapılcak. Switch gözükmemesi için
  }

  ngOnInit(): void {
  }

}
