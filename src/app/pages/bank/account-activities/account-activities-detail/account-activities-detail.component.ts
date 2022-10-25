import { Component, OnInit } from '@angular/core';
import {FavoriteStateModel} from "../../../../models/favorite-state.model";
import {Router} from "@angular/router";
import {Store} from "@ngxs/store";
import {HeaderConfigClear} from "../../../../store/header-config/header-config.action";
import {FavoriteAction} from "../../../../store/favorite/favorite.action";

@Component({
  selector: 'app-account-activities-detail',
  templateUrl: './account-activities-detail.component.html',
  styleUrls: ['./account-activities-detail.component.scss']
})
export class AccountActivitiesDetailComponent implements OnInit {
  favoriteModel: FavoriteStateModel = new FavoriteStateModel();
  bankDetail = {
    id: 12121,
    image: 'assets/img/bank-account/bank.png',
    color: '#dc4333',
  };

  constructor(
    private router: Router,
    private store: Store
  ) {
    this.store.dispatch(new HeaderConfigClear()); // header sol taraf boş headerConfig state Clear methot'u çagırmamız yeterli
    this.favoriteModel = {
      name: 'favorite-list.account-activities-detail',
      url: this.router.url
    }
    this.store.dispatch(new FavoriteAction(this.favoriteModel));
  }

  ngOnInit(): void {
  }

}
