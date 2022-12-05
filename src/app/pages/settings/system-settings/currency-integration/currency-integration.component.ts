import { Component, OnInit } from '@angular/core';
import {HeaderConfigModel} from "../../../../models/header-config-model";
import {FavoriteStateModel} from "../../../../models/favorite-state.model";
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {Store} from "@ngxs/store";
import {Router} from "@angular/router";
import {NotificationService} from "../../../../service/notification/notification.service";
import {HeaderConfigAction} from "../../../../store/header-config/header-config.action";
import {FavoriteAction} from "../../../../store/favorite/favorite.action";

@Component({
  selector: 'app-currency-integration',
  templateUrl: './currency-integration.component.html',
  styleUrls: ['./currency-integration.component.scss']
})
export class CurrencyIntegrationComponent implements OnInit {
  headerConfig: Array<HeaderConfigModel> = new Array<HeaderConfigModel>();
  favoriteModel: FavoriteStateModel = new FavoriteStateModel();
  createdForm = this.fb.group({
    url: new FormControl('', Validators.required),
    controlTime: new FormControl('', Validators.required),
    autoSync: new FormControl(false, Validators.required),
  });

  constructor(private store: Store,
              private router: Router,
              private notificationService: NotificationService,
              private fb: FormBuilder) {
    const dataObj = {
      title: 'Döviz Entegrasyon Tanımları',
    }
    this.headerConfig.push({
      component: () => import('../../../../shared/component/header-title/header-title.component').then(it => it.HeaderTitleComponent),
      dataObj: dataObj
    });
    this.store.dispatch(new HeaderConfigAction(this.headerConfig));
    this.favoriteModel = {
      name: 'sidebar.currency-integration-definition',
      url: this.router.url
    }
    this.store.dispatch(new FavoriteAction(this.favoriteModel));
  }

  ngOnInit(): void {
  }

  save() {
    console.log(this.createdForm);
    if (this.createdForm.status === 'VALID') {

    } else {
      this.notificationService.warning('Uyarı', 'Zorunlu Alanlar Mevcut!');
    }

  }

}
