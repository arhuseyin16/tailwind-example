import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsDashboardComponent } from './transactions-dashboard.component';
import { RouterModule, Routes } from "@angular/router";
import { MoneyMarketComponent } from './money-market/money-market.component';
import { MoneyFlowComponent } from './money-flow/money-flow.component';
import {TranslateModule} from "@ngx-translate/core";
import { TimerRefreshComponent } from './timer-refresh/timer-refresh.component';
import {NzInputNumberModule} from "ng-zorro-antd/input-number";
import {NzSwitchModule} from "ng-zorro-antd/switch";
import {FormsModule} from "@angular/forms";

const routes: Routes = [
  {
    path: '',
    component: TransactionsDashboardComponent
  }
]

@NgModule({
  declarations: [
    TransactionsDashboardComponent,
    MoneyMarketComponent,
    MoneyFlowComponent,
    TimerRefreshComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TranslateModule,
    NzInputNumberModule,
    NzSwitchModule,
    FormsModule
  ]
})
export class TransactionsDashboardModule { }
