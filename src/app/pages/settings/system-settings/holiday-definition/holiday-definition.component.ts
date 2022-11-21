import { Component, OnInit } from '@angular/core';
import {Store} from "@ngxs/store";
import {Router} from "@angular/router";
import {HeaderConfigModel} from "../../../../models/header-config-model";
import {FavoriteStateModel} from "../../../../models/favorite-state.model";
import {HeaderConfigAction} from "../../../../store/header-config/header-config.action";
import {FavoriteAction} from "../../../../store/favorite/favorite.action";
import {PAGE_SIZE} from "../../../../shared/constants/table-page-size";
import {ModalService} from "../../../../service/modal-service/modal.service";

@Component({
  selector: 'app-holiday-definition',
  templateUrl: './holiday-definition.component.html',
  styleUrls: ['./holiday-definition.component.scss']
})
export class HolidayDefinitionComponent implements OnInit {
  listOfData: readonly any[] = [];
  listOfCurrentPageData: readonly any[] = [];
  editCache: { [key: string]: { edit: boolean; data: any } } = {};
  headerConfig: Array<HeaderConfigModel> = new Array<HeaderConfigModel>();
  favoriteModel: FavoriteStateModel = new FavoriteStateModel();
  pageSize = PAGE_SIZE;
  listOfColumn = [
    {
      title:'system-settings.name',
      compare: (a: any, b: any) => a.name - b.name,
      sort: true,
      sortOrder: null,
      width: "300px"
    },
    {
      title:'system-settings.description',
      compare: (a: any, b: any) => a.description - b.description,
      sort: true,
      sortOrder: null,
      width: "450px"
    },
    {
      title:'system-settings.date',
      compare: (a: any, b: any) => a.date - b.date,
      sort: true,
      sortOrder: null,
      width: "200px"
    }
  ]

  constructor(private store: Store,
              private modalService: ModalService,
              private router: Router) {
    const dataObj = {
      title: 'Sistem Tatil Gün Tanımlama',
    }
    this.headerConfig.push({
      component: () => import('../../../../shared/component/header-title/header-title.component').then(it => it.HeaderTitleComponent),
      dataObj: dataObj
    });
    this.store.dispatch(new HeaderConfigAction(this.headerConfig));
    this.favoriteModel = {
      name: 'sidebar.system-holiday-definitions',
      url: this.router.url
    }
    this.store.dispatch(new FavoriteAction(this.favoriteModel));
  }

  ngOnInit(): void {
    this.listOfData = new Array(200).fill(0).map((_, index) => ({
      id: index,
      name: `${index + 1}test`,
      description: `açıklama${index + 1}`,
      date: '12.10.2022 17:50',
    }));
    this.updateEditCache();
  }

  updateEditCache(): void {
    this.listOfData.forEach(item => {
      this.editCache[item.id] = {
        edit: false,
        data: { ...item }
      };
    });
  }

  onCurrentPageDataChange($event: readonly any[]): void {
    this.listOfCurrentPageData = $event;
  }

  deleted(id: number) {
    this.modalService.holidayTableDeleteModal(id).afterClose.subscribe(res => {
      console.log(res);
    })
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

}
