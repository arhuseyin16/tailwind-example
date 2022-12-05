import { Component, OnInit } from '@angular/core';
import {PAGE_SIZE} from "../../../../../shared/constants/table-page-size";
import {NotificationService} from "../../../../../service/notification/notification.service";
import {ModalService} from "../../../../../service/modal-service/modal.service";

@Component({
  selector: 'app-tag-table',
  templateUrl: './tag-table.component.html',
  styleUrls: ['./tag-table.component.scss']
})
export class TagTableComponent implements OnInit {

  pageSize = PAGE_SIZE;
  editCache: { [key: string]: { edit: boolean; data: any } } = {};
  listOfColumn = [
    {
      title:'system-settings.code',
      compare: (a: any, b: any) => a.code - b.code,
      sort: true,
      sortOrder: null,
      width: "150px"
    },
    {
      title:'system-settings.tagType',
      compare: (a: any, b: any) => a.tagType - b.tagType,
      sort: true,
      sortOrder: null,
      width: "150px"
    },
    {
      title:'system-settings.name',
      compare: (a: any, b: any) => a.name - b.name,
      sort: true,
      sortOrder: null,
      width: "200px"
    },
    {
      title:'system-settings.description',
      compare: (a: any, b: any) => a.description - b.description,
      sort: true,
      sortOrder: null,
      width: "200px"
    },
    {
      title:'system-settings.createdTime',
      compare: (a: any, b: any) => a.createdTime - b.createdTime,
      sort: true,
      sortOrder: null,
      width: "170px"
    },
    {
      title:'system-settings.updateTime',
      compare: (a: any, b: any) => a.updateTime - b.updateTime,
      sort: true,
      sortOrder: null,
      width: "170px"
    },
    {
      title:'system-settings.constituent',
      compare: (a: any, b: any) => a.constituent - b.constituent,
      sort: true,
      sortOrder: null,
      // width: "180px"
    },
    {
      title:'system-settings.updater',
      compare: (a: any, b: any) => a.updater - b.updater,
      sort: true,
      sortOrder: null,
      // width: "180px"
    },
  ]
  listOfSelection = [
    {
      text: localStorage.getItem('language') === 'tr' ? 'Seçili Kayıtları Sil': 'Delete Selected Records',
      onSelect: () => {
        // this.onAllChecked(true);
        // Toplu silmek için modal açılıp silme yaptırılacak
        if (this.setOfCheckedId.size !== 0) {
          this.modalService.tagTableDeleteModal(this.setOfCheckedId).afterClose.subscribe(res => {
            console.log(res);
          });
          console.log('multi deleted service');
        } else {
          this.notificationService.warning('UYARI', 'Seçim Yapınız!!!', 1000);
        }
      }
    },
  ];
  checked = false;
  listOfCurrentPageData: readonly any[] = [];
  listOfData: readonly any[] = [];
  setOfCheckedId = new Set<number>();

  constructor( private notificationService: NotificationService,
               private modalService: ModalService) { }

  ngOnInit(): void {
    this.listOfData = new Array(200).fill(0).map((_, index) => ({
      id: index,
      code: 1234+index+1,
      tagType: 'xyz',
      name: 'test',
      description: 'TRY',
      createdTime: '12.10.2022 17:50',
      updateTime: '12.10.2022 17:50',
      constituent: 'index',
      updater: 'index',
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
    this.modalService.tagTableDeleteModal(id).afterClose.subscribe(res => {
      console.log(res);
    })
  }

}
