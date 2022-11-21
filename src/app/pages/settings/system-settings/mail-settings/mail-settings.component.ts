import { Component, OnInit } from '@angular/core';
import {Store} from "@ngxs/store";
import {Router} from "@angular/router";
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {HeaderConfigModel} from "../../../../models/header-config-model";
import {FavoriteStateModel} from "../../../../models/favorite-state.model";
import {HeaderConfigAction} from "../../../../store/header-config/header-config.action";
import {FavoriteAction} from "../../../../store/favorite/favorite.action";
import {EMAIL_REGEX} from "../../../../shared/constants/regex-constanst";

@Component({
  selector: 'app-mail-settings',
  templateUrl: './mail-settings.component.html',
  styleUrls: ['./mail-settings.component.scss']
})
export class MailSettingsComponent implements OnInit {
  headerConfig: Array<HeaderConfigModel> = new Array<HeaderConfigModel>();
  favoriteModel: FavoriteStateModel = new FavoriteStateModel();
  createdForm = this.fb.group({
    mail: new FormControl('', [Validators.required, Validators.pattern(EMAIL_REGEX)]),
  });

  constructor(private store: Store,
              private router: Router,
              private fb: FormBuilder) {
    const dataObj = {
      title: 'Sistem Mail Ayarları',
    }
    this.headerConfig.push({
      component: () => import('../../../../shared/component/header-title/header-title.component').then(it => it.HeaderTitleComponent),
      dataObj: dataObj
    });
    this.store.dispatch(new HeaderConfigAction(this.headerConfig));
    this.favoriteModel = {
      name: 'sidebar.system-mail-settings',
      url: this.router.url
    }
    this.store.dispatch(new FavoriteAction(this.favoriteModel));
  }

  ngOnInit(): void {
  }

  save() {

  }
}
