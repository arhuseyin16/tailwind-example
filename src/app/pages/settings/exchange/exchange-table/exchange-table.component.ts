import { Component, OnInit } from '@angular/core';
import {PAGE_SIZE} from "../../../../shared/constants/table-page-size";
import {NotificationService} from "../../../../service/notification/notification.service";
import {ModalService} from "../../../../service/modal-service/modal.service";

@Component({
  selector: 'app-exchange-table',
  templateUrl: './exchange-table.component.html',
  styleUrls: ['./exchange-table.component.scss']
})
export class ExchangeTableComponent implements OnInit {

  pageSize = PAGE_SIZE;
  editCache: { [key: string]: { edit: boolean; data: any } } = {};
  listOfColumn = [
    {
      title:'settings-exchange.registrationNumber',
      compare: (a: any, b: any) => a.registrationNumber - b.registrationNumber,
      sort: true,
      sortOrder: null,
      // width: "200px"
    },
    {
      title:'settings-exchange.currencyHistory',
      compare: (a: any, b: any) => a.currencyHistory - b.currencyHistory,
      sort: true,
      sortOrder: null,
      // width: "200px"
    },
    {
      title:'settings-exchange.sourcePB',
      compare: (a: any, b: any) => a.sourcePB - b.sourcePB,
      sort: true,
      sortOrder: null,
      // width: "150px"
    },
    {
      title:'settings-exchange.targetPB',
      compare: (a: any, b: any) => a.targetPB - b.targetPB,
      sort: true,
      sortOrder: null,
      // width: "150px"
    },
    {
      title:'settings-exchange.rateType',
      compare: (a: any, b: any) => a.rateTyperateType - b.rateType,
      sort: true,
      sortOrder: null,
      // width: "150px"
    },
    {
      title:'settings-exchange.rate',
      compare: (a: any, b: any) => a.rate - b.rate,
      sort: true,
      sortOrder: null,
      // width: "150px"
    },
    {
      title:'settings-exchange.priority',
      compare: (a: any, b: any) => a.priority - b.priority,
      sort: true,
      sortOrder: null,
      // width: "150px"
    },
    {
      title:'settings-exchange.creating',
      compare: (a: any, b: any) => a.creating - b.creating,
      sort: true,
      sortOrder: null,
      // width: "150px"
    },

    {
      title:'settings-exchange.update',
      compare: (a: any, b: any) => a.update - b.update,
      sort: true,
      sortOrder: null,
      width: "230px"
    },

  ]
  listOfSelection = [
    {
      text: localStorage.getItem('language') === 'tr' ? 'Seçili Kayıtları Sil': 'Delete Selected Records',
      onSelect: () => {
        // this.onAllChecked(true);
        // Toplu silmek için modal açılıp silme yaptırılacak
        if (this.setOfCheckedId.size !== 0) {
          this.modalService.exchangeTableDeleteModal(this.setOfCheckedId).afterClose.subscribe(res => {
            console.log(res);
          });
          console.log('multi deleted service');
        } else {
          this.notificationService.warning('UYARI', 'Seçim Yapınız!!!', 1000);
        }
      }
    },
    // {
    //   text: 'Select Odd Row',
    //   onSelect: () => {
    //     this.listOfCurrentPageData.forEach((data, index) => this.updateCheckedSet(data.id, index % 2 !== 0));
    //     this.refreshCheckedStatus();
    //   }
    // },
    // {
    //   text: 'Select Even Row',
    //   onSelect: () => {
    //     this.listOfCurrentPageData.forEach((data, index) => this.updateCheckedSet(data.id, index % 2 === 0));
    //     this.refreshCheckedStatus();
    //   }
    // }
  ];
  checked = false;
  // indeterminate = false;
  listOfCurrentPageData: readonly any[] = [];
  listOfData: readonly any[] = [];
  setOfCheckedId = new Set<number>();

  constructor(
    private notificationService: NotificationService,
    private modalService: ModalService
  ) { }

  ngOnInit(): void {
    this.listOfData = new Array(200).fill(0).map((_, index) => ({
      id: index,
      registrationNumber: 1234+index+1,
      currencyHistory: '10.10.2022',
      sourcePB: 'EUR',
      targetPB: 'TRY',
      rateType: 'F5',
      rate: '2.33',
      priority: 1 + index,
      creating: '12.10.2022 17:50',
      update: '12.10.2022 17:50',
    }));
    this.updateEditCache();
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

  onCurrentPageDataChange($event: readonly any[]): void {
    this.listOfCurrentPageData = $event;
    this.refreshCheckedStatus();
  }

  refreshCheckedStatus(): void {
    this.checked = this.listOfCurrentPageData.every(item => this.setOfCheckedId.has(item.id));
    // this.indeterminate = this.listOfCurrentPageData.some(item => this.setOfCheckedId.has(item.id)) && !this.checked;
  }

  startEdit(id: string): void {
    this.editCache[id].edit = true;
  }

  cancelEdit(id: string): void {
    const index = this.listOfData.findIndex(item => item.id === id);
    this.editCache[id] = {
      data: { ...this.listOfData[index] },
      edit: false
    };
  }

  saveEdit(id: string): void {
    const index = this.listOfData.findIndex(item => item.id === id);
    Object.assign(this.listOfData[index], this.editCache[id].data);
    this.editCache[id].edit = false;
  }

  updateEditCache(): void {
    this.listOfData.forEach(item => {
      this.editCache[item.id] = {
        edit: false,
        data: { ...item }
      };
    });
  }

  deleted(id: number) {
    this.modalService.exchangeTableDeleteModal(id).afterClose.subscribe(res => {
      console.log(res);
    })
  }
}
