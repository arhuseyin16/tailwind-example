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
      compare: null,
      sort: false,
      sortOrder: null,
      width: "200px"
    },
    {
      title:'',
      compare: null,
      sort: false,
      sortOrder: null,
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
  }

  onCurrentPageDataChange($event: readonly any[]): void {
    this.listOfCurrentPageData = $event;
  }
}
