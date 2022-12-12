import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-account-activities',
  templateUrl: './account-activities.component.html',
  styleUrls: ['./account-activities.component.scss']
})
export class AccountActivitiesComponent implements OnInit {
  accountActivities = this.fb.group({
    currencyUnit: new FormControl(''),
    companies: new FormControl(''),
    banks: new FormControl(''),
    branches: new FormControl(''),
    accountTypes: new FormControl(''),
    accounts: new FormControl(''),
    willBorrow: new FormControl(''),
    viewBalance: new FormControl(false),
  });

  @Input() saveButtonClickEvent = new EventEmitter();
  @Output() accountFormEvent = new EventEmitter()
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.saveButtonClickEvent.subscribe(res => {
      if (res) {
        this.accountFormEvent.emit(this.accountActivities);
      }
    });
  }
}
