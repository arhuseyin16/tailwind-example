import { Component, OnInit } from '@angular/core';
import {HeaderConfigModel} from "../../../../../models/header-config-model";
import {HeaderConfigAction} from "../../../../../store/header-config/header-config.action";
import {Store} from "@ngxs/store";
import {PAGE_SIZE} from "../../../../../shared/constants/table-page-size";
import {NotificationService} from "../../../../../service/notification/notification.service";

@Component({
  selector: 'app-ldap-users',
  templateUrl: './ldap-users.component.html',
  styleUrls: ['./ldap-users.component.scss']
})
export class LdapUsersComponent implements OnInit {
  headerConfig: Array<HeaderConfigModel> = new Array<HeaderConfigModel>();
  checked = false;
  // indeterminate = false;
  listOfCurrentPageData: readonly any[] = [];
  pageSize = PAGE_SIZE;
  listOfData: readonly any[] = [];
  setOfCheckedId = new Set<number>();

  listOfColumn = [
    {
      title:'system-settings.userCode',
      compare: (a: any, b: any) => a.userCode - b.userCode,
      sort: true,
      sortOrder: null,
      width: "200px"
    },
    {
      title:'system-settings.title',
      compare: (a: any, b: any) => a.title - b.title,
      sort: true,
      sortOrder: null,
      width: "200px"
    },
    {
      title:'system-settings.mail',
      compare: (a: any, b: any) => a.mail - b.mail,
      sort: true,
      sortOrder: null,
      width: "300px"
    },
    {
      title:'system-settings.mobilNumber',
      compare: (a: any, b: any) => a.mobilNumber - b.mobilNumber,
      sort: true,
      sortOrder: null,
      width: "200px"
    },
    {
      title:'system-settings.status',
      compare: (a: any, b: any) => a.status - b.status,
      sort: true,
      sortOrder: null,
      width: "auto"
    }
  ];

  listOfSelection = [
    {
      text: 'Seçili Kayıtları Senkronize Et',
      onSelect: () => {
        // this.onAllChecked(true);
        // Toplu silmek için modal açılıp silme yaptırılacak
        if (this.setOfCheckedId.size !== 0) {

        } else {
          this.notificationService.warning('UYARI', 'Seçim Yapınız!!!', 1000);
        }
      }
    },
  ];

  constructor(
    private store: Store,
    private notificationService: NotificationService
  ) {
    const dataObj = {
      title: 'Senkronize Edilecek LDAP Kullanıcıları',
    }
    this.headerConfig.push({
      component: () => import('../../../../../shared/component/header-title/header-title.component').then(it => it.HeaderTitleComponent),
      dataObj: dataObj
    });
    this.store.dispatch(new HeaderConfigAction(this.headerConfig));
  }

  ngOnInit(): void {
    this.listOfData = new Array(200).fill(0).map((_, index) => ({
      id: index,
      userCode: `user${index}`,
      title: `title${index}`,
      mail: 'test@netbt.com',
      mobilNumber: '5453545454',
      status: 'aktif'
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

}
