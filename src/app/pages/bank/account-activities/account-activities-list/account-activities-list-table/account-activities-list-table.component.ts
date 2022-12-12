import { Component, EventEmitter, inject, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { NzTableFilterFn, NzTableSortFn, NzTableSortOrder } from "ng-zorro-antd/table";
import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";
import { ModalService } from "../../../../../service/modal/modal.service";
import { PrintReceiptModalComponent } from "../print-receipt-modal/print-receipt-modal.component";
import { SelectDeleteRecordModalComponent } from "../select-delete-record-modal/select-delete-record-modal.component";
import { EditUserDescriptionComponent } from "../edit-user-description/edit-user-description.component";
import { Router } from "@angular/router";
import { Store } from "@ngxs/store";
import {
  DeleteFilterItemAction,
  SetFilterItemAction
} from "../../../../../store/filter/filter.action";
import { KeyLabelValueType } from "../../../../../models/shared/key-label-value.type";
import { FilterState } from "../../../../../store/filter/filter.state";
import { PAGE_SIZE } from "../../../../../shared/constants/table-page-size";

interface ItemData {
  id: any;
  date: ItemDataChild;
  firm: ItemDataChild;
  bank: ItemDataChild;
  branch: ItemDataChild;
  accountType: ItemDataChild;
  accountNumber: ItemDataChild;
  amount: ItemDataChild;
  balance: ItemDataChild;
  endDate: ItemDataChild;
  currencyType: ItemDataChild;
  willBorrow: ItemDataChild;
  account: ItemDataChild;
}

interface ItemDataChild extends KeyLabelValueType {
  checked: boolean;
}

interface ColumnItem {
  name: string;
  key: any;
  sortOrder: NzTableSortOrder | null;
  sortFn: NzTableSortFn<ItemData> | null;
  listOfFilter: Array<TableFilterList> | null;
  filterFn?: NzTableFilterFn<ItemData> | null;
  filterVisible: boolean;
  showFilterField: boolean;
  filterValue: string;
  index?: number;
  width?: string;
  checked?: boolean;
}

interface TableFilterList {
  checked: boolean;
  label: string;
  value: any;
  key: string;
}

@Component({
  selector: 'app-account-activities-list-table',
  templateUrl: './account-activities-list-table.component.html',
  styleUrls: ['./account-activities-list-table.component.scss']
})
export class AccountActivitiesListTableComponent implements OnInit {

  @Input() filterClearChange?: EventEmitter<KeyLabelValueType>; // Parent componentte listenen filtreleri sildiğimizde çalışır.
  @Output() rangeAndTotalValueChange = new  EventEmitter<TemplateRef<any>>;
  @ViewChild(TemplateRef) rangeTemplate?: TemplateRef<any>;
  listOfSelection = [
    {
      text: 'Seçili Kayıtları Sil',
      onSelect: () => {
        this.openSelectDeleteRecordModal();
      }
    },
    {
      text: 'Select Even Row',
      onSelect: () => {
        this.listOfCurrentPageData.forEach((data, index) => this.updateCheckedSet(data.id, index % 2 === 0));
        this.refreshCheckedStatus();
      }
    }
  ];
  listOfColumns: ColumnItem[] = [];
  checked = false;
  indeterminate = false;
  listOfCurrentPageData: readonly ItemData[] = [];
  listOfDisplayData: any[] | ItemData[] = [];
  listOfData: any[] | ItemData[] = [];
  listOfAddColumn: ColumnItem[] = [];
  setOfCheckedId = new Set<number>();
  filterOfCheckedItems = new Array<TableFilterList>();

  modalService = inject(ModalService);
  router = inject(Router);
  store = inject(Store);
  filterItemCount = this.store.select(FilterState.getFilterItemsCount);
  PAGE_SIZE = PAGE_SIZE;

  ngOnInit(): void {
    this.listOfDisplayData = new Array(2698).fill(0).map((_, index) => ({
      id: index,
      date: {
        value: '07.02.2022 00:00',
        checked: true
      },
      endDate: {
        value: '07.02.2022 00:00',
        checked: false
      },
      firm: {
        value: `Firma - ${index}`,
        checked: true
      },
      bank: {
        value: `Bank - ${index}`,
        checked: true
      },
      branch: {
        value: `Şube - ${index}`,
        checked: true
      },
      accountType: {
        value: `Hesap Türü - ${index}`,
        checked: true
      },
      accountNumber: {
        value: `Hesap Numarası - ${index}`,
        checked: true
      },
      amount: {
        value: index.toString(),
        checked: true
      },
      balance: {
        value: index.toString(),
        checked: true
      },
      currencyType: {
        value: `Para Birimi - ${index}`,
        checked: false
      },
      willBorrow: {
        value: `Borç/Alacak - ${index}`,
        checked: false
      },
      account: {
        value: `Hesap - ${index}`,
        checked: false
      },
    })) as any;
    this.listOfData = [...this.listOfDisplayData];
    this.listOfAddColumn = [
      {
        key: 'date',
        name: 'account-activities-list-filter.table.date',
        sortOrder: null,
        sortFn: (a: ItemData, b: ItemData) => a.date.value.localeCompare(b.date.value),
        listOfFilter: [],
        showFilterField: false,
        filterVisible: false,
        filterValue: '',
        index: 0,
        width: '170px',
        checked: true
      },
      {
        key: 'firm',
        name: 'account-activities-list-filter.table.firm',
        sortOrder: null,
        sortFn: (a: ItemData, b: ItemData) => a.firm.value.localeCompare(b.firm.value),
        listOfFilter: this.getColumnsByColumnKey('firm'),
        showFilterField: true,
        filterVisible: false,
        filterValue: '',
        index: 1,
        width: '150px',
        checked: true
      },
      {
        key: 'bank',
        name: 'account-activities-list-filter.table.bank',
        sortOrder: null,
        sortFn: (a: ItemData, b: ItemData) => a.bank.value.localeCompare(b.bank.value),
        listOfFilter: this.getColumnsByColumnKey('bank'),
        showFilterField: true,
        filterVisible: false,
        filterValue: '',
        index: 2,
        width: '140px',
        checked: true
      },
      {
        key: 'branch',
        name: 'account-activities-list-filter.table.branch',
        sortOrder: null,
        sortFn: (a: ItemData, b: ItemData) => a.branch.value.localeCompare(b.branch.value),
        listOfFilter: this.getColumnsByColumnKey('branch'),
        showFilterField: true,
        filterVisible: false,
        filterValue: '',
        index: 3,
        width: '215px',
        checked: true
      },
      {
        key: 'accountType',
        name: 'account-activities-list-filter.table.accountType',
        sortOrder: null,
        sortFn: (a: ItemData, b: ItemData) => a.accountType.value.localeCompare(b.accountType.value),
        listOfFilter: this.getColumnsByColumnKey('accountType'),
        showFilterField: true,
        filterVisible: false,
        filterValue: '',
        index: 4,
        width: '195px',
        checked: true
      },
      {
        key: 'accountNumber',
        name: 'account-activities-list-filter.table.accountNumber',
        sortOrder: null,
        sortFn: (a: ItemData, b: ItemData) => a.accountNumber.value.localeCompare(b.accountNumber.value),
        listOfFilter: this.getColumnsByColumnKey('accountNumber'),
        showFilterField: true,
        filterVisible: false,
        filterValue: '',
        index: 5,
        width: '230px',
        checked: true
      },
      {
        key: 'amount',
        name: 'account-activities-list-filter.table.amount',
        sortOrder: null,
        sortFn: (a: ItemData, b: ItemData) => a.amount.value.localeCompare(b.amount.value),
        listOfFilter: this.getColumnsByColumnKey('amount'),
        showFilterField: true,
        filterVisible: false,
        filterValue: '',
        index: 6,
        width: '150px',
        checked: true
      },
      {
        key: 'balance',
        name: 'account-activities-list-filter.table.balance',
        sortOrder: null,
        sortFn: (a: ItemData, b: ItemData) => a.balance.value.localeCompare(b.balance.value),
        listOfFilter: this.getColumnsByColumnKey('balance'),
        showFilterField: true,
        filterVisible: false,
        filterValue: '',
        index: 7,
        width: '150px',
        checked: true
      },
      {
        key: 'endDate',
        name: 'account-activities-list-filter.table.endDate',
        sortOrder: null,
        sortFn: (a: ItemData, b: ItemData) => a.endDate.value.localeCompare(b.endDate.value),
        listOfFilter: [],
        showFilterField: false,
        filterVisible: false,
        filterValue: '',
        index: 8,
        width: '170px',
        checked: false
      },
      {
        key: 'currencyType',
        name: 'account-activities-list-filter.table.currencyUnit',
        sortOrder: null,
        sortFn: (a: ItemData, b: ItemData) => a.currencyType.value.localeCompare(b.currencyType.value),
        listOfFilter: this.getColumnsByColumnKey('currencyType'),
        showFilterField: true,
        filterVisible: false,
        filterValue: '',
        index: 9,
        width: '180px',
        checked: false
      },
      {
        key: 'willBorrow',
        name: 'account-activities-list-filter.table.willBorrow',
        sortOrder: null,
        sortFn: (a: ItemData, b: ItemData) => a.willBorrow.value.localeCompare(b.willBorrow.value),
        listOfFilter: this.getColumnsByColumnKey('willBorrow'),
        showFilterField: true,
        filterVisible: false,
        filterValue: '',
        index: 10,
        width: '200px',
        checked: false
      },
      {
        key: 'account',
        name: 'account-activities-list-filter.table.account',
        sortOrder: null,
        sortFn: (a: ItemData, b: ItemData) => a.account.value.localeCompare(b.account.value),
        listOfFilter: this.getColumnsByColumnKey('account'),
        showFilterField: true,
        filterVisible: false,
        filterValue: '',
        index: 11,
        width: '150px',
        checked: false
      },
    ]
    this.listOfColumns = this.listOfAddColumn.filter(column => column.checked === true);
    this.parentFilterClearChange();
  }

  parentFilterClearChange() {
    this.filterClearChange?.subscribe(item => {
      this.listOfColumns.forEach(column => {
        if (item) {
          if (column.key === item.key) {
            column.listOfFilter?.forEach(filterItem => {
              if (filterItem.value === item.value) {
                filterItem.checked = false;
                this.filterOfCheckedItems = this.filterOfCheckedItems.filter((f) => f.value !== item.value);
              }
            });
          }
        } else {
          column.listOfFilter?.forEach(filterItem => {
            filterItem.checked = false;
            this.filterOfCheckedItems = [];
          });
        }
      });
      this.generateListOfDisplayData();
    });
  }

  updateCheckedSet(id: number, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id);
    } else {
      this.setOfCheckedId.delete(id);
    }
  }

  onItemChecked(id: number, checked: boolean): void {
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
  }

  onAllChecked(value: boolean): void {
    this.listOfCurrentPageData.forEach(item => this.updateCheckedSet(item.id, value));
    this.refreshCheckedStatus();
  }

  onCurrentPageDataChange($event: readonly ItemData[]): void {
    this.listOfCurrentPageData = $event;
    this.refreshCheckedStatus();
  }

  refreshCheckedStatus(): void {
    this.checked = this.listOfCurrentPageData.every(item => this.setOfCheckedId.has(item.id));
    this.indeterminate = this.listOfCurrentPageData.some(item => this.setOfCheckedId.has(item.id)) && !this.checked;
  }

  getColumnsByColumnKey(key: string): Array<TableFilterList> {
    let filterList: Array<TableFilterList> = [];
    this.listOfData.forEach((data) => {
      filterList.push({
        label: data[key as keyof typeof data].value.toString(),
        value: data[key as keyof typeof data].value,
        checked: false,
        key
      });
    });
    return filterList;
  }

  trackByName(_: number, item: ColumnItem): string {
    return item.name;
  }

  filterChange(column: ColumnItem) {
    let filterList: TableFilterList[] | null = [];

    // Kolon bazlı, filtre içerisinde ki search inputuna girilen değerlere göre filtre yapılıyor.
    filterList = column.filterValue ? this.getColumnsByColumnKey(column.key)?.filter((item) => item.label.toLowerCase().indexOf(column.filterValue.toLowerCase()) !== -1) : this.getColumnsByColumnKey(column.key);
    // Filtre sonucuna göre checked alanı true olanlar listeye setleniyor.
    filterList.forEach(item => {
      this.filterOfCheckedItems.forEach(filterItem => {
        if (item.key === filterItem.key) {
          if (item.value === filterItem.value) {
            item.checked = filterItem.checked;
          }
        }
      });
    });
    this.listOfColumns.forEach(c => c.key === column.key ? c.listOfFilter = filterList : c.listOfFilter);
  }

  filterCheckedChange(item: TableFilterList, columnItem: ColumnItem) {
    // Filtre içerisindeki seçilen alanların check edilme durumu kontrol ediliyor.
    const filterItem: KeyLabelValueType = {
      key: columnItem.key,
      value: item.value,
      label: item.label
    }
    if (item.checked) {
      this.filterOfCheckedItems.push({key: columnItem.key, value: item.value, checked: item.checked, label: item.value})
      this.store.dispatch(new SetFilterItemAction(filterItem));
    } else {
      this.filterOfCheckedItems = this.filterOfCheckedItems.filter((f) => f.value !== item.value);
      this.store.dispatch(new DeleteFilterItemAction(columnItem.key, filterItem));
    }
    // checked değerine göre ekranki liste güncelleniyor.
    this.generateListOfDisplayData();
  }

  generateListOfDisplayData(column?: ColumnItem) {
    if (this.filterOfCheckedItems.length > 0) {
      this.listOfDisplayData = this.listOfData.filter(data => this.filterOfCheckedItems.some(item => data[item.key as keyof typeof data].value === item.value));
    } else {
      this.listOfDisplayData = this.listOfData;
    }
  }

  selectedColumnCheckedChange(column: ColumnItem) {
    column.checked && column.index ? this.listOfColumns.splice(column.index, 0, column) : this.listOfColumns = this.listOfColumns.filter(col => col.key !== column.key);
    this.listOfData.forEach(data => {
      if (data[column.key as keyof typeof data]) {
        data[column.key as keyof typeof data].checked = column.checked;
      }
    });
    this.listOfDisplayData = [...this.listOfData];
  }

  saveAddColumn() {
  }

  openPrintReceiptModal() {
    const modalRef = this.modalService.create({
      nzContent: PrintReceiptModalComponent,
      nzClosable: false,
      nzFooter: null,
      nzBodyStyle: {'padding': '0', 'border-radius': '10px', 'background': '#fff'},
      nzWidth: '650px'
    });

    modalRef.afterClose.subscribe(result => console.log(result));
  }

  openSelectDeleteRecordModal() {
    const modalRef = this.modalService.create({
      nzContent: SelectDeleteRecordModalComponent,
      nzClosable: false,
      nzFooter: null,
      nzBodyStyle: {'padding': '0', 'border-radius': '10px', 'background': '#fff'},
      nzWidth: '650px'
    });

    modalRef.afterClose.subscribe(result => console.log(result));
  }

  openEditUserDescription(id: number) {
    const modalRef = this.modalService.create({
      nzContent: EditUserDescriptionComponent,
      nzClosable: false,
      nzFooter: null,
      nzBodyStyle: {'padding': '0', 'border-radius': '10px', 'background': '#fff'},
      nzWidth: '650px',
      nzComponentParams: {processId: id}
    });

    modalRef.afterClose.subscribe(result => console.log(result));
  }

  accountActivityDetail(id: number) {
    this.router.navigateByUrl(`/ui/bank/account-activities/detail?id=${id}`)
  }

  drop(event: CdkDragDrop<string[]>): void {
    moveItemInArray(
      this.listOfColumns,
      event.previousIndex,
      event.currentIndex
    );
  }

  stopPropagation (event: MouseEvent) {
    event.stopPropagation();
    console.log('stopPropagation')
  }

  pageSizeChange(size: number) {
    console.log(size);
  }

  pageIndexChange(index: number) {
    console.log(index);
    this.rangeAndTotalValueChange?.emit(this.rangeTemplate);
  }
}
