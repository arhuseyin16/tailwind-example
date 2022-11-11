import { Component, OnInit } from '@angular/core';
import { NzTableFilterFn, NzTableFilterList, NzTableSortFn, NzTableSortOrder } from "ng-zorro-antd/table";

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
  sortOrder: NzTableSortOrder | null;
  sortFn: NzTableSortFn<ItemData> | null;
  listOfFilter: Array<TableFilterList> | null;
  filterFn: NzTableFilterFn<ItemData> | null;
  filterDisplay: boolean;
  filterValue: string;
  key: string;
}

interface TableFilterList {
  checked: boolean;
  label: string;
  value: any;
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
  listOfColumns: readonly ColumnItem[] = [];
  checked = false;
  indeterminate = false;
  listOfCurrentPageData: readonly ItemData[] = [];
  listOfDisplayData: readonly ItemData[] = [];
  listOfData: readonly ItemData[] = [];
  setOfCheckedId = new Set<number>();
  setFilterOfCheckedItem = new Set<any>();

  searchValue = '';
  visible = false;

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
    this.listOfColumns = [
      {
        name: 'Tarih',
        sortOrder: null,
        sortFn: (a: ItemData, b: ItemData) => a.date.localeCompare(b.date),
        listOfFilter: [],
        filterFn: null,
        filterDisplay: false,
        filterValue: '',
        key: 'date',
      },
      {
        name: 'Firma',
        sortOrder: null,
        sortFn: (a: ItemData, b: ItemData) => a.firm.localeCompare(b.firm),
        listOfFilter: this.getColumnsByColumnName('firm'),
        filterFn: (firm: string, item: ItemData) => item.firm.indexOf(firm) !== -1,
        filterDisplay: false,
        filterValue: '',
        key: 'firm',
      },
      {
        name: 'Banka',
        sortOrder: null,
        sortFn: (a: ItemData, b: ItemData) => a.bank.localeCompare(b.bank),
        listOfFilter: this.getColumnsByColumnName('bank'),
        filterFn: (bank: string, item: ItemData) => item.bank.indexOf(bank) !== -1,
        filterDisplay: false,
        filterValue: '',
        key: 'bank',
      },
      {
        name: 'Şube',
        sortOrder: null,
        sortFn: (a: ItemData, b: ItemData) => a.branch.localeCompare(b.branch),
        listOfFilter: this.getColumnsByColumnName('branch'),
        filterFn: (branch: string, item: ItemData) => item.branch.indexOf(branch) !== -1,
        filterDisplay: false,
        filterValue: '',
        key: 'branch',
      },
      {
        name: 'Hesap Türü',
        sortOrder: null,
        sortFn: (a: ItemData, b: ItemData) => a.accountType.localeCompare(b.accountType),
        listOfFilter: this.getColumnsByColumnName('accountType'),
        filterFn: (accountType: string, item: ItemData) => item.accountType.indexOf(accountType) !== -1,
        filterDisplay: false,
        filterValue: '',
        key: 'accountType',
      },
      {
        name: 'Hesap Numarası',
        sortOrder: null,
        sortFn: (a: ItemData, b: ItemData) => a.accountNumber.localeCompare(b.accountNumber),
        listOfFilter: this.getColumnsByColumnName('accountNumber'),
        filterFn: (accountNumber: string, item: ItemData) => item.accountNumber.indexOf(accountNumber) !== -1,
        filterDisplay: false,
        filterValue: '',
        key: 'accountNumber',
      },
      {
        name: 'Tutar',
        sortOrder: null,
        sortFn: (a: ItemData, b: ItemData) => a.amount.toString().localeCompare(b.amount.toString()),
        listOfFilter: this.getColumnsByColumnName('amount'),
        filterFn: (amount: string, item: ItemData) => item.amount.toString().indexOf(amount.toString()) !== -1,
        filterDisplay: false,
        filterValue: '',
        key: 'amount',
      },
      {
        name: 'Bakiye',
        sortOrder: null,
        sortFn: (a: ItemData, b: ItemData) => a.balance.localeCompare(b.balance),
        listOfFilter: this.getColumnsByColumnName('balance'),
        filterFn: (balance: string, item: ItemData) => item.balance.indexOf(balance) !== -1,
        filterDisplay: false,
        filterValue: '',
        key: 'balance',
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

  reset(): void {
    this.searchValue = '';
    this.search();
  }

  search(column?: ColumnItem): void {
    this.visible = false;
    const listOfFilter = column?.listOfFilter?.filter((item: TableFilterList) => item.label.indexOf(this.searchValue) !== -1);
    //this.listOffilterDisplayData = this.listOfData.filter((item: ItemData) => item.name.indexOf(this.searchValue) !== -1);
  }

  getColumnsByColumnName(key: string): Array<TableFilterList> {
    let filterList: Array<TableFilterList> = [];
    this.listOfData.forEach(data => {
      filterList.push({
        label: data[key as keyof typeof data].toString(),
        value: data[key as keyof typeof data],
        checked: false
      });
    });
    return filterList;
  }

  trackByName(_: number, item: ColumnItem): string {
    return item.name;
  }

  filterChange(column: ColumnItem) {
    let arr: TableFilterList[] | null = [];
    arr = column.filterValue ? this.getColumnsByColumnName(column.key)?.filter((item) => item.label.indexOf(column.filterValue) !== -1) : this.getColumnsByColumnName(column.key);
    arr.forEach(a => {
      this.setFilterOfCheckedItem.forEach(s => {
        if (a.value === s.value) {
          a.checked = s.checked;
        }
      });
    });
    this.listOfColumns.forEach(c => c.listOfFilter = arr);
  }

  filterCheckedChange(item: TableFilterList, columnItem: ColumnItem) {
    if (item.checked) {
      this.setFilterOfCheckedItem.add({key: columnItem.key, value: item.value, checked: item.checked})
    } else {
      this.setFilterOfCheckedItem.forEach(f => f.value === item.value ? this.setFilterOfCheckedItem.delete(f) : f);
    }

    if (this.setFilterOfCheckedItem.size > 0) {
      let arr: ItemData[] = [];
      this.listOfData.forEach(data => {
        this.setFilterOfCheckedItem.forEach(f => {
          if (data[f.key as keyof typeof data] === f.value) {
            arr.push(data);
          }
        });
      });
      this.listOfDisplayData = arr;
    } else {
      this.listOfDisplayData = this.listOfData;
    }
  }
}
