import {
  Component,
  inject,
  Input,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewChild
} from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import {
  AccountActivitiesFilterShareComponent
} from "../account-activities-filter-share/account-activities-filter-share.component";
import { Subject } from "rxjs";
import { DrawerService } from "../../../../../service/drawer/drawer.service";
import { ModalService } from "../../../../../service/modal-service/modal.service";

@Component({
  selector: 'app-account-activities-list-filter',
  templateUrl: './account-activities-list-filter.component.html',
  styleUrls: ['./account-activities-list-filter.component.scss'],
})
export class AccountActivitiesListFilterComponent implements OnInit, OnDestroy {

  @Input() favoriteFilters = [];

  isValueChanged = false;

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
  @ViewChild('filterShareComponentTitle') filterShareComponentTitle?: TemplateRef<any>;
  @ViewChild('filterShareComponentFooter') filterShareComponentFooter?: TemplateRef<any>;

  filterFormGroup = new FormGroup({
    favoriteFilter: new FormControl('', {initialValueIsDefault: true, nonNullable: true}),
    startDate: new FormControl('', {initialValueIsDefault: true, nonNullable: true}),
    startDateHour: new FormControl(null, {initialValueIsDefault: true, nonNullable: true}),
    endDate: new FormControl('', {initialValueIsDefault: true, nonNullable: true}),
    endDateHour: new FormControl(null, {initialValueIsDefault: true, nonNullable: true}),
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
    amountRangeStart: new FormControl('', {initialValueIsDefault: true, nonNullable: true}),
    amountRangeEnd: new FormControl('', {initialValueIsDefault: true, nonNullable: true}),
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

  modalService = inject(ModalService);
  drawerService = inject(DrawerService);
  private readonly destroyer$ = new Subject<void>();

  ngOnInit(): void {
    this.filterFormGroup.valueChanges.subscribe(() => {
      this.isValueChanged = true
    });
  }

  ngOnDestroy(): void {
    this.destroyer$.next();
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

  closeFilterDrawer() {
   const filterItemsCount = this.filterFormValueCounter(this.filterFormGroup.value);
    this.drawerService.close({filterItemsCount});
  }

  clearAllFilter() {
    this.filterFormGroup.reset();
  }

  inquireFilter() {
    console.log("inquire completed");
  }

  shareFilter() {
    const t = this.modalService.create({
      nzTitle: this.filterShareComponentTitle,
      nzContent: AccountActivitiesFilterShareComponent,
      nzBodyStyle: {'padding': '30px 54px 0 54px'},
      nzFooter: this.filterShareComponentFooter,
      nzWidth: 586,
    });
  }

  saveFilter() {
    console.log("save filter completed");
  }

  filterFormValueCounter(filterFormGroupObject: any) {
    let filterItems = [];
    for (let key in filterFormGroupObject) {

      if (typeof filterFormGroupObject[key] === 'string') {
        if (filterFormGroupObject[key]) {
          filterItems.push(filterFormGroupObject[key]);
        }
      } else if (Array.isArray(filterFormGroupObject[key])) {
        if (filterFormGroupObject[key].length > 0) {
          filterItems.push(filterFormGroupObject[key]);
        }
      } else if (filterFormGroupObject[key]) {
        filterItems.push(filterFormGroupObject[key]);
      }
    }
    return filterItems.length;
  }
}
