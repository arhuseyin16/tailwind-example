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

  companies = new Array<any>(
    {id: 1, name: 'Koç', status: false},
    {id: 2, name: 'Sabancı', status: false},
    {id: 3, name: 'Ülker', status: false},
    {id: 4, name: 'Eti', status: false},
    {id: 5, name: 'Trendyol', status: false},
    {id: 6, name: 'Hepsi Burada', status: false},
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
    banks: new FormControl([], {initialValueIsDefault: true, nonNullable: true}),
    branches: new FormControl([], {initialValueIsDefault: true, nonNullable: true}),
    accountTypes: new FormControl([], {initialValueIsDefault: true, nonNullable: true}),
    accounts: new FormControl([], {initialValueIsDefault: true, nonNullable: true}),
    transactionTypes: new FormControl([], {initialValueIsDefault: true, nonNullable: true}),
    documentGroups: new FormControl([], {initialValueIsDefault: true, nonNullable: true}),
    documentTypes: new FormControl([], {initialValueIsDefault: true, nonNullable: true}),
    targetDocumentTypes: new FormControl([], {initialValueIsDefault: true, nonNullable: true}),
    typeConversion: new FormControl([], {initialValueIsDefault: true, nonNullable: true}),
    conversionType: new FormControl([], {initialValueIsDefault: true, nonNullable: true}),
    amountRangeStart: new FormControl(0, {initialValueIsDefault: true, nonNullable: true}),
    amountRangeEnd: new FormControl(0, {initialValueIsDefault: true, nonNullable: true}),
    accountNumber: new FormControl('', {initialValueIsDefault: true, nonNullable: true}),
    taxOrTckn: new FormControl('', {initialValueIsDefault: true, nonNullable: true}),
    ibanNumber: new FormControl('', {initialValueIsDefault: true, nonNullable: true}),
    referenceNumber: new FormControl('', {initialValueIsDefault: true, nonNullable: true}),
    receiptNumber: new FormControl('', {initialValueIsDefault: true, nonNullable: true}),
    description: new FormControl('', {initialValueIsDefault: true, nonNullable: true}),
    descriptionSecond: new FormControl('', {initialValueIsDefault: true, nonNullable: true}),
    customerDescription: new FormControl('', {initialValueIsDefault: true, nonNullable: true}),
    valorStartDate: new FormControl('', {initialValueIsDefault: true, nonNullable: true}),
    valorEndDate: new FormControl('', {initialValueIsDefault: true, nonNullable: true}),
    creationTimeframeStartDate: new FormControl('', {initialValueIsDefault: true, nonNullable: true}),
    creationTimeframeEndDate: new FormControl('', {initialValueIsDefault: true, nonNullable: true}),
    updateTimeframeStartDate: new FormControl('', {initialValueIsDefault: true, nonNullable: true}),
    updateTimeframeEndDate: new FormControl('', {initialValueIsDefault: true, nonNullable: true}),
    erpStatus: new FormControl('', {initialValueIsDefault: true, nonNullable: true}),
    erpTimeframeStartDate: new FormControl('', {initialValueIsDefault: true, nonNullable: true}),
    erpTimeframeEndDate: new FormControl('', {initialValueIsDefault: true, nonNullable: true}),
    erpProcessingUpdateTimeframeStartDate: new FormControl('', {initialValueIsDefault: true, nonNullable: true}),
    erpProcessingUpdateTimeframeEndDate: new FormControl('', {initialValueIsDefault: true, nonNullable: true}),
    userUpdatingErpProcessing: new FormControl('', {initialValueIsDefault: true, nonNullable: true}),
    additionalFieldFirst: new FormControl('', {initialValueIsDefault: true, nonNullable: true}),
    additionalFieldSecond: new FormControl('', {initialValueIsDefault: true, nonNullable: true}),
    additionalFieldThird: new FormControl('', {initialValueIsDefault: true, nonNullable: true}),
    additionalFieldFourth: new FormControl('', {initialValueIsDefault: true, nonNullable: true}),
    additionalFieldFifth: new FormControl('', {initialValueIsDefault: true, nonNullable: true}),
    additionalFieldSixth: new FormControl('', {initialValueIsDefault: true, nonNullable: true}),
  });

  ngOnInit(): void {
  }

  open(): void {
    this.visibleDrawer = true;
  }

  close(): void {
    this.visibleDrawer = false;
  }

  companiesChange(companies: Array<any>) {
    console.log(companies);
  }

  banksChange(banks: Array<any>) {
    console.log(banks);
  }

  branchesChange(branches: Array<any>) {
    console.log(branches);
  }

  accountTypesChange(accountTypes: Array<any>) {
    console.log(accountTypes);
  }

  accountsChange(accounts: Array<any>) {
    console.log(accounts);
  }
}
