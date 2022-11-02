import { Component, inject, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-account-activities-list-filter',
  templateUrl: './account-activities-list-filter.component.html',
  styleUrls: ['./account-activities-list-filter.component.scss']
})
export class AccountActivitiesListFilterComponent implements OnInit {

  visible: boolean = false;
  visibleDrawer = false;
  @Input() favoriteFilters: any;

  currencyUnits = new Array<any>(
    {id: 1, name: 'İngiliz Sterlini', status: false},
    {id: 2, name: 'Türk Lirası', status: false},
    {id: 3, name: 'Amerikan Doları', status: false},
    {id: 4, name: 'isviçre Frangı', status: false},
    {id: 5, name: 'Avustralya Doları', status: false},
    {id: 6, name: 'Japon Yeni', status: false},
  );

  willBorrows = new Array<any>(
    {id: 1, name: 'Giriş Alacak (A)', status: false},
    {id: 2, name: 'Çıkış Borç (B)', status: false},
    );
  formBuilder = inject(FormBuilder);

  filterFormGroup = new FormGroup({
    favoriteFilter: new FormControl('', {initialValueIsDefault: true, nonNullable: true}),
    startDate: new FormControl('', {initialValueIsDefault: true, nonNullable: true}),
    startDateHour: new FormControl(new Date().toString(), {initialValueIsDefault: true, nonNullable: true}),
    endDate: new FormControl('', {initialValueIsDefault: true, nonNullable: true}),
    endDateHour: new FormControl(new Date().toString(), {initialValueIsDefault: true, nonNullable: true}),
    currencyUnits: new FormControl([], {initialValueIsDefault: true, nonNullable: true}),
    willBorrows: new FormControl([], {initialValueIsDefault: true, nonNullable: true}),
    companies: new FormControl([], {initialValueIsDefault: true, nonNullable: true}),
  });

  ngOnInit(): void {
  }

  open(): void {
    this.visibleDrawer = true;
  }

  close(): void {
    this.visibleDrawer = false;
  }

}
