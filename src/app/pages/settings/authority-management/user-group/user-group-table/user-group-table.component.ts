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
  editCache: { [key: string]: { edit: boolean; data: any } } = {};
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
      width: "540px"
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
  authSchemeList: any[] = [];
  userNameList: any[] = [];
  userAndAuthList: any[] = [];
  accordionUserIndex: any[] = [];
  accordionAuthIndex: any[] = [];
  lastSchemeId?: number;
  lastAuthId?: number;

  constructor( private notificationService: NotificationService,
               private modalService: ModalService) { }

  ngOnInit(): void {
    const scheme = [
      {
        id: 1,
        name: 'IT Yetki Şeması',
        auth: [
          {id: 1, authName: 'Banka İşlemleri'},
          {id: 2, authName: 'DBS'},
          {id: 3, authName: 'Pos'},
          {id: 4, authName: 'E Ödeme'},
        ]
      },
      {
        id: 2,
        name: 'Muasebe Yetki Şeması',
        auth: [
          {id: 1, authName: 'Banka İşlemleri'},
          {id: 2, authName: 'DBS'},
          // {id: 3, authName: 'Pos'},
          // {id: 4, authName: 'E Ödeme'}
        ]
      }
    ];
    const userName = [
      {
        id: 1,
        name: 'Hüseyin Ar',
      },
      {
        id: 2,
        name: 'Büşra Çetinkaya',
      },
      {
        id: 3,
        name: 'Ömer Faruk Arslan',
      },
      {
        id: 4,
        name: 'Ersoy Vatansever',
      },
      {
        id: 5,
        name: 'Vesile Soytürk',
      },
      {
        id: 6,
        name: 'Ali Veli',
      },
      {
        id: 7,
        name: 'Ahmet Mehmet',
      },
    ]
    const userName2 = [
      {
        id: 1,
        name: 'Hüseyin Ar',
      },
      {
        id: 2,
        name: 'Büşra Çetinkaya',
      },
      {
        id: 3,
        name: 'Ömer Faruk Arslan',
      },
      {
        id: 4,
        name: 'Vesile Soytürk',
      }
    ]
    this.listOfData = new Array(20).fill(0).map((_, index) => ({
      id: index,
      groupName: 'Frontend',
      userName: index%2 === 0 ? userName: userName2,
      authScheme: scheme,
      created: '12.10.2022 17:50'
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

  delete(id: number) {
    this.modalService.userGroupDeleteModal(id).afterClose.subscribe(res => {
      console.log(res);
    });
  }

  rowUserNameDetail(id: number, data: any) {
    this.listOfData.map((row: any, index: number) => {
      if (row.id === id) {
        this.accordionUserIndex[index] = this.accordionUserIndex[index] === undefined ? true : !this.accordionUserIndex[index];
        this.userNameList = [];
        if (this.accordionUserIndex[index]) {
          this.userNameList = data.userName;
          if (this.accordionAuthIndex[index]) {
            this.userAndAuthList = [];
            this.authSchemeList.map(x => {
              this.userAndAuthList.push({
                id: x.id,
                userName: '**',
                authName: x.authName
              });
            });
            this.userNameList.map((x, i) => {
              if (this.userAndAuthList[i]?.userName) {
                this.userAndAuthList[i].userName = x.name;
              } else {
                this.userAndAuthList.push({
                  id: x.id,
                  userName: x.name
                });
              }
            });
          }
        }
      } else {
        this.accordionUserIndex[index] = false;
      }
    });
  }

  rowAuthSchemeDetail(id: number, auth: any) {
    this.listOfData.map((row: any, index: number) => {
      if (row.id === id) {
        if (this.lastSchemeId === row.id && this.lastAuthId !== auth.id) {
          this.accordionAuthIndex[index] = true;
        } else {
          this.accordionAuthIndex[index] = this.accordionAuthIndex[index] === undefined ? true : !this.accordionAuthIndex[index];
        }
        this.authSchemeList = [];
        if (this.accordionAuthIndex[index]) {
          this.authSchemeList = auth.auth;
          if (this.accordionUserIndex[index]) {
            this.userAndAuthList = [];
            this.authSchemeList.map(x => {
              this.userAndAuthList.push({
                id: x.id,
                userName: '**',
                authName: x.authName
              });
            });
            this.userNameList.map((x, i) => {
              if (this.userAndAuthList[i]?.userName) {
                this.userAndAuthList[i].userName = x.name;
              } else {
                this.userAndAuthList.push({
                  id: x.id,
                  userName: x.name
                });
              }
            });
          }
        }
      } else {
        this.accordionAuthIndex[index] = false;
      }
    });
    this.lastSchemeId = id;
    this.lastAuthId = auth.id;
  }

  authEditModalClick() {
    this.modalService.userGroupEditModal().afterClose.subscribe(res => {
      console.log(res);
    });
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
}
