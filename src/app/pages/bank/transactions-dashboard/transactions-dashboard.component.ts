import { Component, OnInit } from '@angular/core';
import {Store} from "@ngxs/store";
import {HeaderConfigAction} from "../../../store/header-config/header-config.action";
import {TimerRefreshComponent} from "./timer-refresh/timer-refresh.component";

@Component({
  selector: 'app-transactions-dashboard',
  templateUrl: './transactions-dashboard.component.html',
  styleUrls: ['./transactions-dashboard.component.scss']
})
export class TransactionsDashboardComponent implements OnInit {

  constructor(private store: Store) {
    this.store.dispatch(new HeaderConfigAction('TimerRefreshComponent', null));
  }

  ngOnInit(): void {
  }

}
