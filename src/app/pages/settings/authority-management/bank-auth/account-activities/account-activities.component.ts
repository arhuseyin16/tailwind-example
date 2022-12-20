import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-account-activities',
  templateUrl: './account-activities.component.html',
  styleUrls: ['./account-activities.component.scss']
})
export class AccountActivitiesComponent implements OnInit {
  accountActivities = this.fb.group({
    currencyUnit: new FormControl<any>([]),
    companies: new FormControl<any>([]),
    banks: new FormControl<any>([]),
    branches: new FormControl<any>([]),
    accountTypes: new FormControl<any>([]),
    accounts: new FormControl<any>([]),
    willBorrow: new FormControl<any>([]),
    viewBalance: new FormControl(false),
  });

  @Input() saveButtonClickEvent = new EventEmitter();
  @Input() currencyUnitOptions: any[] = [];
  @Input() companiesOptions: any[] = [];
  @Input() banksOptions: any[] = [];
  @Input() branchesOptions: any[] = [];
  @Input() accountTypesOptions: any[] = [];
  @Input() accountOptions: any[] = [];
  @Input() willBorrowOptions: any[] = [];
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
