import { Component, OnInit } from '@angular/core';
import {FavoriteStateModel} from "../../models/favorite-state.model";
import {Store} from "@ngxs/store";
import {Router} from "@angular/router";
import {FavoriteAction} from "../../store/favorite/favorite.action";
import {FormBuilder, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.scss']
})
export class ProfileSettingsComponent implements OnInit {
  favoriteModel: FavoriteStateModel = new FavoriteStateModel();
  editingHidden = false;
  passwordEditing = false;
  profileForm = {
    companyCode: '12345',
    userName: 'huseyin.ar',
    title: 'Frontend Developer',
    gsmNo: '5426987452',
    email: 'huseyin.ar@netbt.com',
    lastEntry: '18.12.2022',
  };
  passwordForm = this.fb.group({
    oldPassword: new FormControl('', Validators.required),
    newPassword: new FormControl('', Validators.required),
    repeatNewPassword: new FormControl('', Validators.required),
  });

  constructor(private store: Store,
              private fb: FormBuilder,
              private router: Router) {
    this.favoriteModel = {
      name: 'profile.account',
      url: this.router.url
    }
    this.store.dispatch(new FavoriteAction(this.favoriteModel));
  }

  ngOnInit(): void {
  }

  editingCancel() {
    this.editingHidden = false;
  }

  PasswordEditingCancel() {
    this.passwordEditing = false;
    this.passwordForm.reset();
  }
}
