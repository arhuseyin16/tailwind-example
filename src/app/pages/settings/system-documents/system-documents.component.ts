import { Component, OnInit } from '@angular/core';
import {HeaderConfigModel} from "../../../models/header-config-model";
import {FavoriteStateModel} from "../../../models/favorite-state.model";
import {Store} from "@ngxs/store";
import {Router} from "@angular/router";
import {HeaderConfigAction} from "../../../store/header-config/header-config.action";
import {FavoriteAction} from "../../../store/favorite/favorite.action";
import {FormBuilder, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-system-documents',
  templateUrl: './system-documents.component.html',
  styleUrls: ['./system-documents.component.scss']
})
export class SystemDocumentsComponent implements OnInit {
  headerConfig: Array<HeaderConfigModel> = new Array<HeaderConfigModel>();
  favoriteModel: FavoriteStateModel = new FavoriteStateModel();
  visible: boolean = false;
  createdForm = this.fb.group({
    keyword: new FormControl('', Validators.required),
    module: new FormControl('', Validators.required),
    subCategory: new FormControl('', Validators.required)
  });

  constructor(private store: Store,
              private fb: FormBuilder,
              private router: Router) {
    const dataObj = {
      title: 'Sistem Dokümanları',
    }
    this.headerConfig.push({
      component: () => import('../../../shared/component/header-title/header-title.component').then(it => it.HeaderTitleComponent),
      dataObj: dataObj
    });
    this.store.dispatch(new HeaderConfigAction(this.headerConfig));
    this.favoriteModel = {
      name: 'sidebar.system-documents',
      url: this.router.url
    }
    this.store.dispatch(new FavoriteAction(this.favoriteModel));
  }

  ngOnInit(): void {
  }

  clear() {
    this.createdForm.reset();
  }
}
