import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-account-activities-filter-share',
  templateUrl: './account-activities-filter-share.component.html',
  styleUrls: ['./account-activities-filter-share.component.scss']
})
export class AccountActivitiesFilterShareComponent implements OnInit {

  filterShareFormGroup = new FormGroup({
    users: new FormControl([], {initialValueIsDefault: true, nonNullable: true}),
    groups: new FormControl([], {initialValueIsDefault: true, nonNullable: true}),
  })

  ngOnInit(): void {
  }

}
