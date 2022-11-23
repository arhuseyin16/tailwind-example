import { Component, OnInit } from '@angular/core';
import {HeaderConfigModel} from "../../../../models/header-config-model";
import {FavoriteStateModel} from "../../../../models/favorite-state.model";
import {Store} from "@ngxs/store";
import {Router} from "@angular/router";
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {HeaderConfigAction} from "../../../../store/header-config/header-config.action";
import {FavoriteAction} from "../../../../store/favorite/favorite.action";
import {EMAIL_REGEX} from "../../../../shared/constants/regex-constanst";
import {NotificationService} from "../../../../service/notification/notification.service";

@Component({
  selector: 'app-erp-api-settings',
  templateUrl: './erp-api-settings.component.html',
  styleUrls: ['./erp-api-settings.component.scss']
})
export class ErpApiSettingsComponent implements OnInit {
  headerConfig: Array<HeaderConfigModel> = new Array<HeaderConfigModel>();
  favoriteModel: FavoriteStateModel = new FavoriteStateModel();
  createdForm = this.fb.group({
    url: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(private store: Store,
              private router: Router,
              private notificationService: NotificationService,
              private fb: FormBuilder) {
    const dataObj = {
      title: 'ERP Api Ayarları',
    }
    this.headerConfig.push({
      component: () => import('../../../../shared/component/header-title/header-title.component').then(it => it.HeaderTitleComponent),
      dataObj: dataObj
    });
    this.store.dispatch(new HeaderConfigAction(this.headerConfig));
    this.favoriteModel = {
      name: 'sidebar.erp-api-settings',
      url: this.router.url
    }
    this.store.dispatch(new FavoriteAction(this.favoriteModel));
  }

  ngOnInit(): void {
  }

  save() {
    if (this.createdForm.status === 'VALID') {

    } else {
      this.notificationService.warning('Uyarı', 'Zorunlu Alanlar Mevcut!');
    }

  }

}
