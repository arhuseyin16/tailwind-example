import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {HeaderConfigModel} from "../../../../models/header-config-model";
import {FavoriteStateModel} from "../../../../models/favorite-state.model";
import {Store} from "@ngxs/store";
import {Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";
import {HeaderConfigAction} from "../../../../store/header-config/header-config.action";
import {FavoriteAction} from "../../../../store/favorite/favorite.action";

@Component({
  selector: 'app-environment-settings',
  templateUrl: './environment-settings.component.html',
  styleUrls: ['./environment-settings.component.scss']
})
export class EnvironmentSettingsComponent implements OnInit {
  headerConfig: Array<HeaderConfigModel> = new Array<HeaderConfigModel>();
  favoriteModel: FavoriteStateModel = new FavoriteStateModel();

  constructor(private store: Store,
              private router: Router,
              private fb: FormBuilder,
              private cdr: ChangeDetectorRef) {
    const dataObj = {
      title: 'Ortam Ayarları',
    }
    this.headerConfig.push({
      component: () => import('../../../../shared/component/header-title/header-title.component').then(it => it.HeaderTitleComponent),
      dataObj: dataObj
    });
    this.store.dispatch(new HeaderConfigAction(this.headerConfig));
    this.favoriteModel = {
      name: 'sidebar.environment-settings',
      url: this.router.url
    }
    this.store.dispatch(new FavoriteAction(this.favoriteModel));
  }

  ngOnInit(): void {
  }

}
