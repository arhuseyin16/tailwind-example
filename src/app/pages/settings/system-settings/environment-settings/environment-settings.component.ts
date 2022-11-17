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
  passwordTimerValue: number = 0;
  passwordFormatterValue = (value: number): string => `${value} gün`;
  passwordParserValue = (value: string): string => value.replace('gün ', '');
  userTimerValue: number = 0;
  userFormatterValue = (value: number): string => `${value} gün`;
  userParserValue = (value: string): string => value.replace('gün ', '');
  blockTimerValue: number = 0;
  blockFormatterValue = (value: number): string => `${value} dk`;
  blockParserValue = (value: string): string => value.replace('dk ', '');
  loginRadio: any;
  terminalRadio: any;
  userRadio: any;

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

  save() {

  }
}
