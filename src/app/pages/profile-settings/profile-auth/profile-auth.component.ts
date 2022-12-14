import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-auth',
  templateUrl: './profile-auth.component.html',
  styleUrls: ['./profile-auth.component.scss']
})
export class ProfileAuthComponent implements OnInit {
  head1 = true;
  head2 = false;
  head3 = false;
  head4 = false;
  head5 = false;

  constructor() { }

  ngOnInit(): void {
  }

  stepClick(active: string) {
    if (active === '1') {
      this.head1 = true;
      this.head2 = false;
      this.head3 = false;
      this.head4 = false;
      this.head5 = false;
    } else if (active === '2') {
      this.head2 = true;
      this.head1 = false;
      this.head3 = false;
      this.head4 = false;
      this.head5 = false;
    } else if (active === '3') {
      this.head3 = true;
      this.head1 = false;
      this.head2 = false;
      this.head4 = false;
      this.head5 = false;
    } else if (active === '4') {
      this.head4 = true;
      this.head1 = false;
      this.head3 = false;
      this.head2 = false;
      this.head5 = false;
    } else if (active === '5') {
      this.head5 = true;
      this.head4 = false;
      this.head1 = false;
      this.head3 = false;
      this.head2 = false;
    }
  }

}
