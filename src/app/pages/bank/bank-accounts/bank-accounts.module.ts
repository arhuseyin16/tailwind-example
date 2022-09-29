import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BankAccountsComponent } from './bank-accounts.component';
import {RouterModule, Routes} from "@angular/router";
import {NzSelectModule} from "ng-zorro-antd/select";
import {TranslateModule} from "@ngx-translate/core";
import { BankListComponent } from './bank-list/bank-list.component';
import { BankTableComponent } from './bank-table/bank-table.component';
import { BankLineChartComponent } from './bank-list/bank-line-chart/bank-line-chart.component';

const routes: Routes = [
  {
    path: '',
    component: BankAccountsComponent
  }
]

@NgModule({
  declarations: [
    BankAccountsComponent,
    BankListComponent,
    BankTableComponent,
    BankLineChartComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NzSelectModule,
    TranslateModule
  ]
})
export class BankAccountsModule { }
