import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {FavoriteListStateModel} from "../../../models/favorite-state.model";
import {FavoriteListState} from "../../../store/favorite/favorite-list.state";
import {HeaderDropdownState} from "../../../store/header-dropdown-valid/header-dropdown.state";
import {Observable} from "rxjs";
import {HeaderDropdownActionClear} from "../../../store/header-dropdown-valid/header-dropdown.action";

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.scss']
})
export class DashboardHeaderComponent implements OnInit, AfterViewInit {
  @Select(HeaderDropdownState.getDropdown) headerDropdown$?: Observable<any>;
  moduleList: Array<any> = new Array<any>();
  dashboardView = false;
  favoriteView = false;
  favoriteList: FavoriteListStateModel[] = [];
  dashboardList = [
    {
      id: 1,
      name: 'dashboard-header.cash-flow',
      image: 'assets/img/dashboard/dashboard-nakit.png',
      lightImage:'assets/img/dashboard/light-nakit.png',
      url: '/',
      status: true
    },
    {
      id: 2,
      name: 'dashboard-header.bank-transactions',
      image: 'assets/img/dashboard/dashboard-bank.png',
      lightImage:'assets/img/dashboard/light-bank.png',
      url: '/bank/transactions-dashboard',
      status: true
    },
    {
      id: 3,
      name: 'dashboard-header.pos-process',
      image: 'assets/img/dashboard/dashboard-pos.png',
      lightImage:'assets/img/dashboard/light-pos.png',
      url: '/',
      status: true
    },
    {
      id: 4,
      name: 'dashboard-header.e-payment',
      image: 'assets/img/dashboard/dashboard-e-odeme.png',
      lightImage:'assets/img/dashboard/light-e-odeme.png',
      url: '/',
      status: true
    },
    {
      id: 5,
      name: 'dashboard-header.dbs',
      image: 'assets/img/dashboard/dashboard-dbs.png',
      lightImage:'assets/img/dashboard/light-dbs.png',
      url: '/',
      status: true
    },
    {
      id: 6,
      name: 'dashboard-header.stock-finance',
      image: 'assets/img/dashboard/dashboard-stock.png',
      lightImage:'assets/img/dashboard/light-stock.png',
      url: '/',
      status: true
    },
  ];

  constructor(private store: Store) {
    this.moduleList = Object.assign([], this.dashboardList);
    this.favoriteList = this.store.selectSnapshot(FavoriteListState.getFavorite).list;
  }

  ngOnInit(): void {
  }

  change(): void {
    this.moduleList = [];
    this.dashboardList.forEach((row: any) => {
      if (row.status) {
        this.moduleList.push(row);
      }
    });
  }

  dashboardViewClick() {
    this.favoriteView = false;
    this.dashboardView = !this.dashboardView;
  }

  favoriteViewClick() {
    this.dashboardView = false;
    this.favoriteView = !this.favoriteView;
  }

  ngAfterViewInit() {
    this.headerDropdown$?.subscribe(state => {
      this.dashboardView = state.dashboardView;
      this.favoriteView = state.favorite;
    });
  }
}
