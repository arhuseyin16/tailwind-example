import {Component, OnInit, ViewEncapsulation} from '@angular/core';

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

  constructor() {
    this.avatar = this.name.split('')[0].toUpperCase() +  this.surname.split('')[0].toUpperCase();
  }

  ngOnInit(): void {
  }

}
