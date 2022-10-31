import { Component, OnInit } from '@angular/core';
import {Store} from "@ngxs/store";
import {Router} from "@angular/router";
import {FavoriteStateModel} from "../../../../models/favorite-state.model";
import {HeaderConfigClear} from "../../../../store/header-config/header-config.action";
import {FavoriteAction} from "../../../../store/favorite/favorite.action";

@Component({
  selector: 'app-account-activities',
  templateUrl: './account-activities-list.component.html',
  styleUrls: ['./account-activities-list.component.scss']
})
export class AccountActivitiesListComponent implements OnInit {
  favoriteModel: FavoriteStateModel = new FavoriteStateModel();

  constructor(
    private router: Router,
    private store: Store
  ) {
    this.store.dispatch(new HeaderConfigClear()); // header sol taraf boş headerConfig state Clear methot'u çagırmamız yeterli
    this.favoriteModel = {
      name: 'favorite-list.account-activities',
      url: this.router.url
    }
    this.store.dispatch(new FavoriteAction(this.favoriteModel));
  }

  ngOnInit(): void {
  }

  detail() {
    this.router.navigate(['/bank/account-activities/detail'], {queryParams: {id: 1}});
  }
}
