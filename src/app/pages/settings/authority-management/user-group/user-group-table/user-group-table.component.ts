import { Component, OnInit } from '@angular/core';
import {PAGE_SIZE} from "../../../../../shared/constants/table-page-size";
import {NotificationService} from "../../../../../service/notification/notification.service";
import {ModalService} from "../../../../../service/modal-service/modal.service";

@Component({
  selector: 'app-user-group-table',
  templateUrl: './user-group-table.component.html',
  styleUrls: ['./user-group-table.component.scss']
})
export class UserGroupTableComponent implements OnInit {
  pageSize = PAGE_SIZE;
  listOfColumn = [
    {
      title:'auth-management.groupName',
      compare: (a: any, b: any) => a.groupName - b.groupName,
      sort: true,
      sortOrder: null,
      width: "250px"
    },
    {
      title:'auth-management.userName',
      compare: (a: any, b: any) => a.userName - b.userName,
      sort: false,
      sortOrder: null,
      width: "auto"
    },
    {
      title:'auth-management.authScheme',
      compare: (a: any, b: any) => a.authScheme - b.authScheme,
      sort: false,
      sortOrder: null,
      width: "auto"
    },
    {
      title:'auth-management.created',
      compare: (a: any, b: any) => a.created - b.created,
      sort: false,
      sortOrder: null,
      width: "200px"
    }
  ]
  listOfSelection = [
    {
      text: localStorage.getItem('language') === 'tr' ? 'Seçili Kayıtları Sil': 'Delete Selected Records',
      onSelect: () => {
        // this.onAllChecked(true);
        // Toplu silmek için modal açılıp silme yaptırılacak
        if (this.setOfCheckedId.size !== 0) {
          this.modalService.userGroupDeleteModal(this.setOfCheckedId).afterClose.subscribe(res => {
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
    const scheme = [
      {
        id: 1,
        name: 'IT Yetki Şeması',
        auth: [
          {id: 1, name: 'Banka İşlemleri'},
          {id: 2, name: 'DBS'},
          {id: 3, name: 'Pos'},
          {id: 4, name: 'E Ödeme'},
        ]
      },
      {
        id: 2,
        name: 'Muasebe Yetki Şeması',
        auth: [
          {id: 1, name: 'Banka İşlemleri'},
          {id: 2, name: 'DBS'},
          {id: 3, name: 'Pos'},
          {id: 4, name: 'E Ödeme'},
        ]
      }
    ]
    this.listOfData = new Array(20).fill(0).map((_, index) => ({
      id: index,
      groupName: 'Frontend',
      userName: index % 2 === 0 ? ['Hüseyin Ar', 'Hüseyin Ar', 'Hüseyin Ar', 'Hüseyin Ar']: ['Hüseyin Ar', 'Hüseyin Ar', 'Hüseyin Ar', 'Hüseyin Ar', 'Hüseyin Ar'],
      authScheme: scheme,
      created: '12.10.2022 17:50',
    }));
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

  delete(id: number) {
    this.modalService.userGroupDeleteModal(id).afterClose.subscribe(res => {
      console.log(res);
    });
  }
}
