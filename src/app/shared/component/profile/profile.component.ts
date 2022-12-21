import {Component, OnInit} from '@angular/core';
import {Store} from "@ngxs/store";
import {HeaderDropdownActionClear} from "../../../store/header-dropdown-valid/header-dropdown.action";
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  modal = false;
  name: string = "Hüseyin";
  surname: string = "Ar";
  avatar: string = "";

  constructor(
    private store: Store,
    private router: Router
  ) {
    this.avatar = this.name.split('')[0].toUpperCase() +  this.surname.split('')[0].toUpperCase();
  }

  ngOnInit(): void {
  }

  profileClick() {
    this.store.dispatch(new HeaderDropdownActionClear());
  }

  goToSetting() {
    this.router.navigate(['ui/setting/exchange']);
  }

  goToProfile() {
    this.router.navigate(['profile']);
  }
}
