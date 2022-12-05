import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Store} from "@ngxs/store";
import {Router} from "@angular/router";
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {HeaderConfigModel} from "../../../../models/header-config-model";
import {FavoriteStateModel} from "../../../../models/favorite-state.model";
import {HeaderConfigAction} from "../../../../store/header-config/header-config.action";
import {FavoriteAction} from "../../../../store/favorite/favorite.action";

@Component({
  selector: 'app-eho-signer',
  templateUrl: './eho-signer.component.html',
  styleUrls: ['./eho-signer.component.scss']
})
export class EhoSignerComponent implements OnInit {
  headerConfig: Array<HeaderConfigModel> = new Array<HeaderConfigModel>();
  favoriteModel: FavoriteStateModel = new FavoriteStateModel();
  createdForm = this.fb.group({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    apiUrl: new FormControl(''),
  });

  constructor(private store: Store,
              private router: Router,
              private fb: FormBuilder,
              private cdr: ChangeDetectorRef) {
    const dataObj = {
      title: 'EHO Signer',
    }
    this.headerConfig.push({
      component: () => import('../../../../shared/component/header-title/header-title.component').then(it => it.HeaderTitleComponent),
      dataObj: dataObj
    });
    this.store.dispatch(new HeaderConfigAction(this.headerConfig));
    this.favoriteModel = {
      name: 'sidebar.eho-signer',
      url: this.router.url
    }
    this.store.dispatch(new FavoriteAction(this.favoriteModel));
  }

  ngOnInit(): void {
  }

  save() {
    console.log(this.createdForm);
  }
}
