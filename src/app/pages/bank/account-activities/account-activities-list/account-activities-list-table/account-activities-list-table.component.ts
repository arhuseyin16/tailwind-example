import { Component, OnInit } from '@angular/core';
import { NzTableFilterFn, NzTableFilterList, NzTableSortFn, NzTableSortOrder } from "ng-zorro-antd/table";
import { filter } from "rxjs";
import { CdkDragDrop, CdkDragStart, CdkDropList, moveItemInArray } from "@angular/cdk/drag-drop";
import { T } from "@angular/cdk/keycodes";

interface ItemData {
  id: number;
  date: string;
  firm: string;
  bank: string;
  branch: string;
  accountType: string;
  accountNumber: string;
  amount: number;
  balance: string;
  endDate: string;
  currencyType: string;
  willBorrow: string;

}

interface ColumnItem {
  name: string;
  key: string;
  sortOrder: NzTableSortOrder | null;
  sortFn: NzTableSortFn<ItemData> | null;
  listOfFilter: Array<TableFilterList> | null;
  filterFn?: NzTableFilterFn<ItemData> | null;
  filterVisible: boolean;
  showFilterField: boolean;
  filterValue: string;
  index?: number;
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

  listOfSelection = [
    {
      text: 'Select All Row',
      onSelect: () => {
        this.onAllChecked(true);
      }
    },
    {
      text: 'Select Odd Row',
      onSelect: () => {
        this.listOfCurrentPageData.forEach((data, index) => this.updateCheckedSet(data.id, index % 2 !== 0));
        this.refreshCheckedStatus();
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
  listOfDisplayData: ItemData[] = [];
  listOfData: ItemData[] = [];
  listOfAddColumn: any[] = [];
  setOfCheckedId = new Set<number>();
  filterOfCheckedItem = new Array<TableFilterList>();

  previousIndex: number = 0;

  ngOnInit(): void {
    this.listOfDisplayData = new Array(200).fill(0).map((_, index) => ({
      id: index,
      date: '07.02.2022 00:00',
      endDate: '07.02.2022 00:00',
      firm: `Firma - ${index}`,
      bank: `Bank - ${index}`,
      branch: `Şube - ${index}`,
      accountType: `Hesap Türü - ${index}`,
      accountNumber: `Hesap Numarası - ${index}`,
      amount: index,
      balance: index.toString(),
      currencyType: `Bakiye Türü - ${index}`,
      willBorrow: `Bakiye Türü - ${index}`,
    }));
    this.listOfData = [...this.listOfDisplayData];
    this.listOfAddColumn = [
      {
        key: 'endDate',
        label: 'Bitiş Tarihi',
        value: 'Bitiş Tarihi',
        checked: false
      },
      {
        key: 'currencyType',
        label: 'Para Birimi',
        value: 'Para Birimi',
        checked: false
      },
      {
        key: 'willBorrow',
        label: 'Borç/Alacak',
        value: 'Borç/Alacak',
        checked: false
      },
      {
        key: 'firm',
        label: 'Firma',
        value: 'Firma',
        checked: false
      },
      {
        key: 'bank',
        label: 'Banka',
        value: 'Banka',
        checked: false
      },
      {
        key: 'branch',
        label: 'Şube',
        value: 'Şube',
        checked: false
      },
      {
        key: 'accountType',
        label: 'Hesap Türü',
        value: 'Hesap Türü',
        checked: false
      },
      {
        key: 'account',
        label: 'Hesap',
        value: 'Hesap',
        checked: false
      },
      {
        key: 'accountNumber',
        label: 'Hesap Numarası',
        value: 'Hesap Numarası',
        checked: false
      },
      {
        key: 'amount',
        label: 'Tutar',
        value: 'Tutar',
        checked: false
      },
      {
        key: 'balance',
        label: 'Bakiye',
        value: 'Bakiye',
        checked: false
      }
    ]
    this.listOfColumns = [
      {
        key: 'date',
        name: 'Tarih',
        sortOrder: null,
        sortFn: (a: ItemData, b: ItemData) => a.date.localeCompare(b.date),
        listOfFilter: [],
        showFilterField: false,
        filterVisible: false,
        filterValue: '',
        index: 0,
      },
      {
        key: 'firm',
        name: 'Firma',
        sortOrder: null,
        sortFn: (a: ItemData, b: ItemData) => a.firm.localeCompare(b.firm),
        listOfFilter: this.getColumnsByColumnName('firm'),
        showFilterField: true,
        filterVisible: false,
        filterValue: '',
        index: 1,
      },
      {
        key: 'bank',
        name: 'Banka',
        sortOrder: null,
        sortFn: (a: ItemData, b: ItemData) => a.bank.localeCompare(b.bank),
        listOfFilter: this.getColumnsByColumnName('bank'),
        showFilterField: true,
        filterVisible: false,
        filterValue: '',
        index: 2,
      },
      {
        key: 'branch',
        name: 'Şube',
        sortOrder: null,
        sortFn: (a: ItemData, b: ItemData) => a.branch.localeCompare(b.branch),
        listOfFilter: this.getColumnsByColumnName('branch'),
        showFilterField: true,
        filterVisible: false,
        filterValue: '',
        index: 3,
      },
      {
        key: 'accountType',
        name: 'Hesap Türü',
        sortOrder: null,
        sortFn: (a: ItemData, b: ItemData) => a.accountType.localeCompare(b.accountType),
        listOfFilter: this.getColumnsByColumnName('accountType'),
        showFilterField: true,
        filterVisible: false,
        filterValue: '',
        index: 4,
      },
      {
        key: 'accountNumber',
        name: 'Hesap Numarası',
        sortOrder: null,
        sortFn: (a: ItemData, b: ItemData) => a.accountNumber.localeCompare(b.accountNumber),
        listOfFilter: this.getColumnsByColumnName('accountNumber'),
        showFilterField: true,
        filterVisible: false,
        filterValue: '',
        index: 5,
      },
      {
        key: 'amount',
        name: 'Tutar',
        sortOrder: null,
        sortFn: (a: ItemData, b: ItemData) => a.amount.toString().localeCompare(b.amount.toString()),
        listOfFilter: this.getColumnsByColumnName('amount'),
        showFilterField: true,
        filterVisible: false,
        filterValue: '',
        index: 6,
      },
      {
        key: 'balance',
        name: 'Bakiye',
        sortOrder: null,
        sortFn: (a: ItemData, b: ItemData) => a.balance.localeCompare(b.balance),
        listOfFilter: this.getColumnsByColumnName('balance'),
        showFilterField: true,
        filterVisible: false,
        filterValue: '',
        index: 7,
      }
    ];
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

  resetFilter(column: ColumnItem): void {
    column.listOfFilter?.forEach(item => item.checked = false);
    this.filterOfCheckedItem = this.filterOfCheckedItem.filter(item => item.key !== column.key);
    column.filterValue = '';
    this.filterChange(column);
    this.generateListOfDisplayData();
  }

  getColumnsByColumnName(key: string): Array<TableFilterList> {
    let filterList: Array<TableFilterList> = [];
    this.listOfData.forEach(data => {
      filterList.push({
        label: data[key as keyof typeof data].toString(),
        value: data[key as keyof typeof data],
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
    filterList = column.filterValue ? this.getColumnsByColumnName(column.key)?.filter((item) => item.label.toLowerCase().indexOf(column.filterValue.toLowerCase()) !== -1) : this.getColumnsByColumnName(column.key);

    // Filtre sonucuna göre checked alanı true olanlar listeye setleniyor.
    filterList.forEach(item => {
      this.filterOfCheckedItem.forEach(filterItem => {
        if (item.key === filterItem.key) {
          if (item.value === filterItem.value) {
            item.checked = filterItem.checked;
          }
        }
      });
    });
    this.listOfColumns.forEach(column => column.listOfFilter = filterList);
  }

  filterCheckedChange(item: TableFilterList, columnItem: ColumnItem) {
    // Filtre içerisindeki seçilen alanların check edilme durumu kontrol ediliyor.
    if (item.checked) {
      this.filterOfCheckedItem.push({key: columnItem.key, value: item.value, checked: item.checked, label: item.value})
    } else {
      this.filterOfCheckedItem = this.filterOfCheckedItem.filter((f) => f.value !== item.value);
    }

    // checked değerine göre ekranki liste güncelleniyor.
    this.generateListOfDisplayData();
  }

  generateListOfDisplayData(column?: ColumnItem) {
    if (this.filterOfCheckedItem.length > 0) {
      this.listOfDisplayData = this.listOfData.filter(data => this.filterOfCheckedItem.some(item => data[item.key as keyof typeof data] === item.value));
    } else {
      this.listOfDisplayData = this.listOfData;
    }
  }

  dragStarted(event: CdkDragStart, index: number ) {
    this.previousIndex = index;
  }

  dropListDropped(event: any, index: number) {
    if (event) {
      moveItemInArray(this.listOfColumns, this.previousIndex, index);
      this.listOfColumns = [...this.listOfColumns];
      this.setDisplayedColumns();
    }
  }

  setDisplayedColumns() {
    this.listOfColumns.forEach(( col, index) => {
      col.index = index;
      this.listOfColumns[index] = col;
    });
  }

  selectedColumnCheckedChange(column: ColumnItem) {
    console.log(column);
  }

  saveAddColumn() {

  }
}
