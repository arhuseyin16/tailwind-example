import { Component, EventEmitter, inject, OnInit } from '@angular/core';
import { HeaderConfigAction } from "../../../../../store/header-config/header-config.action";
import { FavoriteAction } from "../../../../../store/favorite/favorite.action";
import { Store } from "@ngxs/store";
import { Router } from "@angular/router";
import { HeaderConfigModel } from "../../../../../models/header-config-model";
import { FavoriteStateModel } from "../../../../../models/favorite-state.model";

@Component({
  selector: 'app-schema-crud',
  templateUrl: './schema-crud.component.html',
  styleUrls: ['./schema-crud.component.scss']
})
export class SchemaCrudComponent implements OnInit {

  store = inject(Store);
  router = inject(Router);

  headerConfig: Array<HeaderConfigModel> = new Array<HeaderConfigModel>();
  favoriteModel: FavoriteStateModel = new FavoriteStateModel();
  changeSchemeList = new EventEmitter();
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

  createScheme(createScheme: any) {
    this.changeSchemeList.emit(createScheme);
  }
}
