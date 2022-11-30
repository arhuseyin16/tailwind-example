import { Component, inject, OnInit } from '@angular/core';
import { NzTableFilterFn, NzTableSortFn, NzTableSortOrder } from "ng-zorro-antd/table";
import { CdkDragStart, moveItemInArray } from "@angular/cdk/drag-drop";
import { ModalService } from "../../../../../service/modal/modal.service";
import { PrintReceiptModalComponent } from "../print-receipt-modal/print-receipt-modal.component";
import { SelectDeleteRecordModalComponent } from "../select-delete-record-modal/select-delete-record-modal.component";
import { EditUserDescriptionComponent } from "../edit-user-description/edit-user-description.component";
import { CreateFavoriteFilterComponent } from "../create-favorite-filter/create-favorite-filter.component";
import { Router } from "@angular/router";
import { Store } from "@ngxs/store";
import {
  DeleteFilterItemAction,
  SetFilterItemAction
} from "../../../../../store/filter/filter.action";
import { KeyValueType } from "../../../../../models/shared/key-value.type";
import { FilterState } from "../../../../../store/filter/filter.state";
import { find } from "rxjs";

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
  width?: string;
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
      text: 'Seçili Kayıtları Sil',
      onSelect: () => {
        this.openSelectDeleteRecordModal();
      }
    },
    {
      text: 'Favori Filtre Oluştur',
      onSelect: () => {
        this.openCreateFavoriteFilterModal()
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
  filterOfCheckedItems = new Array<TableFilterList>();

  previousIndex: number = 0;

  modalService = inject(ModalService);
  router = inject(Router);
  store = inject(Store);

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
      willBorrow: `Borç/Alacak - ${index}`,
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
        width: '170px'
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
        width: '150px'
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
        width: '140px'
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
        width: '215px'
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
        width: '195px'
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
        width: '230px'
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
        width: '150px'
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
        width: '100px'
      }
    ];
    this.store.select(FilterState.getFilterItems).subscribe(filterItems => {
      filterItems.forEach(item => {
        const findColumn = this.listOfColumns.find(column => column.key === item.key);
        findColumn?.listOfFilter?.forEach(col => {
          const checkValue = item.items.findIndex(i => i.value === col.value);
          if (checkValue !== -1) {
            col.checked === true;
          } else {
            col.checked === false;
          }
        });
        console.log(findColumn);
      });
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

  resetFilter(column: ColumnItem): void {
    column.listOfFilter?.forEach(item => item.checked = false);
    this.filterOfCheckedItems = this.filterOfCheckedItems.filter(item => item.key !== column.key);
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
    const filterItem: KeyValueType = {
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
      this.listOfDisplayData = this.listOfData.filter(data => this.filterOfCheckedItems.some(item => data[item.key as keyof typeof data] === item.value));
    } else {
      this.listOfDisplayData = this.listOfData;
    }
  }

  dragStarted(event: CdkDragStart, index: number) {
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
    this.listOfColumns.forEach((col, index) => {
      col.index = index;
      this.listOfColumns[index] = col;
    });
  }

  selectedColumnCheckedChange(column: ColumnItem) {
    console.log(column);
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

  openCreateFavoriteFilterModal() {
    const modalRef = this.modalService.create({
      nzContent: CreateFavoriteFilterComponent,
      nzClosable: false,
      nzFooter: null,
      nzBodyStyle: {'padding': '0', 'border-radius': '10px', 'background': '#fff'},
      nzWidth: '650px',
    });

    modalRef.afterClose.subscribe(result => console.log(result));
  }

  accountActivityDetail(id: number) {
    this.router.navigateByUrl(`/ui/bank/account-activities/detail?id=${id}`)
  }
}
