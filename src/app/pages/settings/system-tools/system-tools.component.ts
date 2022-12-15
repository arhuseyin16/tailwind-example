import { Component, inject, OnInit } from '@angular/core';
import { HeaderConfigAction } from "../../../store/header-config/header-config.action";
import { FavoriteAction } from "../../../store/favorite/favorite.action";
import { Store } from "@ngxs/store";
import { HeaderConfigModel } from "../../../models/header-config-model";
import { FavoriteStateModel } from "../../../models/favorite-state.model";
import { Router } from "@angular/router";

@Component({
  selector: 'app-system-tools',
  templateUrl: './system-tools.component.html',
  styleUrls: ['./system-tools.component.scss']
})
export class SystemToolsComponent implements OnInit {

  store = inject(Store);
  router = inject(Router);

  headerConfig: Array<HeaderConfigModel> = new Array<HeaderConfigModel>();
  favoriteModel: FavoriteStateModel = new FavoriteStateModel();

  constructor() {
    const dataObj = {
      title: 'Sistem Araçları',
    }
    this.headerConfig.push({
      component: () => import('../../../shared/component/header-title/header-title.component').then(it => it.HeaderTitleComponent),
      dataObj: dataObj
    });
    this.store.dispatch(new HeaderConfigAction(this.headerConfig));
    this.favoriteModel = {
      name: 'sidebar.exchange',
      url: this.router.url
    }
    this.store.dispatch(new FavoriteAction(this.favoriteModel));
  }

  ngOnInit(): void {
  }

}
