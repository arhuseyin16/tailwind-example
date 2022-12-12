import { Component, OnInit } from '@angular/core';
import {FavoriteStateModel} from "../../models/favorite-state.model";
import {Store} from "@ngxs/store";
import {Router} from "@angular/router";
import {FavoriteAction} from "../../store/favorite/favorite.action";

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.scss']
})
export class ProfileSettingsComponent implements OnInit {
  favoriteModel: FavoriteStateModel = new FavoriteStateModel();

  constructor(private store: Store,
              private router: Router) {
    this.favoriteModel = {
      name: 'profile.account',
      url: this.router.url
    }
    this.store.dispatch(new FavoriteAction(this.favoriteModel));
  }

  ngOnInit(): void {
  }

}
