import { Component, OnInit } from '@angular/core';
import {Store} from "@ngxs/store";
import {HeaderConfigAction, HeaderConfigClear} from "../../../store/header-config/header-config.action";
import {HeaderConfigModel} from "../../../models/header-config-model";
import {FavoriteStateModel} from "../../../models/favorite-state.model";
import {Router} from "@angular/router";
import {FavoriteAction} from "../../../store/favorite/favorite.action";

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.scss']
})
export class ExchangeComponent implements OnInit {
  headerConfig: Array<HeaderConfigModel> = new Array<HeaderConfigModel>();
  favoriteModel: FavoriteStateModel = new FavoriteStateModel();

  constructor(private store: Store,
              private router: Router,
  ) {
    const dataObj = {
      title: 'Döviz Kurları',
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
