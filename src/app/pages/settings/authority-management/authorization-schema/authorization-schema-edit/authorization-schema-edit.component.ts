import { Component, inject, OnInit } from '@angular/core';
import { HeaderConfigAction } from "../../../../../store/header-config/header-config.action";
import { FavoriteAction } from "../../../../../store/favorite/favorite.action";
import { Store } from "@ngxs/store";
import { Router } from "@angular/router";
import { HeaderConfigModel } from "../../../../../models/header-config-model";
import { FavoriteStateModel } from "../../../../../models/favorite-state.model";
import { AuthorityModuleEnum } from "../authority-module.enum";

@Component({
  selector: 'app-authorization-schema-edit',
  templateUrl: './authorization-schema-edit.component.html',
  styleUrls: ['./authorization-schema-edit.component.scss']
})
export class AuthorizationSchemaEditComponent implements OnInit {

  store = inject(Store);
  router = inject(Router);

  headerConfig: Array<HeaderConfigModel> = new Array<HeaderConfigModel>();
  favoriteModel: FavoriteStateModel = new FavoriteStateModel();
  AuthorityModuleEnum = AuthorityModuleEnum;
  tabs = [
    {
      name: 'auth-scheme.bank-transactions',
      key: AuthorityModuleEnum.BANK_TRANSACTIONS,
      order: 1
    },
    {
      name: 'auth-scheme.pos-transactions',
      key: AuthorityModuleEnum.POS_TRANSACTIONS,
      order: 2
    },
    {
      name: 'auth-scheme.e-payment',
      key: AuthorityModuleEnum.E_PAYMENT,
      order: 3
    },
    {
      name: 'auth-scheme.online-dbs',
      key: AuthorityModuleEnum.ONLINE_DBS,
      order: 4
    }
  ];
  constructor() {
    const dataObj = {
      title: 'İşlem Yetkilendirme',
    }
    this.headerConfig.push({
      component: () => import('../../../../../shared/component/header-title/header-title.component').then(it => it.HeaderTitleComponent),
      dataObj: dataObj
    });
    this.store.dispatch(new HeaderConfigAction(this.headerConfig));
    this.favoriteModel = {
      name: 'sidebar.authScheme',
      url: this.router.url
    }
    this.store.dispatch(new FavoriteAction(this.favoriteModel));
  }

  ngOnInit(): void {
  }

}
