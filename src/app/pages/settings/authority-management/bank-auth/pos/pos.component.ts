import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl} from "@angular/forms";

@Component({
  selector: 'app-pos',
  templateUrl: './pos.component.html',
  styleUrls: ['./pos.component.scss']
})
export class PosComponent implements OnInit {
  posForm = this.fb.group({
    currencyUnit: new FormControl<any>([]),
    companies: new FormControl<any>([]),
    banks: new FormControl<any>([]),
    branches: new FormControl<any>([]),
    accountTypes: new FormControl<any>([]),
    accounts: new FormControl<any>([]),
    willBorrow: new FormControl<any>([]),
  });

  @Input() saveButtonClickEvent = new EventEmitter();
  @Input() currencyUnitOptions: any[] = [];
  @Input() companiesOptions: any[] = [];
  @Input() banksOptions: any[] = [];
  @Input() branchesOptions: any[] = [];
  @Input() accountTypesOptions: any[] = [];
  @Input() accountOptions: any[] = [];
  @Input() willBorrowOptions: any[] = [];
  @Output() posFormEvent = new EventEmitter()
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.saveButtonClickEvent.subscribe(res => {
      if (res) {
        this.posFormEvent.emit(this.posForm);
      }
    });
  }
}
