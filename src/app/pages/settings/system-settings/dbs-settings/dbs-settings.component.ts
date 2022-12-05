import { Component, OnInit } from '@angular/core';
import {HeaderConfigModel} from "../../../../models/header-config-model";
import {FavoriteStateModel} from "../../../../models/favorite-state.model";
import {Store} from "@ngxs/store";
import {Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";
import {HeaderConfigAction} from "../../../../store/header-config/header-config.action";
import {FavoriteAction} from "../../../../store/favorite/favorite.action";
import {PAGE_SIZE} from "../../../../shared/constants/table-page-size";
import {NotificationService} from "../../../../service/notification/notification.service";
import {ModalService} from "../../../../service/modal-service/modal.service";

@Component({
  selector: 'app-dbs-settings',
  templateUrl: './dbs-settings.component.html',
  styleUrls: ['./dbs-settings.component.scss']
})
export class DbsSettingsComponent implements OnInit {
  headerConfig: Array<HeaderConfigModel> = new Array<HeaderConfigModel>();
  favoriteModel: FavoriteStateModel = new FavoriteStateModel();
  checked = false;
  // indeterminate = false;
  listOfCurrentPageData: readonly any[] = [];
  pageSize = PAGE_SIZE;
  listOfData: readonly any[] = [];
  setOfCheckedId = new Set<number>();
  expiry: any;
  instructions: any;

  listOfColumn = [
    {
      title:'system-settings.user',
      compare: (a: any, b: any) => a.user - b.user,
      sort: true,
      sortOrder: null,
      width: "200px"
    },
    {
      title:'system-settings.title',
      compare: (a: any, b: any) => a.title - b.title,
      sort: true,
      sortOrder: null,
      width: "300px"
    },
    {
      title:'system-settings.mail',
      compare: (a: any, b: any) => a.mail - b.mail,
      sort: true,
      sortOrder: null,
      width: "350px"
    }
  ]

  constructor(private store: Store,
              private router: Router,
              private notificationService: NotificationService,
              private modalService: ModalService,
              private fb: FormBuilder) {
    const dataObj = {
      title: 'DBS Ayarları',
    }
    this.headerConfig.push({
      component: () => import('../../../../shared/component/header-title/header-title.component').then(it => it.HeaderTitleComponent),
      dataObj: dataObj
    });
    this.store.dispatch(new HeaderConfigAction(this.headerConfig));
    this.favoriteModel = {
      name: 'sidebar.dbs-settings',
      url: this.router.url
    }
    this.store.dispatch(new FavoriteAction(this.favoriteModel));
  }

  ngOnInit(): void {
    this.listOfData = new Array(200).fill(0).map((_, index) => ({
      id: index,
      user: `user${index}`,
      title: `title${index}`,
      mail: 'test@netbt.com'
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

  save() {
    if (this.setOfCheckedId.size === 0) {
      this.notificationService.warning('Uyarı', 'Tablodan kayıt seçiniz!');
      return;
    }
    if (!this.expiry) {
      this.notificationService.warning('Uyarı', 'Vade Tarihi Gelmemiş Talimatlar Seçimi Yapınız!');
      return;
    }
    if (!this.instructions) {
      this.notificationService.warning('Uyarı', 'Talimat Akıbet Okuma Seçimi Yapınız!');
      return;
    }
  }
}
