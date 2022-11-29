import { Component, OnInit } from '@angular/core';
import {Store} from "@ngxs/store";
import {Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";
import {HeaderConfigModel} from "../../../../models/header-config-model";
import {FavoriteStateModel} from "../../../../models/favorite-state.model";
import {HeaderConfigAction} from "../../../../store/header-config/header-config.action";
import {FavoriteAction} from "../../../../store/favorite/favorite.action";

@Component({
  selector: 'app-ldap',
  templateUrl: './ldap.component.html',
  styleUrls: ['./ldap.component.scss']
})
export class LdapComponent implements OnInit {
  headerConfig: Array<HeaderConfigModel> = new Array<HeaderConfigModel>();
  favoriteModel: FavoriteStateModel = new FavoriteStateModel();

  sslRadio: any;
  workTimerValue: number = 0;
  workFormatterValue = (value: number): string => `${value} dk`;
  workParserValue = (value: string): string => value.replace('dk ', '');
  hidden = true;

  constructor(private store: Store,
              private router: Router,
              private fb: FormBuilder) {
    const dataObj = {
      title: 'LDAP Senkronizasyon Tanımları',
    }
    this.headerConfig.push({
      component: () => import('../../../../shared/component/header-title/header-title.component').then(it => it.HeaderTitleComponent),
      dataObj: dataObj
    });
    this.store.dispatch(new HeaderConfigAction(this.headerConfig));
    this.favoriteModel = {
      name: 'sidebar.LDAP-user-Sync',
      url: this.router.url
    }
    this.store.dispatch(new FavoriteAction(this.favoriteModel));
  }

  ngOnInit(): void {
  }

  save() {

  }

  manually() {
    this.hidden = false;
  }
}
